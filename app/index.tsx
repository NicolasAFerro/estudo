import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Button, TextInput } from "react-native";

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

  // const handlePress = useCallback(() => {
  //   setName((old) => {
  //     return old === "Maria" ? "Nicolas" : "Maria";
  //   });
  // }, []);

  // o aray de dependencia aqui funciona pois se não ele não consegue acessa o array de dependencia na memoria
  const handlePress = useCallback(() => {
    if (name === "Maria") {
      setName("Nicolas");
    } else {
      setName("Maria");
    }
  }, [name]);

  //use callback;
  //é uma funçaõ de perfomace, pois toda vez que o componente é montado/rendriza em tela,
  // ele instancia tudo novamente em memória, ai o useCALLBACK Evita isso, pois a função não precisa
  // ser recriada toda vez que o componente é renderizado

  //o memo mantém um valor
  const nameChanged = useMemo(() => {
    return `${name} | ${new Date().toLocaleTimeString()}`;
  }, [name]);

  //tipo, ele pode alterar mas só aquele ponto especifico do componente, não causa o re-render
  // do componente inteiro
  const inputRef = useRef<TextInput>({} as TextInput);
  return (
    <SafeAreaView className="flex-1 p-5">
      <Header name={nameChanged} title={title} />
      <Button title="Change Name" onPress={handlePress} />

      <TextInput
        ref={inputRef}
        className="p-5 mb-10 bg-black mt-5 text-white"
      ></TextInput>
      <Button
        title="USE REF"
        onPress={() => {
          inputRef.current.focus();
        }}
      />
    </SafeAreaView>
  );
}
