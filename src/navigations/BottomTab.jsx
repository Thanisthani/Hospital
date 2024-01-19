import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/App/HomeScreen'
import ProfileScreen from '../screens/App/ProfileScreen'
import AppionmentScreen from '../screens/App/AppiontmentScreen'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { colorSheet } from '../ColorSheet'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import HomeStack from './stack/HomeStack'

const Tab = createBottomTabNavigator()

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colorSheet.primary2,
        tabBarInactiveTintColor: colorSheet.secondary1,
        tabBarStyle: {
          backgroundColor: colorSheet.primary1,
          height: hp(8),
          paddingBottom: hp(0.8),
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Appiontment"
        component={AppionmentScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-alt" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
