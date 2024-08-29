import { OnboardingItem } from "@/components/OnboardingItem";
import { cn } from "@/lib/utils";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { FlatList, useWindowDimensions, View, ViewToken } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
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
  const [activeItem, setActiveItem] = useState(0);
  const flatListRef = useRef<FlatList<OnboardingItem> | null>(null);
  const scrollX = useSharedValue(0);
  const { width } = useWindowDimensions();

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  // using Ref holds a reference to a value or a function, and unlike a function/state,
  //  updating .current doesn't trigger a re-render of the component.
  const handleViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken<OnboardingItem>[] }) => {
      if (
        viewableItems[0].index !== undefined &&
        viewableItems[0].index !== null
      ) {
        setActiveItem(viewableItems[0].index);
      }
    }
  ).current;

  const handlePress = () => {
    if (flatListRef.current) {
      if (activeItem < 2) {
        flatListRef.current.scrollToIndex({
          index: activeItem + 1,
          animated: true,
        });
      } else {
        router.replace("/sign-up");
      }
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <Animated.FlatList
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
        showsHorizontalScrollIndicator={false}
        viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
        onViewableItemsChanged={handleViewableItemsChanged}
        pagingEnabled
        bounces={false}
        onScroll={onScrollHandler}
      />

      {/* Pagination */}
      <View
        className={cn(
          "flex flex-row justify-center mb-10 space-x-1",
          activeItem === 2 ? "opacity-0" : "opacity-100"
        )}
      >
        {Array.from({ length: ONBOARDING_ITEMS.length }).map((_, index) => {
          const paginationStyle = useAnimatedStyle(() => {
            const dotWidth = interpolate(
              scrollX.value,
              [(index - 1) * width, index * width, (index + 1) * width],
              [6, 24, 6],
              Extrapolation.CLAMP
            );
            return { width: dotWidth };
          });

          return (
            <Animated.View
              key={index}
              className={cn(
                "rounded-full h-[6px]",
                activeItem === index ? "bg-primary" : "bg-grayscale-10"
              )}
              style={[paginationStyle]}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
