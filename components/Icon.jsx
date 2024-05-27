import { icons } from "lucide-react-native";

export default function Icon({ name, color, size }) {
  const LucideIcon = icons[name];
  return <LucideIcon color={color} size={size} />;
}
