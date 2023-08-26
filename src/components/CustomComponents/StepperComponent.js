import React from 'react';
import {StyleSheet, View} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import {WP, appFonts, colors} from '../../utilities';
import {TextComponent} from '../Text/TextComponent';

export const StepperComponent = ({
  steps = [],
  height = WP('70'),
  width = '100%',
  mT,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          height: height,
          width: width,
          marginTop: mT,
        },
      ]}>
      <StepIndicator
        renderLabel={({position}) => {
          const step = steps[position];
          return (
            <View
              style={{
                width: WP('85'),
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <TextComponent
                  family={appFonts.montserratMedium}
                  color={colors.black}
                  text={step.label}
                  size={14}
                  mL={10}
                />
                <TextComponent
                  family={appFonts.montserratMedium}
                  color={colors.grey6}
                  text={step.date}
                  size={10}
                  mR={5}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <TextComponent
                  family={appFonts.montserratMedium}
                  color={colors.grey6}
                  text={step.subLabel}
                  size={10}
                  mL={10}
                  mT={10}
                />

                <TextComponent
                  family={appFonts.montserratMedium}
                  color={colors.grey6}
                  text={step.time}
                  size={10}
                  mT={10}
                />
              </View>
            </View>
          );
        }}
        customStyles={{
          stepIndicatorSize: 15,
          currentStepIndicatorSize: 20,
          separatorStrokeWidth: 2,
          currentStepStrokeWidth: 3,
          stepStrokeCurrentColor: colors.theme_color_light_1,
          separatorFinishedColor: colors.theme_color,
          separatorUnFinishedColor: colors.grey,
          stepIndicatorFinishedColor: colors.theme_color,
          stepIndicatorUnFinishedColor: colors.grey,
          stepIndicatorCurrentColor: colors.theme_color,
          stepIndicatorLabelCurrentColor: 'transparent',
          stepIndicatorLabelFinishedColor: 'transparent',
          stepIndicatorLabelUnFinishedColor: 'transparent',
          labelAlign: 'flex-start',
        }}
        labels={steps.map(step => step.label)}
        direction={'vertical'}
        stepCount={steps.length}
        currentPosition={steps.findIndex(step => step.isActive)}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
