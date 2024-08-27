import { Image, View, useWindowDimensions, Pressable } from "react-native";
import { Button } from "./Button";
import { Link } from "expo-router";
import { AppText } from "./AppText";

interface OnboardingItemProps {
  title: string;
  image: string;
  description: string;
  activeItem: string;
  onPress: () => void;
}

export const OnboardingItem = ({
  title,
  image,
  description,
  activeItem,
  onPress,
}: OnboardingItemProps) => {
  const { width } = useWindowDimensions();

  return (
    <View className="p-6" style={{ width }}>
      <Image
        source={{
          uri: image,
        }}
        resizeMode="cover"
        className="w-full h-1/2 rounded-3xl"
      />
      <AppText styles="mt-10 text-xl font-bold text-center text-grayscale-100">
        {title}
      </AppText>
      <AppText styles="mt-4 text-sm text-center text-grayscale-70 leading-[22px] tracking-[0.07px]">
        {description}
      </AppText>
      <Button
        label={Number(activeItem) < 3 ? "Continue" : "Get Started"}
        onPress={onPress}
        styles="mt-16"
      />
      {activeItem === "3" && (
        <Link replace asChild href="/sign-in" className="mt-6">
          <Pressable>
            <AppText styles="font-medium text-center text-grayscale-50">
              Sign In
            </AppText>
          </Pressable>
        </Link>
      )}
    </View>
  );
};
