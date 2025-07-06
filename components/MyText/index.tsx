import React from "react";
import { Text, TextProps } from "react-native";
interface MyTextProps extends TextProps {
  children: string;
  className?: string;
}
export default function Index({ children, className }: MyTextProps) {
  //const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <Text
      className={`text-black dark:text-white text-2xl capitalize ${className}`}
    >
      {children}
    </Text>
  );
}
