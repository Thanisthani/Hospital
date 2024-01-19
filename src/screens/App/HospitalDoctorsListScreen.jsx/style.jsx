import { StyleSheet } from 'react-native'
import { colorSheet } from '../../../ColorSheet'
import { RFValue } from 'react-native-responsive-fontsize'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

export const styles = StyleSheet.create({
  tabWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: hp(1),
    borderBottomWidth: 0.5,
    borderBottomColor: colorSheet.secondary4,
  },
  activeTab: {
    borderBottomWidth: 4,
    borderBottomColor: colorSheet.secondary3,
    paddingBottom: hp(1),
  },
  inActiveTab: {
    paddingBottom: hp(1),
  },
  activeText: {
    fontFamily: 'Inter_700Bold',
    fontSize: RFValue(15),
    color: colorSheet.secondary3,
  },
  inActiveText: {
    fontFamily: 'Inter_700Bold',
    fontSize: RFValue(15),
    color: colorSheet.secondary2,
  },
})
