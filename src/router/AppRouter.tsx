import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Order from "../screens/Order";
import Search from "../screens/Search";
import Trend from "../screens/Trend";
import { Pressable } from "react-native";
import HomeIcon from "../components/icons/HomeIcon";
import OrderIcon from "../components/icons/OrderIcon";
import SearchIcon from "../components/icons/SearchIcon";
import TrendIcon from "../components/icons/TrendIcon";
import ProfileIcon from "../components/icons/ProfileIcon";
import { useNavigation, useTheme } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

function AppRouter() {
  const Tab = createBottomTabNavigator();
  const { colors } = useTheme();
  const navigation: any = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: "#999999",
        tabBarLabelPosition: "below-icon",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Pressable onPress={() => navigation.navigate("home")}>
              <HomeIcon size={25} color={focused ? colors.primary : color} />
            </Pressable>
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="search"
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, focused }) => (
            <Pressable onPress={() => navigation.navigate("search")}>
              <SearchIcon size={25} color={focused ? colors.primary : color} />
            </Pressable>
          ),
        }}
        component={Search}
      />
      <Tab.Screen
        name="trend"
        options={{
          tabBarLabel: "Trend",
          tabBarIcon: ({ color, focused }) => (
            <Pressable onPress={() => navigation.navigate("trend")}>
              <TrendIcon size={25} color={focused ? colors.primary : color} />
            </Pressable>
          ),
        }}
        component={Trend}
      />
      <Tab.Screen
        name="order"
        options={{
          tabBarLabel: "Order",
          tabBarIcon: ({ color, focused }) => (
            <Pressable onPress={() => navigation.navigate("order")}>
              <OrderIcon size={25} color={focused ? colors.primary : color} />
            </Pressable>
          ),
        }}
        component={Order}
      />

      <Tab.Screen
        name="profile"
        options={{
          tabBarLabel: "Proofile",
          tabBarIcon: ({ color, focused }) => (
            <Pressable onPress={() => navigation.navigate("profile")}>
              <Icon
                name="person-outline"
                size={30}
                color={color}
                // style={styles(theme).searchIcon}
              />
            </Pressable>
          ),
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
}

export default AppRouter;
