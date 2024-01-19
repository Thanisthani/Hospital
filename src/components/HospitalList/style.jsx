import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { colorSheet } from '../../ColorSheet'

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colorSheet.white,
    borderRadius: 10,
    marginBottom: hp(2),
  },
  hospitalImg: {
    width: wp(90),
    height: hp(20),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  name: {
    fontSize: RFValue(16),
    fontFamily: 'Inter_700Bold',
  },
  subText: {
    fontSize: RFValue(12),
    fontFamily: 'Inter_400Regular',
    color: colorSheet.secondary1,
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: wp(3),
    marginTop: hp(0.8),
  },
  categoryWrpper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  nameWrapper: {
    marginHorizontal: wp(3),
    borderBottomColor: colorSheet.secondary2,
    borderBottomWidth: 0.2,
    padding: 3,
  },
})
