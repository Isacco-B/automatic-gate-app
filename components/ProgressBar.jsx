import React from "react";
import { View } from "react-native";

export default function ProgressBar({ value }) {
  const position = value ?? 0;

  return (
    <View className="h-8 bg-primary/20 rounded-lg mt-1 justify-center p-1">
      <View
        style={{ width: `${position}%` }}
        className="h-full bg-primary rounded-lg"
      ></View>
    </View>
  );
}
