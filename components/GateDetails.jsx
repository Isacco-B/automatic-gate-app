import React from "react";
import { Text, View } from "react-native";
import { cn } from "../lib/utils";

export default function GateDetails({ gateStatus }) {
  return (
    <View className="flex flex-col gap-4 p-2">
      <View
        className={cn(
          "h-8 bg-primary/20 rounded-md flex flex-row justify-between items-center px-4 border-r-4",
          gateStatus?.fcApertura === "attivo"
            ? "border-r-green-500"
            : "border-r-red-500"
        )}
      >
        <Text className="dark:text-dark-foreground font-semibold">
          Fc-Apertura:
        </Text>
        <Text className="dark:text-dark-foreground uppercase">
          {gateStatus?.fcApertura ? gateStatus?.fcApertura : "Caricamento..."}
        </Text>
      </View>
      <View
        className={cn(
          "h-8 bg-primary/20 rounded-md flex flex-row justify-between items-center px-4 border-r-4",
          gateStatus?.fcChiusura === "attivo"
            ? "border-r-green-500"
            : "border-r-red-500"
        )}
      >
        <Text className="dark:text-dark-foreground font-semibold">
          Fc-Chiusura:
        </Text>
        <Text className="dark:text-dark-foreground uppercase">
          {gateStatus?.fcChiusura ? gateStatus?.fcChiusura : "Caricamento..."}
        </Text>
      </View>
      <View
        className={cn(
          "h-8 bg-primary/20 rounded-md flex flex-row justify-between items-center px-4 border-r-4",
          gateStatus?.fotocellule === "attivo"
            ? "border-r-green-500"
            : "border-r-red-500"
        )}
      >
        <Text className="dark:text-dark-foreground font-semibold">
          Fotocellule:
        </Text>
        <Text className="dark:text-dark-foreground uppercase">
          {gateStatus?.fotocellule ? gateStatus?.fotocellule : "Caricamento..."}
        </Text>
      </View>
      <View
        className={cn(
          "h-8 bg-primary/20 rounded-md flex flex-row justify-between items-center px-4 border-r-4",
          gateStatus?.coste === "attivo"
            ? "border-r-green-500"
            : "border-r-red-500"
        )}
      >
        <Text className="dark:text-dark-foreground font-semibold">Coste:</Text>
        <Text className="dark:text-dark-foreground uppercase">
          {gateStatus?.coste ? gateStatus?.coste : "Caricamento..."}
        </Text>
      </View>

      <View
        className={cn(
          "h-8 bg-primary/20 rounded-md flex flex-row justify-between items-center px-4 border-r-4",
          gateStatus?.consumo <= 5 ? "border-r-green-500" : "border-r-red-500"
        )}
      >
        <Text className="dark:text-dark-foreground font-semibold">
          Consumo:
        </Text>
        <Text className="dark:text-dark-foreground uppercase">
          {gateStatus?.consumo
            ? gateStatus?.consumo + " " + "A"
            : "Caricamento..."}
        </Text>
      </View>
      <View
        className={cn(
          "h-8 bg-primary/20 rounded-md flex flex-row justify-between items-center px-4 border-r-4",
          gateStatus?.ricevente === "attivo"
            ? "border-r-green-500"
            : "border-r-red-500"
        )}
      >
        <Text className="dark:text-dark-foreground font-semibold">
          Ricevente:
        </Text>
        <Text className="dark:text-dark-foreground uppercase">
          {gateStatus?.ricevente ? gateStatus?.ricevente : "Caricamento..."}
        </Text>
      </View>
    </View>
  );
}
