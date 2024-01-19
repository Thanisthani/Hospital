import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderTitle from '../../../components/headerTitle'
import { useRoute, useNavigation } from '@react-navigation/native'
import { styles } from './style'
import { contactList } from '../../../constants'
import { FontAwesome } from '@expo/vector-icons'
import { colorSheet } from '../../../ColorSheet'
import { Ionicons } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

export default function HospitalDetailScreen() {
  const params = useRoute().params
  const navigation = useNavigation()
  return (
    <View>
      <View style={styles.backArrow}>
        <HeaderTitle title={''} />
      </View>
      <Image source={{ uri: params.hospital.imageUrl }} style={styles.img} />
      <View style={styles.container}>
        <Text style={styles.name}>{params.hospital.name}</Text>
        <View style={styles.categoryWrpper}>
          <Text style={styles.subText}>{params.hospital.categories[0]}</Text>
          <Text style={styles.subText}>{params.hospital.categories[1]}</Text>
        </View>
        <View style={styles.horizontalLine}></View>
        <View style={styles.textWrapper}>
          <Ionicons
            name="location"
            size={RFValue(20)}
            color={colorSheet.primary1}
          />
          <Text style={styles.subText}>{params.hospital.address}</Text>
        </View>
        <View style={styles.textWrapper}>
          <Ionicons
            name="time"
            size={RFValue(20)}
            color={colorSheet.primary1}
          />
          <Text style={styles.subText}>Mon Sun | 11AM - 8PM</Text>
        </View>
        {/* Contact details */}
        <FlatList
          data={contactList}
          numColumns={5}
          columnWrapperStyle={{
            flex: 1,
            justifyContent: 'space-between',
          }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ alignItems: 'center', marginVertical: 10 }}
            >
              <View style={styles.iconWrapper}>
                <FontAwesome
                  name={item.icon}
                  size={24}
                  color={colorSheet.primary1}
                />
              </View>
              <Text style={styles.contactLabel}>{item.label}</Text>
            </TouchableOpacity>
          )}
        />
        <View style={styles.horizontalLine}></View>
        <View style={styles.iconHeader}>
          <Text style={styles.iconHeading}>About</Text>
          <Text style={styles.iconOther}>See All</Text>
        </View>
        <Text style={styles.aboutTxt}>{params.hospital.about}</Text>
        <View style={styles.btnWrapper}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              navigation.navigate('Book-Appointment-Screen', {
                hospital: params.hospital,
              })
            }}
          >
            <Text style={styles.btnTxt}>Book Appointment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
