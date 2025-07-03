import { useEffect, useState } from "react";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

export default function Index() {
  const [name, setName] = useState<string>("Maria");
  const [title, setTitle] = useState<string>("React Native");

  //[] montado;/[name] quando atualizar o name/return quando desmontar
  useEffect(() => {
    console.log("Component mounted", name);
  }, []);
  useEffect(() => {
    if (title === "React Native") {
      setTitle("React Native with Expo");
    } else {
      setTitle("React Native");
    }
    console.log("Title changed", title);
  }, [name]);

  const handlePress = () => {
    setName((old) => {
      return old === "Maria" ? "Nicolas" : "Maria";
    });
  };
  return (
    <SafeAreaView className="flex-1 p-5">
      <Header name={name} title={title} />
      <Button title="Change Name" onPress={handlePress} />
    </SafeAreaView>
  );
}
