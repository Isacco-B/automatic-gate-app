import "./global.css";
import Navigation from "./navigator/Navigation";
import { StatusBar } from "expo-status-bar";
import { MqttProvider } from "./context/MqttContext";
import { useColorScheme } from "nativewind";

export default function App() {
  const { colorScheme } = useColorScheme();
  return (
    <MqttProvider>
      <Navigation />
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </MqttProvider>
  );
}
