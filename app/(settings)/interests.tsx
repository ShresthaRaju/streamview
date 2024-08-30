import { AppText } from "@/components/AppText";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { SearchInput } from "@/components/SearchInput";
import { cn } from "@/lib/utils";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { View, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const GENRES = [
  "Romance",
  "Animation",
  "Thriller",
  "Adventure",
  "Horror",
  "Action",
  "Drama",
  "Mystery",
  "Crime",
  "Sci-Fi",
];

const ChooseInterests = () => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const selectGenres = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(
        selectedGenres.filter((selectedGenre) => selectedGenre !== genre)
      );
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <Header title="Choose Interests" />
      <AppText styles="text-sm leading-[22px] text-grayscale-70 text-center mt-5 mx-6">
        Choose your favorite interest to get new shows all in one place related
        to it
      </AppText>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
        }}
      >
        <View className="flex-1 px-6 py-5">
          <SearchInput containerStyles="mt-5 mb-6" />
          <View className="flex-row flex-wrap gap-4">
            {GENRES.map((genre) => (
              <Pressable
                key={genre}
                className={cn(
                  "flex-row items-center px-4 py-2 space-x-2 border rounded-xl shrink-0",
                  selectedGenres.includes(genre)
                    ? "border-primary"
                    : "border-line"
                )}
                onPress={() => selectGenres(genre)}
              >
                {selectedGenres.includes(genre) ? (
                  <Feather name="check" size={20} color="#685CF0" />
                ) : (
                  <View className="w-1 h-1 rounded-full bg-line" />
                )}
                <AppText
                  styles={cn(
                    "text-sm",
                    selectedGenres.includes(genre)
                      ? "text-primary"
                      : "text-grayscale-90"
                  )}
                >
                  {genre}
                </AppText>
              </Pressable>
            ))}
          </View>
          <Button
            label="Next"
            styles="mt-auto"
            onPress={() => router.replace("/home")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChooseInterests;
