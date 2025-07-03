import { useState } from "react";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

export default function Index() {
  const [name, setName] = useState<string>("Maria");

  const handlePress = () => {
    setName((old) => {
      return old === "Maria" ? "Nicolas" : "Maria";
    });
  };
  return (
    <SafeAreaView className="flex-1 p-5">
      <Header name={name} title="React Native" />
      <Button title="Change Name" onPress={handlePress} />
    </SafeAreaView>
  );
}
