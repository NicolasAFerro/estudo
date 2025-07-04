// import { useColorScheme as useNativeWindColorScheme } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import MyText from "../components/MyText";
export default function Index() {
  return (
    <SafeAreaView className="flex-1 p-5 dark:bg-black">
      <MyText>text</MyText>
      <Button> Texto do Botão</Button>
    </SafeAreaView>
  );
}
