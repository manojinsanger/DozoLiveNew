import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import  ThemedText  from '@/components/ThemedText';

// Import the necessary assets
import CoinIcon from '../../assets/images/profile_assets/coin.png';
import wealthLevelIcon from "../../assets/images/wealthlevel/ic_user_level_1to19.png";
import livestreamlevelBg from "../../assets/images/livestreamlevel/lv0.png";
import livestreamlevelBadge from "../../assets/images/livestreamlevel/lv0_bg.png";
import femaleIcon from "../../assets/images/icon/femaleIcon.png";
import maleIcon from "../../assets/images/icon/manIcon.png";

interface ProfileData {
  gender: 'Male' | 'Female';
  age?: number;
}

const GenderProfile = ({ gender, age }: ProfileData) => {
  const isFemale = gender === 'Female';
  const genderIcon = isFemale ? femaleIcon : maleIcon;
  const genderColor = isFemale ? '#f1567d' : '#49ADF5'; 

  return (
    <View style={[styles.chip, styles.genderChip, { backgroundColor: genderColor }]}>
      <Image
        source={genderIcon}
        style={styles.icon}
      />
      <ThemedText style={[styles.chipText, { color: 'white', paddingInlineStart: !isFemale ? 2 : 0 }]}>
        {age || 0}
      </ThemedText>
    </View>
  );
};


const ProfileLevels = ({ data }: { data: ProfileData }) => {
  return (
    <View style={styles.infoRow}>
      <GenderProfile gender={data.gender} />

      {/* Wealth Level Badge */}
      <View style={styles.levelBadgeContainer}>
        <Image source={wealthLevelIcon} style={styles.levelBadge} />
        <ThemedText style={styles.levelText}>1</ThemedText>
      </View>

      {/* Livestream Level Badge */}
      <View style={styles.levelBadgeContainer}>
        <Image source={livestreamlevelBg} style={styles.levelIcon} />
        <Image
          source={livestreamlevelBadge}
          style={styles.livestreamLevelBg}
          resizeMode="contain"
        />
        <Text style={[styles.levelText, { paddingLeft: 5 }]}>{0}</Text>
      </View>

      {/* Coin Seller Badge */}
      <View style={[styles.chip, styles.coinSellerChip]}>
        <Image source={CoinIcon} style={styles.icon} />
        <ThemedText style={[styles.chipText, { color: 'white' }]} >
          Coin Seller
        </ThemedText>
      </View>

      {/* Official Badge */}
      <View style={[styles.chip, styles.officialChip]}>
        <ThemedText style={[styles.chipText, { color: 'white' }]} >
          Official
        </ThemedText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoRow: {
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
    marginTop: 0,
    fontSize: 12,
    justifyContent: 'center',
  },
  chipText: {
    marginLeft: 2,
    fontWeight: '600',
    fontSize: 8,
  },
  genderChip: {
    backgroundColor: '#f1567d',
  },
  coinSellerChip: {
    backgroundColor: '#f1567d',
  },
  officialChip: {
    backgroundColor: '#1966e3',
  },
  icon: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
  },
  levelBadgeContainer: {
    position: "relative",
    width: 50,
    height: 22,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  levelBadge: {
    position: "absolute",
    width: 42,
    height: 18,
    left: 0,
    zIndex: 5
  },
  livestreamLevelBg: {
    position: "absolute",
    width: 38,
    transform: [{ rotate: "360deg" }],
    left: 6,
    zIndex: 1,
  },
  levelIcon: {
    position: "absolute",
    width: 20,
    height: 20,
    left: 0,
    zIndex: 5
  },
  levelText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 10,
    position: "absolute",
    zIndex: 10,
  },
});

export default ProfileLevels;