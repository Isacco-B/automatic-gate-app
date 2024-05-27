import { Text, View } from "react-native";
import { cn } from "../lib/utils";

export default function GateDetailsItem({
  name,
  value,
  containerStyle,
  textStyle,
}) {
  return (
    <View
      className={cn(
        "h-8 bg-primary/20 rounded-md flex flex-row justify-between items-center px-4 border-r-green-500 border-r-4",
        containerStyle
      )}
    >
      <Text
        className={cn("dark:text-dark-foreground font-semibold", textStyle)}
      >
        {name}:
      </Text>
      <Text className={cn("dark:text-dark-foreground uppercase", textStyle)}>
        {value}
      </Text>
    </View>
  );
}
