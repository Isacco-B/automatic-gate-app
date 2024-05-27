import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMqtt } from "../context/MqttContext";

const LoadingScreen = ({ navigation }) => {
  const { mqttStatus } = useMqtt();
  useEffect(() => {
    const checkAuth = async () => {
      const username = await AsyncStorage.getItem("username");
      const password = await AsyncStorage.getItem("password");

      if (username && password) {
        navigation.replace("Home");
      } else {
        navigation.replace("Auth");
      }
    };

    checkAuth();
  }, [navigation, mqttStatus]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="#18A34A" />
    </View>
  );
};

export default LoadingScreen;
