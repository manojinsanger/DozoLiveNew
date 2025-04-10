import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { formatNumber } from '../../utils/helper';
import Svg, { Path } from 'react-native-svg';

interface ProgressBarProps {
    currentPoints: number;
    totalPoints: number;
    activeTab: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentPoints, totalPoints, activeTab }) => {
    const progress = Math.min(currentPoints / totalPoints, 1);
    const remainingPoints = totalPoints - currentPoints;
    const bubblePosition: `${number}%` = progress > 0.85 ? '75%' : `${progress * 100}%`;

    // Get gradient colors based on active tab
    const getGradientColors = (): [string, string, ...string[]] => {
        switch (activeTab) {
            case 'livestreamLevel':
                return ['#FF8592', '#FF6B7A', '#FF5267'];
            case 'wealthLevel':
                return ['#EC9355', '#D98245', '#C77135'];
            default:
                return ['#EC9355', '#D98245', '#C77135'];
        }
    };

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={getGradientColors()}
                style={styles.background}
            >
                <View style={styles.waveBackground}>
                    <Svg height="100%" width="100%" viewBox="0 0 1440 320" style={styles.waveSvg}>
                        <Path
                            fill="rgba(255, 255, 255, 0.1)"
                            d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,112C672,107,768,117,864,138.7C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        />
                    </Svg>
                </View>
                
                {/* Points bubble positioned at progress point */}
                <View style={styles.bubbleWrapper}>
                    <View 
                        style={[
                            styles.pointsBubbleContainer,
                            { left: bubblePosition, transform: [{ translateX: -50 }] }
                        ]}
                    >
                        <View style={styles.pointsBubble}>
                            <Text style={styles.pointsText}>{formatNumber(currentPoints)}</Text>
                        </View>
                        <View style={styles.bubblePointer} />
                    </View>
                </View>
                
                <View style={styles.progressBarContainer}>
                    <View style={styles.progressBarBackground}>
                        <View
                            style={[
                                styles.progressBarFill,
                                { width: `${progress * 100}%` }
                            ]}
                        />
                    </View>
                </View>
                
                <View style={styles.labelsContainer}>
                    <Text style={styles.labelText}>Current points</Text>
                    <View style={styles.rightLabelContainer}>
                        <Text style={styles.labelText}>
                            The distance to upgrade{' '}
                        </Text>
                        <Text style={[styles.labelText, styles.highlightedText]}>
                            {formatNumber(remainingPoints)}
                        </Text>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        overflow: 'hidden',
    },
    background: {
        padding: 20,
        paddingTop: 30,
        paddingBottom: 25,
        position: 'relative',
    },
    waveBackground: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '100%',
        opacity: 0.6,
    },
    waveSvg: {
        position: 'absolute',
        bottom: 0,
    },
    bubbleWrapper: {
        position: 'relative',
        height: 50,
        width: '100%',
    },
    pointsBubbleContainer: {
        position: 'absolute',
        alignItems: 'center',
        marginBottom: 20,
    },
    pointsBubble: {
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 6,
        paddingHorizontal: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.09,
        shadowRadius: 12,
        // elevation: 3,
    },
    bubblePointer: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderTopWidth: 10,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: 'white',
        position: 'absolute',
        bottom: -8,
    },
    pointsText: {
        color: '#FF5B70',
        fontSize: 14,
        fontWeight: 'bold',
    },
    progressBarContainer: {
        width: '100%',
        marginBottom: 10,
    },
    progressBarBackground: {
        height: 6,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 3,
        overflow: 'hidden',
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 3,
    },
    labelsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    labelText: {
        color: 'white',
        fontSize: 14,
        opacity: 0.9,
    },
    rightLabelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    highlightedText: {
        fontWeight: 'bold',
    },
});

export default ProgressBar;