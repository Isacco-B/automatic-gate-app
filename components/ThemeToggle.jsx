import React from "react";
import { useColorScheme } from "nativewind";
import ButtonOpacity from "./ButtonOpacity";

export default function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <ButtonOpacity
      icon={colorScheme === "dark" ? "Sun" : "Moon"}
      iconColor="#18A34A"
      iconSize={20}
      onPress={toggleColorScheme}
    />
  );
}
