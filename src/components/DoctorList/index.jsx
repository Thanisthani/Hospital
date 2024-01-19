import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { doctorList } from '../../constants'
import { styles } from './style'

export default function DoctorList() {
  return (
    <View>
      <FlatList
        data={doctorList}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.imgWrapper}>
              <Image source={{ uri: item.imageUrl }} style={styles.pic} />
              <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.categoryTxt}>{item.category}</Text>
                <Text style={styles.expTxt}>{item.Experiance} Years</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnTxt}>Book Appointment</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}
