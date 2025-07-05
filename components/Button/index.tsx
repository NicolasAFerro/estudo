import React from "react";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  useColorScheme,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  children: string;
  loading?: boolean;
}

export default function Button({
  children,
  loading,
  className,
  ...rest
}: ButtonProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const spinnerColor = isDark ? "#000" : "#fff";

  return (
    <TouchableOpacity
      className={`
        bg-black dark:bg-white rounded-md items-center 
        flex-row justify-center ${className ?? ""}
      `}
      disabled={loading || rest.disabled}
      {...rest}
    >
      {loading && (
        <ActivityIndicator color={spinnerColor} style={{ marginRight: 8 }} />
      )}
      <Text
        className="text-white dark:text-black font-semibold text-base"
        style={loading ? { opacity: 0.6 } : undefined}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}
