import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { colorSheet } from '../../../ColorSheet'

export const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  heading: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
    // fontFamily: 'Poppins_400Regular',
  },
  appImg: {
    height: hp(60),
    width: wp(60),
    objectFit: 'contain',
    borderColor: colorSheet.black,
    borderWidth: 5,
    borderRadius: 35,
    marginTop: hp(15),
  },
  headingWrapper: {
    backgroundColor: colorSheet.white,
    marginTop: -hp(10),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    width: wp(100),
    paddingTop: hp(3),
    paddingHorizontal: wp(2),
  },
  desc: {
    fontSize: RFValue(15),
    textAlign: 'center',
    marginTop: hp(2),
  },
  btn: {
    alignItems: 'center',
    backgroundColor: colorSheet.primary1,
    marginTop: hp(4),
    width: wp(70),
    borderRadius: 50,
    paddingVertical: hp(1.5),
  },
  btnText: {
    color: colorSheet.white,
    fontSize: RFValue(15),
  },
})
