import {Dimensions, Platform, StyleSheet} from 'react-native';
import {appFonts, colors} from '../../utilities';

const styles = StyleSheet.create({
  tabBarStyle: {
    height: Platform.select({
      android: 70,
      ios: Dimensions.get('screen').height < 750 ? 70 : 100,
    }),
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingTop: 10,
  },
  tabBarLabelStyle: {
    fontSize: 12,
    marginBottom: 10,
    fontFamily: appFonts.poppinRegular,
  },
  homeIcon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  historyIcon: {
    height: 24,
    width: 26,
    resizeMode: 'contain',
  },
  docsIcon: {
    height: 24,
    width: 22,
    resizeMode: 'contain',
  },
  supportIcon: {
    height: 24,
    width: 28,
    resizeMode: 'contain',
  },
  menuIcon: {
    height: 24,
    width: 28,
    resizeMode: 'contain',
  },
});

export default styles;
