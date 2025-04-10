import React, { useState, useEffect, useRef } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    FlatList,
    Animated,
    Dimensions,
} from 'react-native';
import { BannerProps } from '../../types/types';
import { scaleFont, scaleHeight, scaleWidth } from '../../constants/scaling';

const Banner: React.FC<BannerProps> = ({ banners = [], height = scaleHeight(100) }) => { 
    const { width } = Dimensions.get('window');
    const scrollX = useRef(new Animated.Value(0)).current;
    const flatListRef = useRef<FlatList>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            flatListRef.current?.scrollToOffset({
                offset: ((scrollX as any)._value + width) % (banners.length * width),
                animated: true,
            });
        }, 10000);

        return () => clearInterval(interval);
    }, [banners, width]);

    const renderItem = ({ item }: any) => (
        <ImageBackground 
            source={{ uri: item.imageUrl }} 
            style={styles.banner}
        >
            <View style={[styles.overlay, { height }]}>
                <Text style={styles.bannerText}>{item.text}</Text>
            </View>
        </ImageBackground>
    );

    return (
        <View style={[styles.carouselContainer, { height }]}>
            <FlatList
                data={banners}
                ref={flatListRef}
                renderItem={renderItem}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                )}
            />
            <View style={styles.dotContainer}>
                {banners.map((_, index) => {
                    const dotOpacity = scrollX.interpolate({
                        inputRange: [
                            (index - 1) * width,
                            index * width,
                            (index + 1) * width,
                        ],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: 'clamp',
                    });

                    const dotScale = scrollX.interpolate({
                        inputRange: [
                            (index - 1) * width,
                            index * width,
                            (index + 1) * width,
                        ],
                        outputRange: [1, 1.5, 1],
                        extrapolate: 'clamp',
                    });

                    return (
                        <Animated.View
                            key={index}
                            style={[
                                styles.dot,
                                {
                                    opacity: dotOpacity,
                                    transform: [{ scale: dotScale }],
                                },
                            ]}
                        />
                    );
                })}
            </View>
        </View>
    );
};

export default Banner;

const styles = StyleSheet.create({
    carouselContainer: {
        height: scaleHeight(100), 
        marginVertical: scaleHeight(10),
    },
    banner: {
        width: Dimensions.get('window').width - scaleWidth(20), // Scaled margin
        marginHorizontal: scaleWidth(10),
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scaleWidth(10),
        overflow: 'hidden',
        backgroundColor: '#333',
    },
    gradient: { // Kept for reference, though commented out
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '50%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: scaleHeight(20),
        paddingHorizontal: scaleWidth(10),
    },
    bannerText: {
        fontSize: scaleFont(22),
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.7)',
        textShadowOffset: { width: scaleWidth(1), height: scaleHeight(1) },
        textShadowRadius: scaleWidth(5),
    },
    dotContainer: {
        position: 'absolute',
        bottom: scaleHeight(5),
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dot: {
        width: scaleWidth(6),
        height: scaleHeight(6),
        backgroundColor: '#fff',
        margin: scaleWidth(5),
        borderRadius: scaleWidth(5),
        elevation: 3,
    },
    overlay: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: scaleWidth(10),
    },
});