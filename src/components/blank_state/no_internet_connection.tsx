import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

const NoInternetConnectionScreen = () => {
  const [fontsLoaded] = useFonts({
    "DM-Sans": require("../../assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null; // or a loading spinner
  }

  return (
    <View style={styles.container}>
      {/* Empty State Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/blank_state/no_internet_connection.png")} // Update with the correct file name
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Text Content */}
      <Text style={[styles.title, { fontFamily: "DM-Sans" }]}>Whoops!</Text>
      <Text style={[styles.subtitle, { fontFamily: "DM-Sans" }]}>
        No Internet connection found. Check your connection or try again.
      </Text>

      {/* Try Again Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Try again</Text>
      </TouchableOpacity>
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
    fontSize: 20,
    fontWeight: 700,
    color: "#1f1f1f",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#777777",
    textAlign: "center",
    paddingHorizontal: 40,
    marginTop: 10,
    fontWeight: 400,
    lineHeight: 24,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#F1567D",
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default NoInternetConnectionScreen;
