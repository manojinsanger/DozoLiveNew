import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { checkAuth } from "../config/checkAuth"; 
import LoadingScreen from "../components/common/Loading";
import { redirect } from "../utils/navigationService"; // 👈 your new redirect helper

type AuthContextType = {
    user: User | null;
    loading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initializeAuth = async () => {
            try {
                setLoading(true);
                const authenticatedUser = await checkAuth();

                if (!authenticatedUser || !authenticatedUser.success) {
                    console.warn("Unauthorized access! Redirecting to login...");
                    redirect("AuthScreen", undefined, { replace: true }); // 👈 use your helper
                    return;
                }

                setUser(authenticatedUser.data);
            } catch (error) {
                console.error("Error during authentication:", error);
                redirect("AuthScreen", undefined, { replace: true }); // 👈 fallback redirect
            } finally {
                setLoading(false);
            }
        };

        initializeAuth();

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return <LoadingScreen size={250} />;
    }

    return (
        <AuthContext.Provider value={{ user, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

console.log("auth object:", auth);


export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
};
