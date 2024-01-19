import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../../screens/App/HomeScreen'
import HospitalDoctorsListScreen from '../../screens/App/HospitalDoctorsListScreen.jsx'
import { createStackNavigator } from '@react-navigation/stack'
import HospitalDetailScreen from '../../screens/App/HospitalDetailScreen/index.jsx'
import BookAppointmentScreen from '../../screens/App/BookAppointmentScreen/index.jsx'

export default function HomeStack() {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={HomeScreen} name="HomeStack" />
      <Stack.Screen
        component={HospitalDoctorsListScreen}
        name="Hosptial-Doctors-Screen"
      />
      <Stack.Screen
        component={HospitalDetailScreen}
        name="Hospital-Detail-Screen"
      />
      <Stack.Screen
        component={BookAppointmentScreen}
        name="Book-Appointment-Screen"
      />
    </Stack.Navigator>
  )
}
