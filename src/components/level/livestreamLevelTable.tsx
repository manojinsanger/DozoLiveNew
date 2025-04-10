import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Platform,
  ImageSourcePropType,
  Image,
} from "react-native";
import ProgressBar from "./ProgressBar";
import { formatNumber } from "../../utils/helper";

// Define the type for level data
type LiveSessionData = {
  level: number;
  pointsRequired: number;
  levelBg: string;
  levelIcon: string;
};;

// Props type for the component
type livestreamProps = {
  data?: LiveSessionData[];
  title?: string;
  pointsTitle?: string;
};

const LivestreamTable: React.FC<livestreamProps> = ({
  data = livestreamLevelData,
  title = "Level",
  pointsTitle = "Points required to upgrade",
}) => {
  const currentCoins = 1395681522357; 
  const upgradeDistance = 293328478; 
  const totalRequired = currentCoins + upgradeDistance;

  const renderLevelItem = ({ item }: { item: LiveSessionData }) => (
    <View style={styles.row}>
      <View style={styles.levelCol}>
        <View style={styles.levelBadgeContainer}>
          <Image source={levelImages[item.levelBg]} style={styles.levelBadge} />
          <Image
            source={levelIcons[item.levelIcon]}
            style={styles.levelIcon}
            resizeMode="contain"
          />

          <Text style={styles.levelText}>{item.level - 1}</Text>
        </View>
      </View>
      <View style={styles.columnDivider} />
      <View style={styles.pointsCol}>
        <Text style={styles.pointsText}>
          {formatNumber(item.pointsRequired)}
        </Text>
      </View>
    </View>
  );

  return (
    <>
      <ProgressBar
        currentPoints={currentCoins}
        totalPoints={totalRequired}
        activeTab={'livestreamLevel'}
      />
      <View style={styles.tableContainer}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
            <Text style={[styles.headerText, styles.pointsHeaderText]}>
              {pointsTitle}
            </Text>
          </View>

          <FlatList
            data={data}
            renderItem={renderLevelItem}
            keyExtractor={(item) => `livestream-level-${item.level}`}
            showsVerticalScrollIndicator={Platform.OS === "web"}
            style={styles.list}
            contentContainerStyle={styles.listContent}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  tableContainer: {
    borderRadius: 10,
    overflow: "hidden",
    padding: 20,
  },
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    width: "100%",
  },
  levelBadge: {
    position: "absolute",
    width: 55,
    height: 20,
    transform: [{ rotate: "360deg" }], 
    left: 0, 
  },
  levelIcon: {
    position: "absolute",
    width: 28,
    height: 30,
    zIndex: 3,
    left: -6,
  },
  levelText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
    position: "absolute",
    zIndex: 4,
    left: 28,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  levelCol: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center", 
  },
  columnDivider: {
    width: 1,
    height: "100%",
    backgroundColor: "#f0f0f0",
  },
  pointsCol: {
    flex: 1,
    alignItems: "center", 
    justifyContent: "center", 
  },
  header: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    flex: 1,
    textAlign: "center", // Center the header text
    paddingHorizontal: 10,
  },
  pointsHeaderText: {
    textAlign: "center", // Center the header text
  },
  pointsText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center", // Center the text
  },
  levelBadgeContainer: {
    position: "relative",
    width: 50,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  separator: {
    height: 1,
    backgroundColor: "#f0f0f0",
    marginLeft: 20,
  },
  list: {
  },
  listContent: {
    paddingBottom: 10,
  },
});

export default LivestreamTable;

const levelImages: { [key: string]: ImageSourcePropType } = {
  "lv0_bg.png": require("../../assets/images/livestreamlevel/lv0_bg.png"),
  "lv1_bg.png": require("../../assets/images/livestreamlevel/lv1_bg.png"),
  "lv10_bg.png": require("../../assets/images/livestreamlevel/lv10_bg.png"),
  "lv20_bg.png": require("../../assets/images/livestreamlevel/lv20_bg.png"),
  "lv30_bg.png": require("../../assets/images/livestreamlevel/lv30_bg.png"),
  "lv40_bg.png": require("../../assets/images/livestreamlevel/lv40_bg.png"),
  "lv50_bg.png": require("../../assets/images/livestreamlevel/lv50_bg.png"),
  "lv60_bg.png": require("../../assets/images/livestreamlevel/lv60_bg.png"),
  "lv70_bg.png": require("../../assets/images/livestreamlevel/lv70_bg.png"),
  "lv80_bg.png": require("../../assets/images/livestreamlevel/lv80_bg.png"),
  "lv90_bg.png": require("../../assets/images/livestreamlevel/lv90_bg.png"),
  "lv100_bg.png": require("../../assets/images/livestreamlevel/lv100_bg.png"),
};

