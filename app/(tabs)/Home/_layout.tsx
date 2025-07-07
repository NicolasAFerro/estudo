import { Stack } from "expo-router";
import React from "react";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Feed" }} />
      <Stack.Screen name="stories" />
    </Stack>
  );
}
