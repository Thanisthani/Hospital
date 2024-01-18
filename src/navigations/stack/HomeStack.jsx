import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../../screens/App/HomeScreen'
import HospitalDoctorsListScreen from '../../screens/App/HospitalDoctorsListScreen.jsx'
import { createStackNavigator } from '@react-navigation/stack'

export default function HomeStack() {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={HomeScreen} name="Home" />
      <Stack.Screen
        component={HospitalDoctorsListScreen}
        name="Hosptial-Doctors-Screen"
      />
    </Stack.Navigator>
  )
}
