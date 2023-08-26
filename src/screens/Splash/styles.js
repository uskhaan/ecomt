import {StyleSheet} from 'react-native';
import {colors, HP, WP} from '../../utilities';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.theme_color,
  },
  text: {
    fontSize: 55,
    color: 'white',
  },
  imageStyles: {
    height: WP('40'),
    width: WP('40'),
    zIndex: 100,
    position: 'absolute',
  },
});

export default styles;
