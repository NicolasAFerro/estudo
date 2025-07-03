import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 p-5">
      <Header name="Nicolas" title="React Native" />
    </SafeAreaView>
  );
}
