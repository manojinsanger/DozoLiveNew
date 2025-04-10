import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { goBack } from "@/utils/navigationService";

type CustomHeaderProps = {
    title: string;
    onPressHandle?: () => void;
    rightHeader?: React.ReactNode;
};

const CustomHeader = (props: CustomHeaderProps) => (
    <View style={styles.header}>
        <TouchableOpacity onPress={() => goBack()}>
            <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{props.title}</Text>
        <TouchableOpacity onPress={props.onPressHandle}>
           {props.rightHeader}
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '500',
    },
    detailsText: {
        fontSize: 16,
    },
});

export default CustomHeader;