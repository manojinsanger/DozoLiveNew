import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import userImg from "../../assets/images/icon/user-profile.png";
import { goBack } from "../../utils/navigationService";
import { scaleHeight, scaleWidth, scaleFont } from "../../constants/scaling"

const LevelHeader = ({
  activeTab,
  handleSetActiveTab,
}: {
  activeTab: string;
  handleSetActiveTab: (tab: string) => void;
}) => {
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const storedUser = await AsyncStorage.getItem("fbUser");
      const parsedUser = storedUser ? JSON.parse(storedUser) : null;
      setUser(parsedUser);
    };
    fetchUserData();
  }, []);

  return (
    <LinearGradient
      colors={
        activeTab === "wealthLevel"
          ? ["#151515", "#151515"]
          : ["#FF9C47", "#FF6AA4"]
      }
      style={styles.headerContainer}
    >
      <View style={styles.navBar}>
        <MaterialIcons
          name="arrow-back"
          size={scaleFont(22)}
          onPress={goBack}
          color="#fff"
        />
        <View style={styles.navTitleContainer}>
          <TouchableOpacity onPress={() => handleSetActiveTab("wealthLevel")}>
            <Text
              style={
                activeTab === "wealthLevel"
                  ? styles.activeNavTitle
                  : styles.inactiveNavTitle
              }
            >
              Wealth level
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleSetActiveTab("livestreamLevel")}
          >
            <Text
              style={
                activeTab === "livestreamLevel"
                  ? styles.activeNavTitle
                  : styles.inactiveNavTitle
              }
            >
              Livestream level
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.headerContentContainer}>
        <View style={styles.headerCircle}>
          <Image
            source={
              user?.profileImage != null
                ? { uri: user.profileImage }
                : userImg
            }
            style={styles.profileImage}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default LevelHeader;

const styles = StyleSheet.create({
  headerContainer: {
    height: scaleHeight(260),
    paddingTop: scaleHeight(40),
    paddingHorizontal: scaleWidth(20),
  },
  headerContentContainer: {
    alignItems: "center",
    marginTop: scaleHeight(40),
  },
  navBar: {
    flexDirection: "row",
    alignItems: "center",
  },
  navTitleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
  activeNavTitle: {
    color: "white",
    fontSize: scaleFont(18),
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderColor: "white",
    marginRight: scaleWidth(30),
  },
  inactiveNavTitle: {
    color: "white",
    fontSize: scaleFont(16),
    marginRight: scaleWidth(30),
  },
  headerCircle: {
    borderRadius: scaleWidth(65),
    backgroundColor: "#52ACF1",
    justifyContent: "center",
    alignItems: "center",
  },
  profileImageContainer: {
    marginTop: scaleHeight(10),
    alignItems: 'center',
  },
  profileImage: {
    width: scaleWidth(100),
    height: scaleWidth(100),
    borderRadius: scaleWidth(100),
    resizeMode: "cover",
  },
  coverImage: {
    width: '100%',
    height: scaleHeight(200),
    resizeMode: 'cover',
  },
  currentStarBadge: {
    position: "absolute",
    bottom: -scaleHeight(15),
    backgroundColor: "#EA138F",
    paddingHorizontal: scaleWidth(20),
    paddingVertical: scaleHeight(5),
    borderRadius: scaleWidth(15),
  },
  currentStarText: {
    color: "white",
    fontWeight: "bold",
    fontSize: scaleFont(14),
  },
});
