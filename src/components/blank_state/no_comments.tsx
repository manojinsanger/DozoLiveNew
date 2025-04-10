import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, Stack } from "expo-router";
import { useFonts } from "expo-font";

const NoCommentsScreen = () => {
  const [fontsLoaded] = useFonts({
    "DM-Sans": require("../../assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null; // or a loading spinner
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "Comments",
          headerBackVisible: true,
          headerStyle: { backgroundColor: "#F1567D" },
          headerTintColor: "#ffffff",
        }}
      />

      {/* Empty State Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/blank_state/no_comments.png")} // Update with the correct file name
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Text Content */}
      <Text style={[styles.title, { fontFamily: "DM-Sans" }]}>
      No Comments Yet
      </Text>
      <Text style={[styles.subtitle, { fontFamily: "DM-Sans" }]}>
      Be the first to share what you think!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  imageContainer: {
    marginTop: 200,
    alignItems: "center",
  },
  image: {
    width: 200, // Adjust size as needed
    height: 200,
  },
  title: {
    fontSize: 22,
    fontWeight: 700,
    color: "#1f1f1f",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    color: "#777777",
    textAlign: "center",
    paddingHorizontal: 40,
    marginTop: 10,
    fontWeight: 400,
    lineHeight: 24,
  },
});

export default NoCommentsScreen;
