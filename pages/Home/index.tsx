import React from "react";
import { View } from "react-native";
import MyText from "../../components/MyText";

export default function HomeScreen() {
  return (
    <View className="flex-1 p-5 dark:bg-black justify-center items-center gap-10">
      <MyText>Home</MyText>
    </View>
  );
}
