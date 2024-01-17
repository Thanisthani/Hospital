import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { SearchBar } from 'react-native-screens'
import { colorSheet } from '../../../ColorSheet'

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(4),
    marginTop: hp(2),
  },
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  profilePic: {
    width: wp(13),
    height: hp(6),
    borderRadius: 99,
  },
  greet: {
    fontSize: RFValue(14),
    fontFamily: 'Inter_400Regular',
  },
  name: {
    fontSize: RFValue(16),
    fontFamily: 'Inter_700Bold',
  },
  headerWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchBarContainer: {
    marginTop: hp(2.5),
    borderWidth: 0.7,
    borderColor: colorSheet.secondary2,
    borderRadius: 10,
    paddingHorizontal: wp(2),
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    gap: 8,
  },
  searchBar: {
    fontSize: RFValue(14),
    width: wp(100),
    paddingVertical: hp(0.4),
    color: colorSheet.secondary1,
    textDecorationLine: 'none',
    fontFamily: 'Inter_400Regular',
  },
  sliderImg: {
    width: wp(90),
    height: hp(25),
    borderRadius: 10,
    margin: 2.5,
  },
  sliderWrapper: {
    marginTop: hp(2),
  },
})
