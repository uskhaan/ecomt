import {StyleSheet} from 'react-native';
import {appFonts, colors, HP, size, WP} from '../../../../utilities';

const styles = StyleSheet.create({
  botTabCon: {
    height: 85,
  },

  itemSeparator: {
    paddingVertical: WP('1'),
  },
  itemContainerCon: {
    paddingBottom: WP('20'),
  },
  listFooter: {
    marginTop: WP('15'),
  },
  listHeader: {
    marginBottom: WP('2'),
  },
  doneImg: {
    height: 100,
    width: 160,
    resizeMode: 'contain',
  },
  doneCon: {
    marginVertical: WP('10'),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
