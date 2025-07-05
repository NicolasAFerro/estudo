import { useRef } from "react";
import { Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// Make sure the path is correct and the file exists
import Button from "../../components/Button";
//não basta importar o componetne, tem que importar os eventos dele
import Input, { InputHandles } from "../../components/Input";

export default function LoginScreen() {
  const refEmail = useRef<InputHandles>(null);
  const refPassword = useRef<InputHandles>(null);

  const handlePress = () => {
    const email = refEmail.current?.getValue() || "n tem";
    const password = refPassword.current?.getValue() || "n tem";

    Alert.alert(email, password);
  };

  return (
    <SafeAreaView className="flex-1 p-5 dark:bg-black justify-center gap-10">
      <Input
        ref={refEmail}
        label="E-mail"
        type="email"
        placeholder="Digite seu e-mail"
      />

      <Input
        ref={refPassword}
        label="Senha"
        type="password"
        placeholder="Digite sua senha"
      />

      <Button className="w-40 h-12" onPress={handlePress}>
        Texto do Botão
      </Button>
    </SafeAreaView>
  );
}
