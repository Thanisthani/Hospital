import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { colorSheet } from '../../ColorSheet'

export const styles = StyleSheet.create({
  pic: {
    width: wp(32),
    height: hp(18),
    borderRadius: 15,
  },
  details: {},
  card: {
    backgroundColor: colorSheet.white,
    borderRadius: 20,
    padding: 10,
    marginBottom: hp(1.5),
    width: wp(90),
  },
  imgWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  name: {
    fontSize: RFValue(16),
    fontFamily: 'Inter_700Bold',
  },
  categoryTxt: {
    fontSize: RFValue(12),
    fontFamily: 'Inter_400Regular',
    color: colorSheet.secondary1,
  },
  expTxt: {
    fontSize: RFValue(12),
    fontFamily: 'Inter_700Bold',
    color: colorSheet.primary2,
  },
  btn: {
    width: '100%',
    paddingVertical: hp(1),
    alignItems: 'center',
    backgroundColor: colorSheet.secondary4,
    borderRadius: 10,
    marginTop: hp(1.5),
  },
  btnTxt: {
    color: colorSheet.secondary3,
    fontFamily: 'Inter_600SemiBold',
    fontSize: RFValue(13),
  },
})
