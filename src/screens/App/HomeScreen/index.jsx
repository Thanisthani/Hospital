import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo'

export default function HomeScreen() {
  const { isLoaded, signOut } = useAuth()
  return (
    <View style={{ marginTop: 50 }}>
      <Button title="SignOut" onPress={() => signOut()} />
      <Text>Home</Text>
    </View>
  )
}
