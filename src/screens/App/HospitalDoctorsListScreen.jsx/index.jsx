import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import HeaderTitle from '../../../components/headerTitle'

export default function HospitalDoctorsListScreen() {
  const params = useRoute().params
  return (
    <View>
      <HeaderTitle title={params.catgoryName} />
    </View>
  )
}
