import React from 'react';
import {StyleSheet, View} from 'react-native';
import {WP, appFonts, colors} from '../../utilities';
import {StepperComponent, TextComponent} from '../../components';

export const TrackOrderComponent = ({title, mT}) => {
  return (
    <View style={[styles.container, {marginTop: mT}]}>
      <TextComponent
        family={appFonts.montserratSemiBold}
        color={colors.black}
        text={'Track Order'}
        size={16}
      />
      <TextComponent
        family={appFonts.montserratMedium}
        color={colors.grey6}
        text={'Order ID - 123455'}
        size={14}
        mT={10}
      />
      <View style={styles.lineStyle} />
      <StepperComponent
        mT={10}
        steps={[
          {
            label: 'Step 1',
            subLabel: 'Title 1',
            date: '2023-08-12',
            time: '10:00 AM',
            isActive: false,
          },
          {
            label: 'Step 2',
            subLabel: 'Title 2',
            date: '2023-08-13',
            time: '11:00 AM',
            isActive: false,
          },
          {
            label: 'Step 2',
            subLabel: 'Title 2',
            date: '2023-08-13',
            time: '11:00 AM',
            isActive: true,
          },
          {
            label: 'Step 2',
            subLabel: 'Title 2',
            date: '2023-08-13',
            time: '11:00 AM',
            isActive: false,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: WP('4'),
    paddingBottom: WP('2'),
    paddingLeft: WP('4'),
    backgroundColor: colors.white,
    shadowColor: colors.sh1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    activeOpacity: 0.7,
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 6,
  },
  lineStyle: {
    borderWidth: 1,
    borderColor: colors.theme_color,
    marginTop: 10,
    width: WP('20'),
  },
});
