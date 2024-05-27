import React from "react";
import ButtonOpacity from "./ButtonOpacity";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMqtt } from "../context/MqttContext";

export default function LogoutButton() {
  const navigation = useNavigation();
  const { mqttClient, mqttStatus, setDoMqttConnection } = useMqtt();

  async function handleLogout() {
    try {
      await AsyncStorage.removeItem("username");
      await AsyncStorage.removeItem("password");
      if (mqttStatus === "Connected") {
        mqttClient.end();
      }
      setDoMqttConnection(false);
      navigation.replace("Auth");
    } catch (e) {
      console.log("Failed to remove data", e);
    }
  }
  return (
    <ButtonOpacity
      onPress={handleLogout}
      icon={"LogOut"}
      iconColor="#18A34A"
      iconSize={20}
    />
  );
}
