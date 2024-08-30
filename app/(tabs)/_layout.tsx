import { cn } from "@/lib/utils";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";

const tabs = [
  {
    title: "Home",
    icon: AntDesign,
    iconName: "home",
  },
  {
    title: "Search",
    icon: AntDesign,
    iconName: "search1",
  },
  {
    title: "Favorites",
    icon: Feather,
    iconName: "heart",
  },
  {
    title: "Profile",
    icon: AntDesign,
    iconName: "user",
  },
];

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#685CF0",
        tabBarInactiveTintColor: "#B0B0B3",
        tabBarStyle: {
          paddingHorizontal: 48,
          paddingVertical: 20,
          backgroundColor: "#FEFEFE",
          borderTopWidth: 0,
          shadowColor: "rgba(41, 41, 41, 0.06)",
          shadowOffset: { width: 0, height: -6 },
          shadowOpacity: 1,
          shadowRadius: 48,
          elevation: 12,
        },
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.title}
          name={tab.title.toLowerCase()}
          options={{
            title: tab.title,
            tabBarIcon: ({ color, focused }) => (
              <>
                <tab.icon name={tab.iconName as any} size={24} color={color} />
                <View
                  className={cn(
                    "w-6 h-0.5 bg-primary rounded-full mt-1.5",
                    focused ? "opacity-100" : "opacity-0"
                  )}
                />
              </>
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabsLayout;
