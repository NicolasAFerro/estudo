import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";

// import { useColorScheme as useNativeWindColorScheme } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import MyText from "../components/MyText";
export default function Index() {
  const [name, setName] = useState<string>("Maria");
  const [title, setTitle] = useState<string>("React Native");
  // const { colorScheme, toggleColorScheme } = useNativeWindColorScheme();
  // use theme do native wind

  // [] montado; / [name] quando atualizar o name / return quando desmontar
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

  // const handlePress = useCallback(() => {
  //   setName((old) => {
  //     return old === "Maria" ? "Nicolas" : "Maria";
  //   });
  // }, []);

  // o array de dependência aqui funciona pois se não ele não consegue acessar o array de dependência na memória
  const handlePress = useCallback(() => {
    if (name === "Maria") {
      setName("Nicolas");
    } else {
      setName("Maria");
    }
  }, [name]);

  // useCallback;
  // é uma função de performance, pois toda vez que o componente é montado/renderiza em tela,
  // ele instancia tudo novamente em memória, aí o useCallback evita isso, pois a função não precisa
  // ser recriada toda vez que o componente é renderizado

  // o memo mantém um valor
  const nameChanged = useMemo(() => {
    return `${name} | ${new Date().toLocaleTimeString()}`;
  }, [name]);

  // tipo, ele pode alterar mas só aquele ponto específico do componente, não causa o re-render
  // do componente inteiro
  const inputRef = useRef<TextInput>({} as TextInput);

  return (
    <SafeAreaView className="flex-1 p-5">
      <Header name={nameChanged} title={title} />
      <Button title="Change Name" onPress={handlePress} />

      <TextInput
        ref={inputRef}
        className="p-5 mb-10 mt-5 rounded text-black dark:text-white bg-white dark:bg-black"
        placeholder="Digite algo..."
      />

      <Button
        title="USE REF"
        onPress={() => {
          inputRef.current.focus();
        }}
      />

      <View className="bg-white dark:bg-black p-5 mt-5 mb-5 rounded-lg">
        <Text className="text-black dark:text-white text-2xl capitalize">
          {/* Tema atual: {colorScheme} */}
        </Text>
      </View>

      <TouchableOpacity
        className="p-3 border border-red-500 rounded-md"
        // onPress={toggleColorScheme}
      >
        <Text className="text-3xl capitalize text-black dark:text-white">
          Mudar Tema
        </Text>
      </TouchableOpacity>

      <MyText />
    </SafeAreaView>
  );
}
