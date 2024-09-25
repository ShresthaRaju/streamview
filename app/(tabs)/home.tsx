import { AppText } from "@/components/AppText";
import { AntDesign, Fontisto } from "@expo/vector-icons";
import { FlatList, Image, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const data = ["Item 1", "Item 2", "Item 3", "Item 4"];

const Home = () => {
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView className="flex-1">
      <View className="mt-5 h-1/3">
        <View className="flex-row items-center px-6 mb-4 space-x-2">
          <Image
            source={{
              uri: "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww",
            }}
            className="rounded-full h-11 w-11"
            resizeMode="cover"
          />
          <View>
            <AppText styles="text-sm text-black font-bold leading-[22px]">
              Hi, User
            </AppText>
            <AppText styles="text-xs text-black-3 leading-5">
              Let's watch a movie
            </AppText>
          </View>
          <View className="flex-grow" />
          <AntDesign
            name="search1"
            size={22}
            color="black"
            style={{ marginRight: 8 }}
          />
          <View>
            <Fontisto name="bell" size={20} color="black" />
            <View className="absolute right-0 w-2 h-2 rounded-full top-0.5 bg-error" />
          </View>
        </View>

        <FlatList
          horizontal
          pagingEnabled
          data={data}
          bounces={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View style={{ width }} className="h-full px-6">
              <View className="items-center justify-center h-full bg-primary rounded-2xl">
                <AppText>{item}</AppText>
              </View>
            </View>
          )}
        />

        {/* Pagination */}
        <View className="flex-row items-center justify-center mt-4">
          <View className="h-1.5 w-1.5 rounded-full bg-primary"></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
