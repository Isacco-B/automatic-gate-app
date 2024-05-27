import React, { createContext, useContext, useState } from "react";
import useAppStateBackground from "../hooks/useAppStateReconnect";
import useMqttConnection from "../hooks/useMqttConnection";

const MqttContext = createContext(null);

export const MqttProvider = ({ children }) => {
  const [doMqttConnection, setDoMqttConnection] = useState(true);
  const {
    mqttClient,
    mqttData,
    mqttStatus,
    mqttError,
    setMqttError,
    setMqttStatus,
    setMqttData,
  } = useMqttConnection(doMqttConnection);

  useAppStateBackground(mqttClient);

  const subscribeToTopic = (topics) => {
    if (!mqttClient) return;

    for (const topic of topics) {
      mqttClient.subscribe(topic, (error) => {
        if (error) {
          setMqttStatus(`TopicError: ${topic}`);
          setMqttError(`Name: ${error?.name}\nMessage: ${error?.message}`);
        }
      });
    }
  };

  const clearMessages = () => {
    setMqttError(null);
    setMqttData({});
  };

  return (
    <MqttContext.Provider
      value={{
        mqttClient,
        mqttData,
        mqttStatus,
        mqttError,
        subscribeToTopic,
        setDoMqttConnection,
        clearMessages,
      }}
    >
      {children}
    </MqttContext.Provider>
  );
};

export const useMqtt = () => useContext(MqttContext);
