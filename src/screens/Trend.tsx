import React, { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

function Trend({ navigation, route }: any) {
  // Create an animated value for opacity and translateY
  const fadeAnim = useRef(new Animated.Value(0)).current; // Opacity start from 0
  const translateYAnim = useRef(new Animated.Value(30)).current; // Start slightly below the final position

  useFocusEffect(() => {
    // Reset animation values and start the animation when the screen is focused
    fadeAnim.setValue(0);
    translateYAnim.setValue(30);

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    Animated.timing(translateYAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  });

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.headerText}>Trend</Text>
      <Animated.Image
        source={require("../assets/images/trend.png")}
        style={{
          height: "20%",
          width: "50%",
          opacity: fadeAnim, // Apply opacity animation
          transform: [{ translateY: translateYAnim }], // Apply translateY animation
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 25,
    marginBottom: 20,
  },
});

export default Trend;
