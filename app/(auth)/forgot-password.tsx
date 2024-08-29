import { Button } from "@/components/Button";
import { AppText } from "@/components/AppText";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ForgotPassword = () => {
  return (
    <SafeAreaView className="flex-1">
      <Header title="Forgot Password" />
      <View className="px-6 py-5">
        <AppText styles="text-grayscale-70 text-sm tracking-[0.07px] text-center my-10 leading-[22px]">
          Input your linked email to your Movees account below, we’ll send you a
          link
        </AppText>
        <Input
          label="Email"
          placeholder="example@example.com"
          inputMode="email"
        />
        <Button label="Continue" styles="mt-7" />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
