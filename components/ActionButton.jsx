import { Image, View } from "react-native";
import ButtonOpacity from "./ButtonOpacity";
import { useMqtt } from "../context/MqttContext";
import gate from "../assets/gate.png";

export default function ActionButton({ className, gateStatus }) {
  const { mqttClient } = useMqtt();

  const hancleAction = (action) => {
    switch (action) {
      case "garage":
        mqttClient.publish("api/garage/light", "on");
        break;
      case "cancellino":
        mqttClient.publish("api/small_gate", "on");
        break;
      case "pedonabile":
        mqttClient.publish("api/gate/partial", "on");
        break;
      case "cancello":
        mqttClient.publish("api/gate", "on");
        break;
      default:
        break;
    }
  };

  const getGateButtonLabel = () => {
    if (gateStatus?.stato === "in apertura") return "Stop";
    if (gateStatus?.stato === "stop" || gateStatus?.stato === "aperto")
      return "Chiudi";
    if (gateStatus?.stato === "in chiusura" || gateStatus?.stato === "chiuso")
      return "Apri";
    return "Caricamento...";
  };

  const gateButtonLabe = getGateButtonLabel();

  return (
    <View className={className}>
      <View className="flex flex-row items-center justify-center gap-4">
        <View className="flex-1">
          <ButtonOpacity
            icon="Lightbulb"
            iconColor="#18A34A"
            iconSize={36}
            className="w-full h-32"
            title="Garage"
            onPress={() => hancleAction("garage")}
            disabled={gateStatus === null ? true : false}
          />
        </View>
        <View className="flex-1">
          <ButtonOpacity
            icon="DoorOpen"
            iconColor="#18A34A"
            iconSize={36}
            className="w-full h-32"
            title="Cancellino"
            onPress={() => hancleAction("cancellino")}
            disabled={gateStatus === null ? true : false}
          />
        </View>
        <View className="flex-1">
          <ButtonOpacity
            icon="Footprints"
            iconColor="#18A34A"
            iconSize={36}
            className="w-full h-32"
            title="Pedonabile"
            onPress={() => hancleAction("pedonabile")}
            disabled={gateStatus?.stato !== "chiuso" ? true : false}
          />
        </View>
      </View>
      <View className="items-center mt-12">
        <ButtonOpacity
          className="w-48 h-48"
          title={gateButtonLabe}
          titleStyle="text-xl"
          onPress={() => hancleAction("cancello")}
          disabled={gateStatus === null ? true : false}
        >
          <Image source={gate} className="w-28 h-14" />
        </ButtonOpacity>
      </View>
    </View>
  );
}
