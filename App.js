import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import LoginScreen from './src/screens/Auth/LoginScreen'
import { colorSheet } from './src/ColorSheet'
import {
  useFonts,
  Poppins_500Medium,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_300Light,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_300Light,
  })

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <View
      style={{
        backgroundColor: colorSheet.bgColor,
        width: '100%',
      }}
    >
      <LoginScreen />
    </View>
  )
}
