import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  ImageBackground,
} from 'react-native';
import {appFonts, appImages, colors, size, spacing, WP} from '../../utilities';
import {TextComponent} from '../Text/TextComponent';

export const SliderCard = ({data}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={data?.imgSrc}
        style={styles.backgroundImage}
        imageStyle={styles.image}>
        <View style={styles.overlay}>
          <TextComponent
            size={14}
            family={appFonts.montserratSemiBold}
            color={colors.white}
            text={data?.title}
            maxWidth={WP('50')}
          />

          {data?.text && (
            <TouchableOpacity style={styles.button} onPress={data?.onPress}>
              <TextComponent
                size={12}
                family={appFonts.montserratBold}
                color={colors.white}
                text={data?.text}
                maxWidth={WP('50')}
              />
            </TouchableOpacity>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WP('80'),
    height: WP('40'),
    borderRadius: 8,
    overflow: 'hidden',
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
  },
  image: {
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 16,
  },
  button: {
    borderWidth: 1.5,
    borderColor: colors.white,
    paddingVertical: WP('2'),
    padding: WP('4'),
    borderRadius: 20,
    alignItems: 'center',
    marginTop: WP('4'),
    alignSelf: 'flex-start',
  },
});
