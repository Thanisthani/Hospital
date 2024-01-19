import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import HeaderTitle from '../../../components/headerTitle'
import { styles } from './style'
import { Ionicons } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import { colorSheet } from '../../../ColorSheet'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { contactList } from '../../../constants'
import { FontAwesome } from '@expo/vector-icons'
import moment from 'moment'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react/cjs/react.development'

export default function BookAppointmentScreen() {
  const params = useRoute().params
  const [nextDays, setNextDays] = useState([])
  const [timeList, setTimeList] = useState([])

  const [selectedDate, setSelectedDate] = useState()
  const [selectedTime, setSelectedTime] = useState()
  //  Get next 7 days
  const getDays = () => {
    const today = moment()
    const nextSevenDays = []

    for (let i = 1; i < 8; i++) {
      const date = moment().add(i, 'days')
      nextSevenDays.push({
        date: date,
        day: date.format('ddd'),
        formmatedDay: date.format('Do MMM'),
      })
    }

    setNextDays(nextSevenDays)
  }

  // Get time

  const getTime = async () => {
    const timeListi = []
    for (let i = 8; i < 12; i++) {
      timeListi.push({ time: i + ':00 AM' })
      timeListi.push({ time: i + ':30 AM' })
    }
    timeListi.push({ time: '12:00 PM' })
    timeListi.push({ time: '12:30 PM' })
    for (let i = 1; i < 6; i++) {
      timeListi.push({ time: i + ':00 PM' })
      timeListi.push({ time: i + ':30 PM' })
    }

    await setTimeList(timeListi)
    console.log(timeListi)
  }

  useEffect(() => {
    getDays()
    getTime()
  }, [])

  return (
    <View>
      <HeaderTitle title={'Book Appointment'} />
      <View style={{ paddingHorizontal: wp(3) }}>
        <View style={styles.detailsContainer}>
          <Image
            source={{ uri: params.hospital.imageUrl }}
            style={styles.img}
          />
          <View>
            <Text style={styles.name}>{params.hospital.name}</Text>
            <View style={styles.textWrapper}>
              <Ionicons
                name="location"
                size={RFValue(23)}
                color={colorSheet.primary1}
              />
              <Text style={styles.subText}>{params.hospital.address}</Text>
            </View>
          </View>
        </View>
        <View style={styles.horizontalLine}></View>
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
        <Text style={styles.subTitle}>Book Appointment</Text>
        {/* Day selection */}
        <Text style={styles.subHeading}>Day</Text>
        <FlatList
          data={nextDays}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.dayWrapper,
                selectedDate == item.date
                  ? { backgroundColor: colorSheet.primary1 }
                  : null,
              ]}
              onPress={() => setSelectedDate(item.date)}
            >
              <Text
                style={[
                  styles.dateText,
                  selectedDate == item.date
                    ? { color: colorSheet.white }
                    : null,
                ]}
              >
                {item.day}
              </Text>
              <Text
                style={[
                  styles.dayText,
                  selectedDate == item.date
                    ? { color: colorSheet.white }
                    : null,
                ]}
              >
                {item.formmatedDay}
              </Text>
            </TouchableOpacity>
          )}
        />

        {/* Time selection */}
        <Text style={styles.subHeading}>Time</Text>
        <FlatList
          data={timeList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.dayWrapper,
                selectedTime == item.time
                  ? { backgroundColor: colorSheet.primary1 }
                  : null,
              ]}
              onPress={() => setSelectedTime(item.time)}
            >
              <Text
                style={[
                  styles.dayText,
                  selectedTime == item.time
                    ? { color: colorSheet.white }
                    : null,
                ]}
              >
                {item.time}
              </Text>
            </TouchableOpacity>
          )}
        />

        {/* Extra note input */}
        <Text style={styles.subHeading}>Additional Notes</Text>
        <TextInput
          placeholder="Write additional notes here!"
          numberOfLines={3}
          style={styles.extraNotes}
        />

        {/* Submit btn */}
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt}>Book Appointment</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
