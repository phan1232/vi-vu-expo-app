import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  ProfileCircle,
  Bookmark as BookmarkIcon,
  Home3 as HomeIcon,
} from "iconsax-react-native";
import { useTheme } from "native-base";
import { BottomTabsParams } from "./config";
import Home from "../screens/main/Home";
import Bookmark from "../screens/main/Bookmark";
import Profile from "../screens/main/Profile";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator<BottomTabsParams>();

const TabNav = () => {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: colors.coolGray[300],
        tabBarActiveTintColor: colors.primary[600],
        tabBarShowLabel: false,
        tabBarStyle: {
          bottom: 0,
          borderTopWidth: 1,
          paddingTop: 12,
          borderTopColor: colors.coolGray[300],
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <HomeIcon
              size={size}
              color={color}
              variant="Bold"
              style={{ marginBottom: 12 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name={"bookmark"}
              size={size}
              color={color}
              variant="Bold"
              style={{ marginBottom: 12 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ProfileCircle
              size={size}
              color={color}
              variant="Bold"
              style={{ marginBottom: 12 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;

const styles = StyleSheet.create({});
