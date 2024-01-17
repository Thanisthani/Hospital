import { SafeAreaView } from 'react-native'
import LoginScreen from './src/screens/Auth/LoginScreen'
import { colorSheet } from './src/ColorSheet'
import {
  useFonts,
  Inter_500Medium,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_300Light,
  Inter_700Bold,
} from '@expo-google-fonts/inter'
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo'
import SignInWithOAuth from './src/components/signInWithOAuth'
import HomeScreen from './src/screens/App/HomeScreen'
import BottomTab from './src/navigations/BottomTab'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Inter_500Medium,
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_300Light,
  })

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <ClerkProvider
      publishableKey={'pk_test_a25vd24tbW9sZS02My5jbGVyay5hY2NvdW50cy5kZXYk'}
    >
      <SafeAreaView
        style={{
          backgroundColor: colorSheet.bgColor,
          height: '100%',
        }}
      >
        <SignedIn>
          <NavigationContainer>
            <BottomTab />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <LoginScreen />
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  )
}
