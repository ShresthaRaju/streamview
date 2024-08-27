import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, View } from "react-native";
import { AppText } from "./AppText";

export const Header = ({ title }: { title: string }) => {
  return (
    <View className="flex-row items-center mx-6 mt-5">
      {router.canGoBack() && (
        <Pressable className="absolute z-10" onPress={() => router.back()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>
      )}
      <AppText styles="text-xl flex-grow font-bold text-center text-grayscale-100 tracking-[0.1px]">
        {title}
      </AppText>
    </View>
  );
};
