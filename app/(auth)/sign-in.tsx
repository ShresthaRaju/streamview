import { Button } from "@/components/Button";
import { AppText } from "@/components/AppText";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { Link } from "expo-router";
import { Image, Pressable, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  return (
    <SafeAreaView className="flex-1">
      <Header title="Sign In" />
      <ScrollView
        className="px-6 pb-5"
        contentContainerStyle={{ height: "100%" }}
      >
        <Input
          label="Email"
          inputMode="email"
          placeholder="example@example.com"
          onChangeText={(value) => console.log("value", value)}
          containerClassName="mt-14"
        />
        <Input
          label="Password"
          placeholder="Password"
          secureTextEntry
          onChangeText={(value) => console.log("value", value)}
          containerClassName="mt-4"
        />
        <Button label="Continue" styles="mt-8" />

        <Link asChild href="/forgot-password" className="mt-4">
          <Pressable>
            <AppText styles="text-primary text-xs font-medium tracking-[0.06px] text-center">
              Forgot Password?
            </AppText>
          </Pressable>
        </Link>
        <View className="flex-row items-center space-x-3 mt-7">
          <View className="h-[1px] flex-grow bg-line-light" />
          <AppText styles="text-sm font-bold text-grayscale-70">OR</AppText>
          <View className="h-[1px] flex-grow bg-line-light" />
        </View>
        <Button
          label="Continue with Google"
          intent="outline"
          styles="mt-7"
          prefixIcon={
            <Image
              source={require("../../assets/images/google.png")}
              resizeMode="contain"
            />
          }
        />
        <Button
          label="Continue with Apple"
          intent="outline"
          styles="mt-4"
          prefixIcon={
            <Image
              source={require("../../assets/images/apple.png")}
              resizeMode="contain"
            />
          }
        />
        <Button
          label="Continue with Facebook"
          intent="outline"
          styles="mt-4"
          prefixIcon={
            <Image
              source={require("../../assets/images/facebook.png")}
              resizeMode="contain"
            />
          }
        />
        <View className="flex-row items-center justify-center mt-10 space-x-1">
          <AppText styles="text-xs text-grayscale-70">
            Don't have an account?
          </AppText>
          <Link push asChild href="/sign-up">
            <Pressable>
              <AppText styles="font-medium text-primary">Sign Up</AppText>
            </Pressable>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
