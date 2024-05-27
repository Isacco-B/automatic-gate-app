import React from "react";
import { Text, TextInput, View } from "react-native";
import { cn } from "../lib/utils";

export default function FormInput({
  label,
  placeholder,
  labelStyle,
  inputStyle,
  onFocus,
  value,
  onChangeText,
  secureTextEntry = false,
}) {
  return (
    <View>
      <Text className={cn("dark:text-dark-foreground/80", labelStyle)}>
        {label}
      </Text>
      <TextInput
        className={cn(
          "rounded-lg border dark:border-gray-100/10 border-gray-300 h-12 p-2 dark:text-dark-foreground/80",
          inputStyle
        )}
        onFocus={onFocus}
        placeholder={placeholder}
        placeholderTextColor={"gray"}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}
