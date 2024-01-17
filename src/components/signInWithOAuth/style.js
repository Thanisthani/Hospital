import { StyleSheet } from 'react-native'
import { colorSheet } from '../../ColorSheet'
import { RFValue } from 'react-native-responsive-fontsize'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

export const styles = StyleSheet.create({
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
