import { View } from "react-native";
import { AppText } from "./AppText";
import { Ionicons } from "@expo/vector-icons";

export const PasswordInfo = () => {
  return (
    <View className="flex-row mt-3 space-x-2">
      <Ionicons
        name="checkmark-circle"
        size={12}
        color="#00C566"
        style={{ marginTop: 2 }}
      />
      <AppText styles="text-[10px] leading-4 tracking-[0.05px]">
        Password must be at least 8 character, uppercase, lowercase, and unique
        code like #%!
      </AppText>
    </View>
  );
};
