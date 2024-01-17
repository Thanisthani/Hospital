import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/App/HomeScreen'
import ProfileScreen from '../screens/App/ProfileScreen'
import AppionmentScreen from '../screens/App/AppiontmentScreen'

const Tab = createBottomTabNavigator()

export default function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={ProfileScreen} />
      <Tab.Screen name="Appiontment" component={AppionmentScreen} />
    </Tab.Navigator>
  )
}
