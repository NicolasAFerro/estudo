import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import MyText from "../MyText";

// é os metodos básicos do WF, mas tem que fazer a função na unha
export interface InputHandles {
  focus: () => void;
  clear: () => void;
  getValue: () => string;
  setValue: (value: string) => void;
}

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  type?: "text" | "email" | "password" | "number";
}

const Input = forwardRef<InputHandles, InputProps>(
  ({ label, error, type = "text", className, ...rest }, ref) => {
    // states
    const [value, setValue] = useState("");
    const [secure, setSecure] = useState(type === "password");

    // refs
    const inputRef = useRef<TextInput>(null);
    const showToggle = type === "password";

    // useImperativeHandle
    //#region
    //maneira de expor os métodos do componentes
    useImperativeHandle(
      ref,
      () => ({
        focus: () => inputRef.current?.focus(),
        clear: () => setValue(""),
        getValue: () => value,
        setValue: (value: string) => setValue(value),
      }),
      [value]
    );
    //#endregion
    return (
      <View className="w-full">
        {label && <MyText className="mt-5">{label}</MyText>}

        <View className="relative">
          <TextInput
            ref={inputRef}
            className={`
              rounded-md text-white dark:text-black text-2xl px-4 py-2 pr-10
              ${error ? "border border-red-500" : "border border-transparent"}
              bg-black dark:bg-white
              ${className ?? ""}
            `}
            secureTextEntry={secure}
            value={value}
            onChangeText={(text) => setValue(text)}
            keyboardType={
              type === "email"
                ? "email-address"
                : type === "number"
                ? "numeric"
                : "default"
            }
            autoCapitalize={type === "email" ? "none" : "sentences"}
            autoCorrect={type !== "email"}
            {...rest}
          />

          {showToggle && (
            <TouchableOpacity
              onPress={() => setSecure(!secure)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <Text className="text-white dark:text-black text-xl">
                {secure ? "🙈" : "👁️"}
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {!!error && <Text className="text-red-500 text-xs mt-1">{error}</Text>}
      </View>
    );
  }
);

export default Input;
