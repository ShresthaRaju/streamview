import { cn } from "@/lib/utils";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";
import { TextInput, View } from "react-native";

interface SearchInputProps {
  containerStyles?: string;
}

export const SearchInput = ({ containerStyles }: SearchInputProps) => {
  return (
    <View
      className={cn(
        "flex-row items-center space-x-2 px-4 h-[52px] rounded-full border border-line",
        containerStyles
      )}
    >
      <AntDesign name="search1" size={18} color="#4C4E55" />
      <TextInput
        placeholder="Search..."
        className="flex-1 h-full"
        autoCapitalize="none"
      />
      <View className="h-[18px] bg-line w-[1px]" />
      <FontAwesome6 name="sliders" size={18} color="#02050F" />
    </View>
  );
};
