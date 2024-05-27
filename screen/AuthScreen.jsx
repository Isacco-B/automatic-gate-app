import React from "react";
import {
  Image,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from "react-native";
import ThemeToggle from "../components/ThemeToggle";
import ButtonOpacity from "../components/ButtonOpacity";
import FormInput from "../components/FormInput";
import Wave from "../assets/wave.png";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMqtt } from "../context/MqttContext";

export default function AuthScreen({ navigation }) {
  const [isInputFocused, setIsInputFocused] = React.useState(false);
  const [state, dispatch] = React.useReducer(reducer, {
    username: "",
    password: "",
  });
  const { setDoMqttConnection } = useMqtt();

  function reducer(state, action) {
    switch (action.type) {
      case "username":
        return { ...state, username: action.value };
      case "password":
        return { ...state, password: action.value };
      case "reset":
        return { username: "", password: "" };
      default:
        return state;
    }
  }

  async function handleSubmit() {
    try {
      await AsyncStorage.setItem("username", state.username.trim());
      await AsyncStorage.setItem("password", state.password.trim());
      console.log("Data saved successfully");
      dispatch({ type: "reset" });
      setDoMqttConnection(false);
      setDoMqttConnection(true);
      navigation.replace("Home");
    } catch (e) {
      console.log("Failed to save data", e);
    }
  }

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-gray-100 dark:bg-dark-background"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          setIsInputFocused(false);
        }}
      >
        <View className="flex-1">
          <View className="mt-12 items-end flex-1 p-4">
            <ThemeToggle />
          </View>
          <View className="mt-12 rounded-lg flex-1 p-4">
            <Text className="text-2xl text-center font-bold dark:text-dark-foreground">
              Effetua il login
            </Text>
            <View className="flex flex-col gap-4">
              <FormInput
                onFocus={() => setIsInputFocused(true)}
                label={"Username*"}
                placeholder={"Inserisci username"}
                value={state.username}
                onChangeText={(text) =>
                  dispatch({ type: "username", value: text })
                }
              />
              <FormInput
                onFocus={() => setIsInputFocused(true)}
                label={"Password*"}
                placeholder={"Inserisci password"}
                value={state.password}
                onChangeText={(text) =>
                  dispatch({ type: "password", value: text })
                }
                secureTextEntry={true}
              />

              <ButtonOpacity
                className="w-full h-12 p-2 bg-primary dark:bg-primary"
                title="Login"
                titleStyle="text-white text-lg font-bold uppercase"
                onPress={handleSubmit}
                disabled={state.username === "" || state.password === ""}
              />
            </View>
          </View>
          <View className="flex-1">
            {!isInputFocused && (
              <Image source={Wave} className="w-full h-full" />
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
