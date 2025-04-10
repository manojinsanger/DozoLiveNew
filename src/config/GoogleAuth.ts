import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";
import { FacebookAuthProvider, fetchSignInMethodsForEmail, GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { Alert } from "react-native";
import { auth } from "./firebaseConfig";
import { sendFbTokenToBackend } from "../services/userAuth";

GoogleSignin.configure({
    webClientId: "210237367752-kd6a2ke3kmka06ueitfnhi8uehq3s2et.apps.googleusercontent.com",
});

export async function signInWithGoogle() {
    try {

        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

        const googleUser = await GoogleSignin.signIn();

        if (!googleUser || !googleUser.data || !googleUser.data.idToken) {
            throw new Error("No ID token found from Google Sign-In.");
        }

        const googleCredential = GoogleAuthProvider.credential(googleUser.data.idToken);

        const userCredential = await signInWithCredential(auth, googleCredential);
        // console.log(userCredential);

        const backendResponse = await sendFbTokenToBackend(
            (userCredential as any)._tokenResponse.idToken
        );

        // Alert.alert("Success", `Welcome ${backendResponse.user.name || "User"}!`);
        return backendResponse;
    } catch (error: any) {
        console.error("❌ Google Sign-In Error:", error);

        let errorMessage = "An unexpected error occurred. Please try again.";
        if (error.code) {
            switch (error.code) {
                case statusCodes.SIGN_IN_CANCELLED:
                    errorMessage = "You cancelled the login process.";
                    break;
                case statusCodes.IN_PROGRESS:
                    errorMessage = "Sign-in is already in progress.";
                    break;
                case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                    errorMessage = "Google Play Services are required. Please update or enable them.";
                    break;
                default:
                    errorMessage = error.message || "An unknown error occurred.";
                    break;
            }
        }

        Alert.alert("Login Failed", errorMessage);
        return null;
    }
}



export async function onFacebookButtonPress() {
    try {
        // Trigger Facebook Login
        const result = await LoginManager.logInWithPermissions(["public_profile", "email"]);

        if (result.isCancelled) {
            throw new Error("User cancelled the login process.");
        }

        const data = await AccessToken.getCurrentAccessToken();

        if (!data) {
            throw new Error("Something went wrong obtaining access token.");
        }

        const facebookCredential = FacebookAuthProvider.credential(data.accessToken);

        const userCredential = await signInWithCredential(auth, facebookCredential);

        const backendResponse = await sendFbTokenToBackend(
            (userCredential as any)._tokenResponse.idToken
        );

        // Alert.alert("Success", `Welcome ${backendResponse.user.name || "User"}!`);
        return backendResponse;
    } catch (error: any) {
        console.error("Facebook Sign-In Error:", error);
        if (error.code === "auth/account-exists-with-different-credential") {
            const email = error.email;
            const pendingCredential = error.credential;

            if (email) {
                const methods = await fetchSignInMethodsForEmail(auth, email);

                if (methods.includes("google.com")) {
                    Alert.alert(
                        "Account Conflict",
                        "An account with this email already exists with Google. Please sign in using Google."
                    );
                } else if (methods.includes("password")) {
                    Alert.alert(
                        "Account Conflict",
                        "An account with this email exists with email & password. Please sign in using email/password."
                    );
                }
            }
        } else {
            Alert.alert("Login Failed", error.message);
        }

        return null;
    }
}