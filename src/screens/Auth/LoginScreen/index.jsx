import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import app from '../../../../assets/images/app.png'
import SignInWithOAuth from '../../../components/signInWithOAuth'

export default function LoginScreen() {
  return (
    <View style={styles.wrapper}>
      <Image style={styles.appImg} source={app} />
      <View style={styles.headingWrapper}>
        <Text style={styles.heading}>Your Ultimate Doctor</Text>
        <Text style={styles.heading}>Appointment Booking App</Text>
        <Text style={styles.desc}>
          Book appointments effortlessly and manage your health journey
        </Text>
        <SignInWithOAuth />
      </View>
    </View>
  )
}
