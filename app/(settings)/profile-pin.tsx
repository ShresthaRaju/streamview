import { AppText } from "@/components/AppText";
import { Header } from "@/components/Header";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { OtpInput } from "react-native-otp-entry";
import { Button } from "@/components/Button";
import { router } from "expo-router";

const ProfilePin = () => {
  return (
    <SafeAreaView>
      <Header title="Create Profile Pin" />
      <View className="px-6 py-5">
        <AppText styles="text-sm text-grayscale-70 text-center">
          Set a 4-digit PIN to prevent others from accessing this profile
        </AppText>
        <OtpInput
          numberOfDigits={4}
          autoFocus
          hideStick
          secureTextEntry
          type="numeric"
          theme={{
            containerStyle: { marginTop: 40, width: "75%", margin: "auto" },
            pinCodeContainerStyle: {
              height: 45,
              borderWidth: 1,
              borderColor: "#D9D9D9",
              borderRadius: 40,
            },
            focusedPinCodeContainerStyle: {
              borderColor: "#49A9E1",
            },
            pinCodeTextStyle: {
              fontSize: 30,
            },
          }}
        />
        <Button
          label="Create Pin"
          styles="mt-10"
          onPress={() => router.replace("/ready")}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfilePin;
