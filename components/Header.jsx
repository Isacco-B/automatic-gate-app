import { Text, View } from "react-native";
import ThemeToggle from "./ThemeToggle";
import StatusToggle from "./StatusToggle";
import { cn } from "../lib/utils";
import { useMqtt } from "../context/MqttContext";
import LogoutButton from "./LogoutButton";

export default function Header({ setShowStatus, showStatus, className }) {
  const { mqttStatus, mqttError } = useMqtt();
  return (
    <View
      className={cn(
        "justify-between items-baseline flex flex-row h-32",
        className
      )}
    >
      <StatusToggle setShowStatus={setShowStatus} showStatus={showStatus} />
      <View className="flex flex-col items-center w-[50%]">
        <Text className="dark:text-dark-foreground pt-4">
          {mqttStatus && `MQTT: ${mqttStatus}`}
        </Text>
        <Text className="text-center p-4 dark:text-dark-foreground">
          {mqttStatus === "Error" && mqttError}
        </Text>
      </View>

      <View className="flex flex-col gap-4">
        <ThemeToggle />
        <LogoutButton />
      </View>
    </View>
  );
}
