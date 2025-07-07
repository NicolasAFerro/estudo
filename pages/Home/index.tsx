import { useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";
import Button from "../../components/Button";
import MyText from "../../components/MyText";

export default function HomeScreen() {
  const router = useRouter();
  const handleGoToPost = () => {
    router.push({
      pathname: "/(tabs)/Profile/posts",
    });
  };
  const handleGoToStories = () => {
    router.push({
      pathname: "/(tabs)/Home/stories",
      params: { name: "esse é um nome", adress: "é nois" },
    });
  };
  return (
    <View className="flex-1 p-5 dark:bg-black justify-center items-center gap-10">
      <MyText>Home</MyText>
      <Button onPress={handleGoToPost}> GO TO POST</Button>
      <Button onPress={handleGoToStories}> go to stories</Button>
    </View>
  );
}
