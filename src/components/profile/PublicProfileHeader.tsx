import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import ThemedText from '@/components/ThemedText';
import { ProfileData } from '@/types/types';
import StatItem from './StatItem';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 
import ProfileLevels from './profileLevels';
import customColors from '@/constants/styles';

const PublicProfileHeader: React.FC<{ data: ProfileData }> = ({ data }) => {
    const [hasError, setHasError] = useState(false);

    // Uncomment this if you want error state to show on missing fields
    // useEffect(() => {
    //     if (!data || !data.name || !data.gender || !data.age) {
    //         setHasError(true);
    //     }
    // }, [data]);

    if (hasError) {
        return (
            <View style={styles.headerContainer}>
                <Text style={styles.errorText}>There was an error loading the profile data.</Text>
            </View>
        );
    }

    const handleCopyID = () => {
        Clipboard.setString(data.id); 
        Alert.alert('Copied to Clipboard', `ID: ${data.id}`);
    };

    const renderImage = (uri: string | undefined, defaultImage: any) => {
        return uri ? { uri } : defaultImage;
    };

    return (
        <View style={styles.headerContainer}>
            {/* Cover Image */}
            <Image
                source={renderImage(data?.coverImage, require('../../assets/images/profile_assets/default-cover.png'))}
                style={styles.coverImage}
            />

            {/* Profile Details */}
            <View style={styles.profileDetailsContainer}>
                <Image
                    source={renderImage(data?.profileImage, require('../../assets/images/profile_assets/default-profile.png'))}
                    style={styles.profileImage}
                />
                <View style={styles.profileInfoContainer}>
                    <ThemedText style={[styles.nameText, { color: 'white' }]}>
                        {data?.name}
                    </ThemedText>
                    <View style={styles.idContainer}>
                        <ThemedText style={styles.idText}>
                            ID: {data?.liveId}
                        </ThemedText>
                        <TouchableOpacity onPress={handleCopyID} style={styles.copyButton}>
                            <MaterialCommunityIcons
                                name="content-copy"
                                size={14}
                                style={styles.copyIcon}
                                color={customColors.gray700}
                            />
                        </TouchableOpacity>
                    </View>
                    <ProfileLevels data={data} />
                </View>
            </View>

            {/* Stats Row */}
            <View style={styles.statsRow}>
                <StatItem label="Friends" value={data?.friends?.length || 0} />
                <StatItem label="Follows" value={data?.followers?.length || 0} />
                <StatItem label="Followers" value={data?.followers?.length || 0} />
                <StatItem label="Visitors" value={data?.visitors?.length || 0} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {},
    coverImage: {
        width: '100%',
        height: 350,
        resizeMode: 'cover',
    },
    profileDetailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -40,
        paddingHorizontal: 10,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        resizeMode: 'cover',
        borderColor: 'white',
    },
    profileInfoContainer: {
        flex: 1,
        marginLeft: 10,
    },
    nameText: {
        marginTop: 10,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },
    idContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    idText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#fff',
    },
    copyButton: {
        marginLeft: 5,
        padding: 4,
    },
    copyIcon: {
        marginLeft: 1,
        resizeMode: 'contain',
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
    },
    errorText: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default PublicProfileHeader;
