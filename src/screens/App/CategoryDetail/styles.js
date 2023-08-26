import {StyleSheet} from 'react-native';
import {appFonts, colors, HP, size, WP} from '../../../utilities';

const styles = StyleSheet.create({
  itemSeparator: {
    paddingVertical: WP('2'),
  },
  flatList: {
    justifyContent: 'space-between',
  },
  contentCon: {
    alignItems: 'center',
  },
  flatContentCon: {
    paddingVertical: WP('10'),
  },
  cardCon: {marginHorizontal: WP('2')},
});

export default styles;
