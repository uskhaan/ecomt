import {StyleSheet} from 'react-native';
import {appFonts, colors, size, WP} from '../../../utilities';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    height: WP('35'),
    width: WP('35'),
    marginBottom: 20,
  },
  h1: {
    fontSize: size.h5,
    marginVertical: 10,
    fontFamily: appFonts.gilroySemiBold,
    color: colors.b1,
  },
  h2: {
    fontSize: size.normal,
    fontFamily: appFonts.gilroyMedium,
    color: colors.b1,
    marginBottom: 50,
  },
});

export default styles;