const levelIcons: { [key: string]: ImageSourcePropType } = {
  "lv0.png": require("../../assets/images/livestreamlevel/lv0.png"),
  "lv1.png": require("../../assets/images/livestreamlevel/lv1.png"),
  "lv10.png": require("../../assets/images/livestreamlevel/lv10.png"),
  "lv20.png": require("../../assets/images/livestreamlevel/lv20.png"),
  "lv30.png": require("../../assets/images/livestreamlevel/lv30.png"),
  "lv40.png": require("../../assets/images/livestreamlevel/lv40.png"),
  "lv50.png": require("../../assets/images/livestreamlevel/lv50.png"),
  "lv60.png": require("../../assets/images/livestreamlevel/lv60.png"),
  "lv70.png": require("../../assets/images/livestreamlevel/lv70.png"),
  "lv80.png": require("../../assets/images/livestreamlevel/lv80.png"),
  "lv90.png": require("../../assets/images/livestreamlevel/lv90.png"),
  "lv100.png": require("../../assets/images/livestreamlevel/lv100.png"),
};

// Updated wealth level data with the provided values
const pointsRequired = [
  0, 10000, 70000, 250000, 630000, 1410000, 3010000, 5710000, 10310000, 18110000, 31010000,
  52010000, 85010000, 137010000, 214010000, 323010000, 492010000, 741010000, 1100010000,
  1689010000, 2528010000, 3637010000, 5137010000, 7337010000, 10137010000, 14137010000,
  19137010000, 30000000000, 45000000000, 60000000000, 80000000000, 100000000000, 130000000000,
  160000000000, 200000000000, 250000000000, 300000000000, 360000000000, 430000000000,
  510000000000, 600000000000, 700000000000, 810000000000, 930000000000, 1060000000000,
  1200000000000, 1350000000000, 1510000000000, 1680000000000, 1860000000000, 2050000000000,
  2250000000000, 2460000000000, 2680000000000, 2910000000000, 3150000000000, 3400000000000,
  3660000000000, 3930000000000, 4210000000000, 4500000000000, 4800000000000, 5110000000000,
  5430000000000, 5760000000000, 6100000000000, 6450000000000, 6810000000000, 7180000000000,
  7560000000000, 7950000000000, 8350000000000, 8760000000000, 9180000000000, 9610000000000,
  10050000000000, 10500000000000, 10960000000000, 11430000000000, 11910000000000,
  12400000000000, 12900000000000, 13410000000000, 13930000000000, 14460000000000,
  15000000000000, 15550000000000, 16110000000000, 16680000000000, 17260000000000,
  17850000000000, 18450000000000, 19060000000000, 19680000000000, 20310000000000,
  20950000000000, 21600000000000, 22260000000000, 22930000000000, 23610000000000,
  24300000000000
]

const livestreamLevelData = pointsRequired.map((ponits, index) => {
  const level = index + 1;
  let levelIcon;
  let levelBg;

  if (level <= 1) {
    levelBg = "lv0_bg.png";
    levelIcon = "lv0.png";
  } else if (level <= 9) {
    levelBg = "lv1_bg.png";
    levelIcon = "lv1.png";
  } else if (level <= 19) {
    levelBg = "lv10_bg.png";
    levelIcon = "lv10.png";
  } else if (level <= 29) {
    levelBg = "lv20_bg.png";
    levelIcon = "lv20.png";
  } else if (level <= 39) {
    levelBg = "lv30_bg.png";
    levelIcon = "lv30.png";
  } else if (level <= 49) {
    levelBg = "lv40_bg.png";
    levelIcon = "lv40.png";
  }
  else if (level <= 59) {
    levelBg = "lv50_bg.png";
    levelIcon = "lv50.png";
  }
  else if (level <= 69) {
    levelBg = "lv60_bg.png";
    levelIcon = "lv60.png";
  }
  else if (level <= 79) {
    levelBg = "lv70_bg.png";
    levelIcon = "lv70.png";
  }
  else if (level <= 89) {
    levelBg = "lv80_bg.png";
    levelIcon = "lv80.png";
  }
  else if (level <= 99) {
    levelBg = "lv90_bg.png";
    levelIcon = "lv90.png";
  } else {
    levelBg = "lv100_bg.png";
    levelIcon = "lv100.png";
  }

  return {
    level,
    pointsRequired: ponits,
    levelBg,
    levelIcon
  };
});