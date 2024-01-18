import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { styles } from './style'
import { useNavigation } from '@react-navigation/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { colorSheet } from '../../ColorSheet'

export default function HeaderTitle({ title }) {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Feather
          name="arrow-left-circle"
          size={RFValue(25)}
          color={colorSheet.primary1}
        />
      </TouchableOpacity>
      <Text style={styles.heading}>{title}</Text>
    </View>
  )
}
