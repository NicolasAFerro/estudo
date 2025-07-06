import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";
import Button from "../../components/Button";
import MyText from "../../components/MyText";

export default function HomeScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  console.log(params);

  const handleNavigation = () => {
    router.push({
      pathname: "/profile",
      params: { name: "esse é um nome", adress: "é nois" },
    });
  };

  return (
    <View className="flex-1 p-5 dark:bg-black justify-center items-center gap-10">
      <MyText>Home</MyText>
      <Button onPress={handleNavigation}>
        Click para navegar para profile
      </Button>
    </View>
  );
}
