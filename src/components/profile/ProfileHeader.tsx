import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard'; // ✅ Updated import
import ThemedText from '@/components/ThemedText';
import { ProfileData } from '@/types/types';
import StatItem from './StatItem';
import ProfileLevels from './profileLevels';
import { scaleFont, scaleHeight, scaleWidth } from '@/constants/scaling';
import customColors from '@/constants/styles';
import UserProfile from '@/assets/images/icon/userProfile.png';

const ProfileHeader: React.FC<{ data: ProfileData }> = ({ data }) => {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        if (!data || !data.name || !data.gender) {
            setHasError(true);
        } else {
            setHasError(false);
        }
    }, [data]);

    if (hasError) {
        return (
            <View style={styles.headerContainer}>
                <Text style={styles.errorText}>There was an error loading the profile data.</Text>
            </View>
        );
    }

    const handleCopyID = () => {
        Clipboard.setString(data.id); // ✅ Updated method
        Alert.alert('Copied to Clipboard', `ID: ${data.id}`);
    };

    return (
        <View style={styles.headerContainer}>
            {/* Profile Image */}
            <View style={styles.profileImageContainer}>
                {data.profileImage ? (
                    <Image source={{ uri: data.profileImage }} style={styles.profileImage} />
                ) : (
                    <Image source={UserProfile} style={styles.profileImage} />
                )}
            </View>

            <ThemedText style={styles.nameText}>{data.name}</ThemedText>

            <TouchableOpacity onPress={handleCopyID} style={styles.idContainer}>
                <Text style={styles.idText}>ID: {data.id}</Text>
                <Text style={styles.copyButton}>📋</Text>
            </TouchableOpacity>

            <ProfileLevels data={data} />

            <View style={styles.statsRow}>
                <StatItem label="Friends" value={0} />
                <StatItem label="Follows" value={0} />
                <StatItem label="Followers" value={0} />
                <StatItem label="Visitors" value={0} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        marginBottom: scaleHeight(5),
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImageContainer: {
        marginTop: scaleHeight(10),
        alignItems: 'center',
    },
    profileImage: {
        width: scaleWidth(100),
        height: scaleWidth(100),
        borderRadius: scaleWidth(50),
        borderWidth: scaleWidth(3),
        resizeMode: 'cover',
        borderColor: customColors.white,
    },
    nameText: {
        fontSize: scaleFont(22),
        fontWeight: 'bold',
        color: customColors.white,
        marginTop: scaleHeight(5),
    },
    idContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: scaleHeight(8),
    },
    idText: {
        fontSize: scaleFont(15),
        fontWeight: '500',
        color: customColors.white,
    },
    copyButton: {
        fontSize: scaleFont(16),
        color: customColors.white,
        marginLeft: scaleWidth(5),
    },
    statsRow: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        paddingVertical: scaleHeight(10),
    },
    errorText: {
        fontSize: scaleFont(18),
        color: 'red',
        textAlign: 'center',
        marginTop: scaleHeight(20),
    },
});

export default ProfileHeader;
