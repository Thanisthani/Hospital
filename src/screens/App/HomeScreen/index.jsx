import { View, Text, Image, StatusBar, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useUser } from '@clerk/clerk-expo'
import { styles } from './style'
import { colorSheet } from '../../../ColorSheet'
import { Ionicons } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import { AntDesign } from '@expo/vector-icons'

export default function HomeScreen() {
  const { isLoaded, isSignedIn, user } = useUser()

  const [searchText, setSearchText] = useState()
  const [searchInput, setSearchInput] = useState()

  if (!isLoaded || !isSignedIn) {
    return null
  }

  const sliderList = [
    {
      id: 1,
      name: 'Slider1',
      imageUrl:
        'https://us.123rf.com/450wm/pitinan/pitinan1905/pitinan190500343/123561240-healthcare-profession-teamwork-and-doctor-service-concept-international-medical-staff-group-of.jpg?ver=6',
    },
    {
      id: 2,
      name: 'Slider2',
      imageUrl:
        'https://img.freepik.com/free-photo/nurses-doctor-with-white-coat-face-mask-as-safety-precaution-against-coronavirus-outbreak-hospital-waiting-area_482257-8556.jpg',
    },
  ]
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <View style={styles.wrapper}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={colorSheet.secondary1}
            animated={true}
          />
          <Image style={styles.profilePic} source={{ uri: user.imageUrl }} />
          <View>
            <Text style={styles.greet}>Hello,👋</Text>
            <Text style={styles.name}>{user.fullName}</Text>
          </View>
        </View>

        <Ionicons
          name="notifications-outline"
          size={RFValue(25)}
          color="black"
        />
      </View>
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <AntDesign
          name="search1"
          size={RFValue(15)}
          color={colorSheet.primary2}
        />
        <TextInput
          placeholder="Search"
          style={styles.searchBar}
          onChangeText={(value) => setSearchInput(value)}
          onSubmitEditing={() => {
            setSearchText(searchInput)
            console.log(searchInput)
          }}
        />
      </View>
      {/* Slider */}
      <View style={styles.sliderWrapper}>
        <FlatList
          data={sliderList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Image source={{ uri: item.imageUrl }} style={styles.sliderImg} />
          )}
        />
      </View>
    </View>
  )
}
