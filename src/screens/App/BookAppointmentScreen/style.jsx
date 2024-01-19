import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { colorSheet } from '../../../ColorSheet'

export const styles = StyleSheet.create({
  img: {
    width: wp(20),
    height: wp(20),
    borderRadius: 99,
  },
  name: {
    fontSize: RFValue(16),
    fontFamily: 'Inter_700Bold',
  },
  subText: {
    fontSize: RFValue(14),
    fontFamily: 'Inter_400Regular',
    color: colorSheet.secondary1,
    width: wp(45),
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    // paddingHorizontal: wp(3),
    marginTop: hp(0.8),
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    marginTop: hp(2),
  },
  horizontalLine: {
    borderBottomColor: colorSheet.secondary2,
    borderBottomWidth: 0.8,
    marginVertical: hp(1),
  },
  iconWrapper: {
    width: wp(13),
    height: wp(13),
    borderRadius: 99,
    backgroundColor: colorSheet.secondary4,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp(0.7),
  },
  contactLabel: {
    fontFamily: 'Inter_600SemiBold',
  },
  subTitle: {
    fontFamily: 'Inter_600SemiBold',
    color: colorSheet.secondary1,
    fontSize: RFValue(14),
  },
  subHeading: {
    fontFamily: 'Inter_700Bold',
    color: colorSheet.black,
    fontSize: RFValue(16),
    marginBottom: hp(2),
  },
  dayWrapper: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: colorSheet.secondary1,
    paddingVertical: 5,
    width: wp(25),
    alignItems: 'center',
    marginLeft: wp(2),
    marginBottom: hp(1.5),
  },
  dateText: {
    fontFamily: 'Inter_400Regular',
    color: colorSheet.black,
    fontSize: RFValue(12),
  },
  dayText: {
    fontFamily: 'Inter_700Bold',
    color: colorSheet.black,
    fontSize: RFValue(13),
  },
  extraNotes: {
    backgroundColor: colorSheet.secondary4,
    borderRadius: 10,
    padding: 8,
    textAlignVertical: 'top',
    fontSize: RFValue(13),
  },
  btn: {
    width: wp(90),
    paddingVertical: hp(1),
    alignItems: 'center',
    backgroundColor: colorSheet.secondary3,
    borderRadius: 50,
    marginTop: hp(4),
  },
  btnTxt: {
    color: colorSheet.white,
    fontFamily: 'Inter_600SemiBold',
    fontSize: RFValue(13),
  },
})
