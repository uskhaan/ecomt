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
  expCon: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: 10,
  },
  optionsCon: {
    backgroundColor: colors.white,
    marginTop: WP('4'),
  },
});

export default styles;
