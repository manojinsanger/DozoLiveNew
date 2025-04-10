import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ViewStyle, useWindowDimensions } from 'react-native';

interface LiveCardProps {
    name: string;
    image: string;
    tag: string;
    country: string;
    style?: ViewStyle;
    onPress?: () => void;
}

const LiveCard: React.FC<LiveCardProps> = ({ name, image, tag, country, onPress }) => {
    const { width } = useWindowDimensions();

    const cardWidth = Math.min(210, width / 2 - 20);
    const getFlagUrl = (countryCode: string) => {
        return `https://flagcdn.com/w320/${countryCode.toLowerCase()}.png`;
    };

    return (
        <TouchableOpacity onPress={onPress} style={[styles.cardContainer,
        { width: cardWidth, height: cardWidth, },
        ]}>
            {tag && (
                <View style={styles.tagContainer}>
                    <Text style={styles.tagText}>{tag}</Text>
                </View>
            )}

            <View style={styles.imageContainer}>
                <Image source={{ uri: image }} style={styles.cardImage} />
                <View style={styles.nameContainer}>
                    <Image
                        source={{ uri: getFlagUrl(country) }}
                        style={styles.flagImage}
                    />
                    <Text style={styles.nameText}>{name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        position: 'relative',
        width: '100%',
        height: 200,
        margin: 5,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#fff',
        overflow: 'hidden',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    tagContainer: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: '#ff5f5f',
        paddingVertical: 3,
        paddingHorizontal: 6,
        borderRadius: 15,
        zIndex: 1,
    },
    tagText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: '600',
    },
    imageContainer: {
        position: 'relative',
    },
    cardImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    nameContainer: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderRadius: 8,
    },
    flagImage: {
        width: 20,
        height: 15,
        marginRight: 8,
    },
    nameText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default LiveCard;
