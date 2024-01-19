import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { colorSheet } from '../../../ColorSheet'

export const styles = StyleSheet.create({
  img: {
    width: wp(100),
    height: hp(30),
  },
  backArrow: {
    position: 'absolute',
    margin: 10,
    zIndex: 100,
  },
  container: {
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colorSheet.white,
    paddingHorizontal: wp(4),
    width: wp(100),
    paddingVertical: hp(2),
  },
  name: {
    fontSize: RFValue(16),
    fontFamily: 'Inter_700Bold',
  },
  categoryWrpper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  horizontalLine: {
    borderBottomColor: colorSheet.secondary2,
    borderBottomWidth: 0.2,
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
  subText: {
    fontSize: RFValue(13),
    fontFamily: 'Inter_400Regular',
    color: colorSheet.secondary1,
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    // paddingHorizontal: wp(3),
    marginTop: hp(0.8),
  },
  iconHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconHeading: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: RFValue(15),
    marginBottom: hp(1),
  },
  iconOther: {
    fontFamily: 'Inter_400Regular',
    fontSize: RFValue(13),
    color: colorSheet.primary1,
  },
  aboutTxt: {
    fontFamily: 'Inter_400Regular',
    fontSize: RFValue(13),
    textAlign: 'justify',
  },
  btnWrapper: {
    position: 'relative',
    bottom: -30,
  },
  btn: {
    width: wp(90),
    paddingVertical: hp(1),
    alignItems: 'center',
    backgroundColor: colorSheet.secondary3,
    borderRadius: 50,
  },
  btnTxt: {
    color: colorSheet.white,
    fontFamily: 'Inter_600SemiBold',
    fontSize: RFValue(13),
  },
})
