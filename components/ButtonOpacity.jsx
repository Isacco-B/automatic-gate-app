import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { cn } from "../lib/utils";
import Icon from "./Icon";

export default function ButtonOpacity({
  className,
  title,
  titleStyle,
  icon,
  iconColor,
  iconSize = 12,
  opacity = 0.5,
  disabled = false,
  onPress,
  children,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={opacity}
      disabled={disabled}
      className={cn(
        "bg-white dark:bg-dark-card p-4 rounded-lg flex flex-col gap-4 w-12 h-12 items-center justify-center shadow-md dark:shadow-gray-300 dark:shadow-sm",
        disabled && "opacity-50",
        className
      )}
    >
      {children}
      {icon && <Icon name={icon} color={iconColor} size={iconSize} />}
      {title && (
        <Text className={cn("dark:text-dark-foreground", titleStyle)}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
