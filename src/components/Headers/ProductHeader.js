import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {MyStatusBar} from '../Bar/MyStatusBar';
import {HP, WP, appIcons, appImages, colors} from '../../utilities';
import {TouchableOpacity} from 'react-native';
import {Image} from 'react-native';

export const ProductHeader = props => {
  const {items, style} = props;
  const itemsPerInterval =
    props.itemsPerInterval === undefined ? 1 : props.itemsPerInterval;

  const [interval, setInterval] = useState(1);
  const [intervals, setIntervals] = useState(1);
  const [width, setWidth] = useState(0);

  const init = width => {
    // initialise width
    setWidth(width);
    // initialise total intervals
    const totalItems = items.length;
    setIntervals(Math.ceil(totalItems / itemsPerInterval));
  };

  const getInterval = offset => {
    for (let i = 1; i <= intervals; i++) {
      if (offset + 1 < (width / intervals) * i) {
        return i;
      }
      if (i === intervals) {
        return i;
      }
    }
  };

  const Slide = props => {
    const {src} = props;

    return (
      <View style={styles.slide}>
        <ImageBackground
          source={src}
          style={styles.backgroundImage}
          imageStyle={styles.image}>
          <View style={styles.overlay}></View>
        </ImageBackground>
      </View>
    );
  };

  let bullets = [];
  for (let i = 1; i <= intervals; i++) {
    bullets.push(
      <Text
        key={i}
        style={{
          ...styles.bullet,
          opacity: interval === i ? 1 : 0.3,
          color: interval === i ? colors.theme_color : colors.white,
        }}>
        &bull;
      </Text>,
    );
  }

  return (
    <View>
      <MyStatusBar
        backgroundColor={colors.theme_color}
        barStyle={'light-content'}
      />
      <View>
        <View style={styles.headerTopCon}>
          <TouchableOpacity style={styles.buttonCon}>
            <Image source={appIcons.backArrow} style={styles.icon}></Image>
          </TouchableOpacity>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.buttonCon}>
              <Image source={appIcons.share} style={styles.icon}></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttonCon, {marginHorizontal: 10}]}>
              <Image source={appIcons.heart} style={styles.icon}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonCon}>
              <Image source={appIcons.threeDots} style={styles.icon}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{
            ...styles.scrollView,
            width: `${100 * intervals}%`,
          }}
          showsHorizontalScrollIndicator={false}
          onContentSizeChange={(w, h) => init(w)}
          onScroll={data => {
            setWidth(data.nativeEvent.contentSize.width);
            setInterval(getInterval(data.nativeEvent.contentOffset.x));
          }}
          scrollEventThrottle={200}
          pagingEnabled
          decelerationRate="fast">
          {items.map((item, index) => {
            return <Slide key={index} src={item.src} />;
          })}
        </ScrollView>
      </View>
      <View style={styles.bullets}>{bullets}</View>
    </View>
  );
};

export const styles = StyleSheet.create({
  slide: {
    flexBasis: '100%',
    flex: 1,
    maxWidth: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    width: WP('80'),
    height: HP('25'),
    overflow: 'hidden',
  },
  scrollView: {
    display: 'flex',
    overflow: 'hidden',
  },
  bullets: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  bullet: {
    paddingHorizontal: 5,
    fontSize: 35,
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
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: WP('4'),
  },

  icon: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
    tintColor: colors.white,
  },
  headerTopCon: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 5,
    zIndex: 99998,
    padding: WP('4'),
  },
  buttonCon: {
    borderRadius: 20,
    height: 32,
    width: 32,
    // opacity: 0.5,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
