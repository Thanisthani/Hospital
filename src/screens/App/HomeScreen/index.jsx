import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import React, { useState } from 'react'
import { useUser } from '@clerk/clerk-expo'
import { styles } from './style'
import { colorSheet } from '../../../ColorSheet'
import { Ionicons } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import { AntDesign } from '@expo/vector-icons'
import teeth from '../../../../assets/icons/teeth.png'
import ear from '../../../../assets/icons/ear.png'
import heart from '../../../../assets/icons/heart.png'
import brain from '../../../../assets/icons/brain.png'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'
import { hospitalLists } from '../../../constants'

export default function HomeScreen() {
  const { isLoaded, isSignedIn, user } = useUser()

  const navigation = useNavigation()
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
        'https://muthumeenakshihospitals.com/img/heart-camp/MMH_Web-Banner.jpg',
    },
    {
      id: 2,
      name: 'Slider2',
      imageUrl:
        'https://img.freepik.com/free-photo/nurses-doctor-with-white-coat-face-mask-as-safety-precaution-against-coronavirus-outbreak-hospital-waiting-area_482257-8556.jpg',
    },
  ]

  return (
    <ScrollView>
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
        {/* Category list */}
        <View style={{ marginTop: hp(2), marginBottom: hp(2) }}>
          <View style={styles.iconHeader}>
            <Text style={styles.iconHeading}>Doctor Speciality</Text>
            <Text style={styles.iconOther}>See All</Text>
          </View>

          <View style={styles.iconContainer}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Hosptial-Doctors-Screen', {
                  catgoryName: 'Dentist',
                })
              }
              style={styles.iconWrapper}
            >
              <View style={styles.iconImgWrapper}>
                <Image source={teeth} style={styles.iconImg} />
              </View>
              <Text>Dentist</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Hosptial-Doctors-Screen', {
                  catgoryName: 'Cardiologist',
                })
              }
              style={styles.iconWrapper}
            >
              <View style={styles.iconImgWrapper}>
                <Image source={heart} style={styles.iconImg} />
              </View>
              <Text>Cardiologist</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Hosptial-Doctors-Screen', {
                  catgoryName: 'Neurologist',
                })
              }
              style={styles.iconWrapper}
            >
              <View style={styles.iconImgWrapper}>
                <Image source={brain} style={styles.iconImg} />
              </View>
              <Text>Neurologist</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Hosptial-Doctors-Screen', {
                  catgoryName: 'Onology',
                })
              }
              style={styles.iconWrapper}
            >
              <View style={styles.iconImgWrapper}>
                <Image source={ear} style={styles.iconImg} />
              </View>
              <Text>Onology</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Premium hosptial */}
        <View>
          <View style={styles.iconHeader}>
            <Text style={styles.iconHeading}>Premium Hospital</Text>
            <Text style={styles.iconOther}>See All</Text>
          </View>
          <FlatList
            data={hospitalLists}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <View style={styles.premiumContainer}>
                <Image
                  source={{
                    uri: item.imageUrl,
                  }}
                  style={styles.premiumImg}
                />
                <View style={styles.hospitalTextWrapper}>
                  <Text style={styles.hospitalName}>{item.name}</Text>
                  <Text style={styles.hospitalAddress}>{item.address}</Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </ScrollView>
  )
}
