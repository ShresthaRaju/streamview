import { Button } from "@/components/Button";
import { AppText } from "@/components/AppText";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { PasswordInfo } from "@/components/PasswordInfo";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ResetPassword = () => {
  return (
    <SafeAreaView className="h-full">
      <Header title="Create New Password" />
      <ScrollView
        className="px-6 py-5"
        contentContainerStyle={{ height: "100%" }}
      >
        <AppText styles="text-grayscale-70 text-sm tracking-[0.07px] text-center my-10 leading-[22px]">
          Reset your password by entering a new one below
        </AppText>
        <Input label="New Password" placeholder="Password" secureTextEntry />
        <Input
          label="Confirm Password"
          placeholder="Confirm Password"
          secureTextEntry
          containerClassName="mt-4"
        />
        <PasswordInfo />
        <Button label="Continue" styles="mt-7" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResetPassword;
