import { } from "react-native";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import  ThemedText  from "../ThemedText";
import { useRouter } from "expo-router";
import AboutIcon from "@/assets/images/icon/AboutIcon";


const ButtonCard: React.FC<{ label: string; icon: any; routePath: string }> = ({ label, icon, routePath }) => {
    const router = useRouter()

    return (
        <TouchableOpacity style={styles.buttonCard} onPress={() => router.push(routePath as any)}>
            {/* <Image source={icon} style={styles.buttonIcon} /> */}
            {
                icon
            }
            <ThemedText  style={styles.buttonLabel}>
                {label}
            </ThemedText>
        </TouchableOpacity>
    )
};


const styles = StyleSheet.create({
    buttonCard: {
        width: '25%',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 7,
    },
    buttonIcon: {
        width: 35,
        height: 35,
        marginBottom: 12,
        resizeMode: 'contain',
    },
    buttonLabel: {
        fontSize: 12,
        textAlign: 'center',
    },
});

export default ButtonCard;