import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

export const styles = StyleSheet.create({
  heading: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: RFValue(20),
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    paddingHorizontal: wp(3),
    marginTop: hp(2),
  },
})
