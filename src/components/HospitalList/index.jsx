import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { hospitalLists } from '../../constants'
import { styles } from './style'
import { Ionicons } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import { colorSheet } from '../../ColorSheet'

export default function HospitalList() {
  return (
    <View>
      <FlatList
        data={hospitalLists}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imageUrl }} style={styles.hospitalImg} />
            <View style={styles.nameWrapper}>
              <Text style={styles.name}>{item.name}</Text>
              <View style={styles.categoryWrpper}>
                <Text style={styles.subText}>{item.categories[0]}</Text>
                <Text style={styles.subText}>{item.categories[1]}</Text>
              </View>
            </View>
            <View style={styles.textWrapper}>
              <Ionicons
                name="location"
                size={RFValue(20)}
                color={colorSheet.secondary3}
              />
              <Text style={styles.subText}>{item.address}</Text>
            </View>
            <View style={styles.textWrapper}>
              <Ionicons
                name="eye-sharp"
                size={RFValue(20)}
                color={colorSheet.secondary3}
              />
              <Text style={styles.subText}>{item.views} Views</Text>
            </View>
          </View>
        )}
      />
    </View>
  )
}
