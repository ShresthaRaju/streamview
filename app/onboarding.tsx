import { OnboardingItem } from "@/components/OnboardingItem";
import { cn } from "@/lib/utils";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { FlatList, useWindowDimensions, View, ViewToken } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface OnboardingItem {
  id: string;
  title: string;
  image: string;
  description: string;
}

const ONBOARDING_ITEMS: OnboardingItem[] = [
  {
    id: "1",
    title: "Watching can be from anywhere",
    image:
      "https://assets-a1.kompasiana.com/items/album/2024/01/24/black-white-minimal-alone-movie-poster-65b07ccc12d50f1099340342.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
  },
  {
    id: "2",
    title: "Complete list of movies",
    image:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
  },
  {
    id: "3",
    title: "Spent Time with Loved Ones!",
    image:
      "https://assets-a1.kompasiana.com/items/album/2024/01/24/black-white-minimal-alone-movie-poster-65b07ccc12d50f1099340342.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
  },
];

const Onboarding = () => {
  const { width } = useWindowDimensions();
  const [activeItem, setActiveItem] = useState("1");
  const flatListRef = useRef<FlatList<OnboardingItem> | null>(null);

  const handleViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken<OnboardingItem>[];
  }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].item.id);
    }
  };

  const handlePress = () => {
    if (flatListRef.current) {
      if (Number(activeItem) < 3) {
        flatListRef.current.scrollToIndex({
          index: Number(activeItem),
          animated: true,
        });
      } else {
        router.replace("/sign-up");
      }
    }
  };

  return (
    <SafeAreaView className="h-full">
      <FlatList
        ref={flatListRef}
        keyExtractor={(item) => item.id}
        data={ONBOARDING_ITEMS}
        renderItem={({ item }) => (
          <OnboardingItem
            {...item}
            activeItem={activeItem}
            onPress={handlePress}
          />
        )}
        horizontal
        snapToInterval={width} // Snap to screen width
        snapToAlignment="center" // Aligns the snap point to the center
        decelerationRate="fast" // Make snapping smoother
        showsHorizontalScrollIndicator={false}
        viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
        onViewableItemsChanged={handleViewableItemsChanged}
        disableIntervalMomentum
      />

      {/* Pagination */}
      {Number(activeItem) < 3 && (
        <View className="flex flex-row justify-center mb-10 space-x-1">
          {Array.from({ length: ONBOARDING_ITEMS.length }).map((_, index) => (
            <View
              key={index}
              className={cn(
                "h-[6px] rounded-full",
                activeItem === (index + 1).toString()
                  ? "bg-primary w-6"
                  : "bg-grayscale-10 w-[6px]"
              )}
            />
          ))}
        </View>
      )}
    </SafeAreaView>
  );
};

export default Onboarding;
