import {StyleSheet} from 'react-native';
import {appFonts, colors, HP, size, WP} from '../../../utilities';

const styles = StyleSheet.create({
  profileMenuCon: {
    backgroundColor: colors.white,
    padding: WP('4'),
    borderRadius: 8,
    marginTop: -WP('42'),
    marginHorizontal: WP('4'),
  },

  lineStyle: {
    borderWidth: 0.5,
    borderColor: colors.grey4,
    marginVertical: 10,
  },
});

export default styles;
