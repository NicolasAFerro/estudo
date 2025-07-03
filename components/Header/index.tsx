import React from "react";
import { Text, View } from "react-native";

interface HeaderProps {
  name: string;
  title: string;
}

export default function index(props: HeaderProps) {
  return (
    <View>
      <Text className="text-2xl font-bold text-black-500">{props.title} </Text>
      <Text className="text-lg text-gray-500">{props.name}</Text>
    </View>
  );
}
