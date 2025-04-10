import { Ionicons } from "@expo/vector-icons"
import React from "react"
import { View, Text, StyleSheet } from "react-native"

const PointsCard = () => {
    const availablePoints = 256562;
    const pointsToBeConfirmed = 0;
    const totalPointsFromIncome = 256562;

    return (
        <View style={styles.pointsCard}>
            <View style={styles.pointsSection}>
                <View style={styles.centerText}>
                    <Text style={styles.pointsLabel}>Available points</Text>
                    <Ionicons name="information-circle-outline" size={16} color="white" />
                </View>
                <Text style={styles.pointsValue}>{availablePoints.toLocaleString()}</Text>
            </View>

            <View style={styles.pointsRow}>
                <View style={styles.pointsColumn}>
                    <Text style={styles.pointsSubLabel}>Points to be confirmed</Text>
                    <Text style={styles.pointsSubValue}>{pointsToBeConfirmed}</Text>
                </View>

                <View style={styles.pointsColumn}>
                    <Text style={styles.pointsSubLabel}>Total points from income <Ionicons name="information-circle-outline" size={14} color="white" /></Text>
                    <Text style={styles.pointsSubValue}>{totalPointsFromIncome.toLocaleString()}</Text>
                </View>
            </View>
        </View>
    )
}

export default PointsCard;

const styles = StyleSheet.create({
    pointsCard: {
        backgroundColor: '#FF6B8B',
        borderRadius: 12,
        marginHorizontal: 16,
        marginTop: 8,
        padding: 16,
    },
    pointsSection: {
        marginBottom: 16,
    },
    pointsLabel: {
        color: 'white',
        opacity: 0.8,
        fontSize: 14,
    },
    pointsValue: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 4,
    },
    pointsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    pointsColumn: {
        flex: 1,
        alignContent: 'center'
    },
    pointsSubLabel: {
        color: 'white',
        opacity: 0.8,
        fontSize: 12,
    },
    pointsSubValue: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 4,
    },
    centerText: {
        flexDirection: 'row',
        alignItems: "center",
        alignContent: "center",
        gap: 5,
    }
});