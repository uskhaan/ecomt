import {StyleSheet} from 'react-native';
import {appFonts, colors, HP, size, WP} from '../../../utilities';

const styles = StyleSheet.create({
  scrHeading: {
    flexDirection: 'row',
    paddingHorizontal: WP('4'),
    alignItems: 'center',
    marginVertical: 20,
  },
  dateCon: {
    padding: WP('2'),
    backgroundColor: colors.th1,
    borderRadius: 8,
    marginLeft: 15,
  },
  itemSeparator: {
    paddingVertical: WP('1'),
  },
  itemContainerCon: {
    paddingBottom: WP('2'),
  },
});

export default styles;
