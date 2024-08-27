import { View, TextInputProps, TextInput, Pressable } from "react-native";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { AppText } from "./AppText";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

const inputVariants = cva(
  "rounded-full p-4 border text-sm tracking-[0.06px] text-grayscale-100 flex-grow",
  {
    variants: {
      variant: {
        default: "border-line-light",
        error: "border-error",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface InputProps
  extends TextInputProps,
    VariantProps<typeof inputVariants> {
  label: string;
  containerClassName?: string;
  error?: string;
}

export const Input = ({
  label,
  variant,
  inputMode = "text",
  secureTextEntry = false,
  onChangeText,
  placeholder,
  error,
  containerClassName,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(secureTextEntry);

  return (
    <View className={containerClassName}>
      <AppText styles="text-[10px] text-grayscale-80 mb-2">{label}</AppText>
      <View>
        <TextInput
          inputMode={inputMode}
          placeholder={placeholder}
          placeholderTextColor="#7D7E83"
          secureTextEntry={showPassword}
          onChangeText={onChangeText}
          className={cn(inputVariants({ variant }))}
          autoCapitalize="none"
        />

        {secureTextEntry && (
          <Pressable
            onPress={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-5"
          >
            {showPassword ? (
              <Feather name="eye" size={18} color="black" />
            ) : (
              <Feather name="eye-off" size={18} color="black" />
            )}
          </Pressable>
        )}
      </View>
      {error && (
        <AppText styles="mt-2 text-error text-[10px] tracking-[0.05px] leading-4">
          {error}
        </AppText>
      )}
    </View>
  );
};
