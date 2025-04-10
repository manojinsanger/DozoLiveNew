import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import customColors from '../../../constants/styles';

const LinnerGradientCard2 = ({
    children,
    customStyles,
}: { children: any, customStyles: any }) => {
    return (
        <LinearGradient
            colors={[customColors.primary, customColors.secondary]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.mainContainer, customStyles]}
        >
            {children}
        </LinearGradient>
    );
};

export default LinnerGradientCard2;

const styles = StyleSheet.create({
    mainContainer: {
        // padding: 15,
        borderRadius: 10,
        marginBottom: 15,
    },
});