import React from "react";
import { Text, TextProps } from "react-native";
interface MyTextProps extends TextProps {
  children: string;
}
export default function index({ children }: MyTextProps) {
  //const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <Text className="text-black dark:text-white text-2xl capitalize">
      {children}
    </Text>
  );
}
