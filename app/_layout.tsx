import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";

import "./global.css";

export default function RootLayout() {
  const { colorScheme } = useColorScheme();

  useEffect(() => {
    if (colorScheme) {
      colorScheme;
    }
  }, [colorScheme]);

  return <Stack></Stack>;
}
