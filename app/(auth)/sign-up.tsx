import { Button } from "@/components/Button";
import { AppText } from "@/components/AppText";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { PasswordInfo } from "@/components/PasswordInfo";
import { Link, router } from "expo-router";
import { View, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  return (
    <SafeAreaView className="flex-1">
      <Header title="Sign Up" />

      <ScrollView
        className="px-6 py-5"
        contentContainerStyle={{ height: "100%" }}
      >
        <View className="justify-between h-full">
          <View>
            <Input
              containerClassName="mt-4"
              label="Email"
              placeholder="example@example.com"
              inputMode="email"
            />
            <Input
              containerClassName="mt-4"
              label="Birthday"
              placeholder="example@example.com"
              inputMode="email"
            />
            <Input
              containerClassName="mt-4"
              label="Password"
              placeholder="Password"
              secureTextEntry
            />
            <Input
              containerClassName="mt-4"
              label="Confirm Password"
              placeholder="Confirm Password"
              secureTextEntry
            />
            <PasswordInfo />
          </View>

          <View>
            <AppText styles="text-xs leading-5 tracking-[0.06px] text-grayscale-70">
              By click the agree and continue button, you’re agree to Movees’
              <AppText styles="font-bold"> Terms and Service</AppText> and
              acknlowledge the{" "}
              <AppText styles="font-bold"> Privacy and Policy</AppText>{" "}
            </AppText>
            <Button
              styles="mt-4"
              label="Agree and Continue"
              onPress={() => router.replace("/create-profile")}
            />
            <View className="flex-row items-center justify-center mt-6 space-x-1">
              <AppText styles="text-xs text-grayscale-70">
                Already have an account?
              </AppText>
              <Link push asChild href="/sign-in">
                <Pressable>
                  <AppText styles="font-medium text-primary">Sign In</AppText>
                </Pressable>
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
