import { Tabs } from "expo-router";
import React from "react";
import { useColorScheme, View } from "react-native";

//// OH PROBLEMA TA SEMPRE NESSA PORRA AQUI
import "../global.css";

export default function TabLayout() {
  const colorSheme = useColorScheme();

  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "black",
          headerShown: true,
        }}
      >
        <Tabs.Screen
          name="Home"
          options={{
            title: "Feed",
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            title: "Profile",
            headerShown: false,
          }}
        />
      </Tabs>
    </View>
  );
}
