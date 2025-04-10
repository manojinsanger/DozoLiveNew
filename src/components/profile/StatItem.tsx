import React from 'react';
import { StyleSheet, View } from 'react-native';
import ThemedText from '../ThemedText';
import { StatItemProps } from '@/types/types';
import customColors from '@/constants/styles';

const StatItem: React.FC<StatItemProps> = ({ label, value }) => {
    return (
        <View style={styles.statItem}>
            <ThemedText style={styles.statValue}>
                {value}
            </ThemedText>
            <ThemedText style={styles.statLabel}>
                {label}
            </ThemedText>
        </View>
    );
};

const styles = StyleSheet.create({
    statItem: {
        alignItems: 'center',
    },
    statValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: customColors.white
    },
    statLabel: {
        fontSize: 12,
        color: customColors.white
    },
});

export default StatItem;
