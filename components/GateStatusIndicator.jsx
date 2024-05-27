import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import ProgressBar from "./ProgressBar";
import GateDetails from "./GateDetails";
import { cn } from "../lib/utils";

export default function GateStatusIndicator({
  showStatus,
  className,
  gateStatus,
}) {
  return (
    <View
      className={cn(
        "bg-white dark:bg-dark-card p-4 rounded-lg border dark:border-gray-100/10 border-gray-300 flex flex-col gap-6",
        className
      )}
    >
      <View>
        <Text className="text-lg text-center uppercase dark:text-dark-foreground">
          Stato:
        </Text>
        <Text className="text-3xl text-center uppercase dark:text-dark-foreground">
          {gateStatus?.stato ?? "Caricamento..."}
        </Text>
      </View>
      <View className="">
        <Text className="text-md dark:text-dark-foreground">POSIZIONE:</Text>
        <ProgressBar value={gateStatus?.posizione} />
      </View>
      {showStatus && (
        <View className="">
          <Text className="text-md dark:text-dark-foreground">
            INFO AVANZATE:
          </Text>
          <GateDetails gateStatus={gateStatus} />
        </View>
      )}
    </View>
  );
}
