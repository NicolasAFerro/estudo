import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Posts() {
  const router = useRouter();
  // const handleGoToHome = () => {
  //   router.navigate({
  //     pathname: "../Home/index",
  //     params: { name: "esse é um nome", adress: "é nois" },
  //   });
  // };
  // router.push({
  //   pathname: "/(tabs)/Profile/posts",
  //   params: { name: "esse é um nome", adress: "é nois" },
  // });
  return (
    <View>
      <Text>Posts</Text>
    </View>
  );
}
