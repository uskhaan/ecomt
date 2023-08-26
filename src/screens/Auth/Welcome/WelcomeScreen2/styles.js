import {StyleSheet} from 'react-native';
import {appFonts, colors, HP, size, WP} from '../../../../utilities';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: colors.white,
  },
  topHeader: {
    height: HP('45'),
    backgroundColor: colors.theme_color,
    paddingHorizontal: WP('4'),
    alignItems: 'center',
  },

  footerCon: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: WP('4'),
    // flex: 1,
  },
  innerCon: {
    flex: 1,
    justifyContent: 'space-between',
  },
  headerInner: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: WP('6'),
    paddingHorizontal: WP('4'),
    position: 'absolute',
    bottom: -HP('15'),
    width: '100%',
  },
  Image: {
    height: WP('60'),
    width: WP('70'),
  },
});

export default styles;
