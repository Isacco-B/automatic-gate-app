import mqtt from "mqtt";

function createMqttClient({
  setMqttStatus,
  setMqttError,
  onMessage,
  username,
  password,
}) {
  const host = "Your MQTT host";
  const path = "/ws";
  const port = 8083;
  const protocol = "wss";

  console.log("Connecting to:", `${protocol}://${host}:${port}`);

  let intervalId;

  const client = mqtt
    .connect(`${protocol}://${host}:${port}${path}`, {
      clientId: Math.random().toString(36).substr(2, 9),
      reconnectPeriod: 5000,
      username,
      password,
      clean: true,
      queueQoSZero: false,
    })
    .on("connect", () => {
      console.log("MQTT connected");
      setMqttStatus("Connected");
      client.publish("api/gate/get_status", "on");
      intervalId = setInterval(() => {
        client.publish("api/gate/get_status", "on");
      }, 5000);
    })
    .on("error", (error) => {
      console.error("MQTT error:", error);
      setMqttStatus("Error");
      setMqttError(`Name: ${error?.name}\nMessage: ${error?.message}`);
    })
    .on("disconnect", () => {
      console.log("MQTT disconnected");
      setMqttStatus("Disconnected");
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    })
    .on("offline", () => {
      console.log("MQTT offline");
      setMqttStatus("Offline");
    })
    .on("reconnect", () => {
      console.log("MQTT reconnecting");
      setMqttStatus("Reconnecting");
    })
    .on("close", () => {
      console.log("MQTT connection closed");
      setMqttStatus("Disconnected");
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    })
    .on("message", (topic, message) => {
      onMessage(topic, JSON.parse(message.toString()));
    });

  return client;
}

export { createMqttClient };
