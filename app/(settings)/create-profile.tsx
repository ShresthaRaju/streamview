import { AppText } from "@/components/AppText";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { CustomSwitch } from "@/components/Switch";
import { AntDesign } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { View, ScrollView, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const CreateProfile = () => {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <Header title="Create Profile" />
      <ScrollView
        contentContainerStyle={{ height: "100%" }}
        className="px-6 py-5"
      >
        <View className="self-center mt-4">
          <Image
            source={
              image ? { uri: image } : require("../../assets/images/user.png")
            }
            className="w-[100px] h-[100px] rounded-full"
          />
          <Pressable
            className="absolute right-0 items-center justify-center border-4 border-white rounded-full w-9 h-9 -bottom-1 bg-primary"
            onPress={pickImage}
          >
            <AntDesign name="edit" size={18} color="#fff" />
          </Pressable>
        </View>
        <Input containerClassName="my-9" label="Profile Name" />
        <View className="flex-row items-center space-x-5">
          <View className="shrink">
            <AppText styles="text-sm text-grayscale-100 font-medium leading-[22px]">
              Group Watch
            </AppText>
            <AppText styles="text-xs text-grayscale-50">
              Watch with family and personal friends who are in different places
            </AppText>
          </View>
          <CustomSwitch enabled />
        </View>
        <View className="flex-row items-center mt-4 space-x-5">
          <View className="shrink">
            <AppText styles="text-sm text-grayscale-100 font-medium leading-[22px]">
              Kids Profile
            </AppText>
            <AppText styles="text-xs text-grayscale-50">
              A profile with curated content and features with a simplified user
              interface
            </AppText>
          </View>
          <CustomSwitch />
        </View>
        <Button
          styles="mt-auto"
          label="Create Pin"
          onPress={() => router.push("/profile-pin")}
        />
        <Link href="/ready" asChild className="mt-5">
          <Pressable>
            <AppText styles="text-primary text-center font-semibold">
              Without Pin
            </AppText>
          </Pressable>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateProfile;
