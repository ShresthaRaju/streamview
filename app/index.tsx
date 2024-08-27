import { View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { AppText } from "@/components/AppText";

const Index = () => {
  return (
    <View className="items-center justify-center h-full bg-primary">
      <Image
        source={require("../assets/images/icon.png")}
        resizeMode="contain"
      />
      <AppText styles="text-3xl font-bold text-center text-white">
        Streamview
      </AppText>
      <AppText styles="absolute text-sm font-medium text-white bottom-24">
        v1.0.0
      </AppText>
      <StatusBar hidden />
    </View>
  );
};

export default Index;
