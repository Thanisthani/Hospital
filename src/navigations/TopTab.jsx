import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import DoctorListScreen from '../screens/App/DoctorListScreen'
import HospitalListScreen from '../screens/App/HospitalListScreen'

export default function TopTab() {
  const Tab = createMaterialTopTabNavigator()
  return (
    <Tab.Navigator>
      <Tab.Screen name="Doctor-list" component={DoctorListScreen} />
      <Tab.Screen name="Hostpital-list" component={HospitalListScreen} />
    </Tab.Navigator>
  )
}
