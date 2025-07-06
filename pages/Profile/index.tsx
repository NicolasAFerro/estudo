import { useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";
import Button from "../../components/Button";
import MyText from "../../components/MyText";

export default function ProfileScreen() {
  const router = useRouter();
  const handleNavigation = () => {
    router.push({
      pathname: "/(tabs)/Profile/posts",
      params: { name: "esse é um nome", adress: "é nois" },
    });
  };
  return (
    <View className="flex-1 p-5 dark:bg-black justify-center gap-10 items-center">
      <MyText>Profile</MyText>
      <Button onPress={handleNavigation}> Navegar para post</Button>
    </View>
  );
}
