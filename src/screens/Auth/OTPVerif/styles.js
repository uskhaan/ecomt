import {StyleSheet} from 'react-native';
import {appFonts, colors, size, WP} from '../../../utilities';

const styles = StyleSheet.create({
  lineStyle: {
    borderWidth: 0.9,
    borderColor: colors.g2,
    // marginVertical: 10,
    width: WP('50'),
  },
  lineCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dividerText: {
    fontFamily: appFonts.poppinRegular,
    fontSize: size.xsmall,
    color: colors.g3,
    marginHorizontal: 7,
  },
  checkIcon: {
    top: -1,
    marginRight: 5,
  },
  rememberComp: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  textStyle: {
    fontSize: size.normal,
    color: colors.g5,
    fontFamily: appFonts.poppinRegular,
  },
  appleCon: {
    height: 45,
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.g4,
  },
  appButtonText: {
    fontSize: size.xsmall,
    color: colors.b1,
    // alignSelf: 'center',
    fontFamily: appFonts.poppinSemiBold,
  },
  otpText: {
    color: colors.white,
    fontFamily: appFonts.montserratBold,
    fontSize: 26,
    // width: '100%',
  },
});

export default styles;
