import { AppText } from "@/components/AppText";
import { Button } from "@/components/Button";
import { LinearGradient } from "expo-linear-gradient";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, ImageBackground, Pressable } from "react-native";

const Ready = () => {
  return (
    <>
      <View className="h-3/4">
        <ImageBackground
          source={require("../../assets/images/ready.png")}
          resizeMode="stretch"
          className="w-full h-full"
        />
        <LinearGradient
          colors={[
            "rgba(255, 255, 255, 0.00)",
            "rgba(255, 255, 255, 0.30)",
            "rgba(255, 255, 255, 0.85)",
            "#FFF",
          ]}
          className="absolute top-0 left-0 right-0 h-full"
        />
      </View>
      <View className="absolute w-full px-6 py-5 bottom-5">
        <AppText className="text-2xl font-bold tracking-[0.12px] text-center">
          Are you ready to watch movies?
        </AppText>
        <AppText className="mt-4 text-sm text-center">
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod
        </AppText>
        <Button
          styles="mt-10"
          label="Continue"
          onPress={() => router.replace("/interests")}
        />
        <Link href="/home" asChild className="mt-5">
          <Pressable>
            <AppText styles="text-primary text-center font-semibold">
              Skip for Now
            </AppText>
          </Pressable>
        </Link>
      </View>
      <StatusBar hidden />
    </>
  );
};

export default Ready;
