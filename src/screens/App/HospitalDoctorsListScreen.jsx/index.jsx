import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import HeaderTitle from '../../../components/headerTitle'
import { styles } from './style'
import HospitalList from '../../../components/HospitalList'
import { colorSheet } from '../../../ColorSheet'
import DoctorList from '../../../components/DoctorList'

export default function HospitalDoctorsListScreen() {
  const params = useRoute().params

  const [isActive, setIsActive] = useState(0)
  return (
    <View style={{ backgroundColor: colorSheet.bgColor }}>
      <HeaderTitle title={params.catgoryName} />
      <View style={styles.tabWrapper}>
        <TouchableOpacity
          onPress={() => {
            setIsActive(0)
          }}
          style={isActive == 0 ? styles.activeTab : styles.inActiveTab}
        >
          <Text style={isActive == 0 ? styles.activeText : styles.inActiveText}>
            Doctor
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setIsActive(1)
          }}
          style={isActive == 1 ? styles.activeTab : styles.inActiveTab}
        >
          <Text style={isActive == 1 ? styles.activeText : styles.inActiveText}>
            Hospital
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center', marginTop: 15 }}>
        {isActive == 0 ? <DoctorList /> : <HospitalList />}
      </View>
    </View>
  )
}
