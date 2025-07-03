import React from "react";
import {
  Text,
  View,
  useColorScheme as useSystemColorScheme,
} from "react-native";

export default function index() {
  const colorScheme = useSystemColorScheme();
  return (
    <View className="bg-white dark:bg-black p-5 mt-5 mb-5 rounded-lg">
      <Text className="text-black dark:text-white text-2xl capitalize">
        Tema do dispositivo={colorScheme}
      </Text>
    </View>
  );
}
