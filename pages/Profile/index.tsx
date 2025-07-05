import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";
import Button from "../../components/Button";
import MyText from "../../components/MyText";

export default function ProfileScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const handlerVoltaTudo = () => {
    router.dismissAll();
  };
  const handlePush = () => {
    router.push("/");
  };
  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };
  const handleReplace = () => {
    router.replace("/");
  };
  const handleProfile = () => {
    router.push("/profile");
  };

  return (
    <View className="flex-1 p-5 dark:bg-black justify-center gap-10 items-center">
      <MyText>Profile</MyText>
      <MyText>texto</MyText>
      <Button onPress={handlePush}>handle push</Button>
      <Button onPress={handleBack}>go back</Button>
      <Button onPress={handleReplace}>handle replace</Button>
      <Button onPress={handleProfile}>chama profile</Button>
      <Button onPress={handlerVoltaTudo}>volta tudo</Button>
    </View>
  );
}
