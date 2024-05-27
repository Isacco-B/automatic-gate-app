import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import Header from "../components/Header";
import GateStatusIndicator from "../components/GateStatusIndicator";
import ActionButton from "../components/ActionButton";
import { useMqtt } from "../context/MqttContext";

export default function HomeScreen() {
  const [showStatus, setShowStatus] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [gateStatus, setGateStatus] = useState(null);
  const handleShowStatus = () => setShowStatus(!showStatus);

  const { mqttData, mqttStatus, subscribeToTopic } = useMqtt();

  useEffect(() => {
    subscribeToTopic([
      "api/notification/small_gate",
      "api/notification/garage/light",
      "api/notification/gate/partial",
      "api/notification/gate",
      "api/notification/gate/status",
    ]);
  }, [mqttStatus]);

  useEffect(() => {
    if (mqttStatus === "Connected" && mqttData) {
      const topic = mqttData.topic;
      switch (topic) {
        case "api/notification/small_gate":
        case "api/notification/garage/light":
        case "api/notification/gate/partial":
        case "api/notification/gate":
          setSuccessMessage(mqttData.message.data);
          break;
        case "api/notification/gate/status":
          setGateStatus(mqttData.message);
          break;
        default:
          setSuccessMessage(null);
          setGateStatus(null);
          break;
      }

      const interval = setInterval(() => {
        setSuccessMessage(null);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [mqttData, mqttStatus]);

  return (
    <SafeAreaView className="flex-1 bg-gray-100 dark:bg-dark-background p-4">
      <ScrollView>
        <Header
          setShowStatus={handleShowStatus}
          showStatus={showStatus}
          className={"mt-12"}
        />
        <Text className="text-lg text-center dark:text-dark-foreground h-12 mt-4">
          {successMessage}
        </Text>
        <GateStatusIndicator showStatus={showStatus} gateStatus={gateStatus} />
        <ActionButton className={"mt-12"} gateStatus={gateStatus} />
      </ScrollView>
    </SafeAreaView>
  );
}
