import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createMqttClient } from "../services/mqttService";

function useMqttConnection(doMqttConnection) {
  const [mqttStatus, setMqttStatus] = useState("Disconnected");
  const [mqttError, setMqttError] = useState(null);
  const [mqttData, setMqttData] = useState({});
  const [mqttClient, setMqttClient] = useState(null);

  useEffect(() => {
    if (!doMqttConnection) return;

    const initializeMqttClient = async () => {
      try {
        const username = await AsyncStorage.getItem("username");
        const password = await AsyncStorage.getItem("password");

        if (username && password) {
          const client = createMqttClient({
            setMqttStatus,
            setMqttError,
            onMessage: (topic, message) => {
              setMqttData(() => ({
                message,
                topic,
              }));
            },
            username,
            password,
          });

          setMqttClient(client);
        } else {
          console.error("Missing credentials");
          setMqttError("Missing MQTT credentials");
        }
      } catch (error) {
        console.error(
          "Failed to retrieve credentials from AsyncStorage",
          error
        );
        setMqttError("Failed to retrieve credentials");
      }
    };

    initializeMqttClient();

    return () => {
      if (mqttClient) {
        mqttClient.end();
      }
    };
  }, [doMqttConnection]);

  return {
    mqttClient,
    mqttData,
    mqttStatus,
    mqttError,
    setMqttStatus,
    setMqttError,
    setMqttData,
  };
}

export default useMqttConnection;
