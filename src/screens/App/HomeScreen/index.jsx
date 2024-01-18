import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  FlatList,
  ScrollView,
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

  const premiumLists = [
    {
      id: 1,
      name: 'Nawaloka Hospital',
      address: 'No 20, Marine Road, Colombo 07.',
      imageUrl:
        'https://www.achn.net/globalassets/2022-new-site-photos/istock-987891546.jpg',
    },
    {
      id: 2,
      name: 'Nothern Hospital',
      address: 'No 345, Palay Road, Thirunelveli, Jaffna.',
      imageUrl:
        'https://www.brookings.edu/wp-content/uploads/2017/05/hospital002.jpg',
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
            <View style={styles.iconWrapper}>
              <View style={styles.iconImgWrapper}>
                <Image source={teeth} style={styles.iconImg} />
              </View>
              <Text>Dentist</Text>
            </View>
            <View style={styles.iconWrapper}>
              <View style={styles.iconImgWrapper}>
                <Image source={heart} style={styles.iconImg} />
              </View>
              <Text>Cardiologist</Text>
            </View>
            <View style={styles.iconWrapper}>
              <View style={styles.iconImgWrapper}>
                <Image source={brain} style={styles.iconImg} />
              </View>
              <Text>Neurologist</Text>
            </View>
            <View style={styles.iconWrapper}>
              <View style={styles.iconImgWrapper}>
                <Image source={ear} style={styles.iconImg} />
              </View>
              <Text>Onology</Text>
            </View>
          </View>
        </View>

        {/* Premium hosptial */}
        <View>
          <View style={styles.iconHeader}>
            <Text style={styles.iconHeading}>Premium Hospital</Text>
            <Text style={styles.iconOther}>See All</Text>
          </View>
          <FlatList
            data={premiumLists}
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
