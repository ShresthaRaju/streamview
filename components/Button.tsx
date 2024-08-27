import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { AppText } from "./AppText";

const variants = {
  intent: {
    primary: "bg-primary",
    secondary: "bg-secondary",
    outline: "border border-grayscale-100",
  },
  text: {
    primary: "text-white",
    secondary: "text-grayscale-100",
    outline: "text-grayscale-100",
  },
};

const buttonVariants = cva("rounded-full px-8 py-[14px]", {
  variants,
  defaultVariants: {
    intent: "primary",
  },
});

interface ButtonProps
  extends TouchableOpacityProps,
    VariantProps<typeof buttonVariants> {
  label: string;
  styles?: string;
  prefixIcon?: React.ReactNode;
}

export const Button = ({
  onPress,
  disabled,
  label,
  intent,
  styles,
  prefixIcon,
}: ButtonProps) => {
  const textStyles = variants["text"][intent ?? "primary"];
  return (
    <TouchableOpacity
      className={cn(buttonVariants({ intent }), styles)}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <View className="flex-row items-center justify-center space-x-2">
        {prefixIcon && prefixIcon}
        <AppText styles={cn("font-medium tracking-[0.08px]", textStyles)}>
          {label}
        </AppText>
      </View>
    </TouchableOpacity>
  );
};
