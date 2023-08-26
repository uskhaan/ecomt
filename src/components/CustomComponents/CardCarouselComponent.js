import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {HP, WP, appFonts, colors} from '../../utilities';
import {TextComponent} from '../Text/TextComponent';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const CardCarouselComponent = props => {
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

  let bullets = [];
  for (let i = 1; i <= intervals; i++) {
    bullets.push(
      <Text
        key={i}
        style={{
          ...styles.bullet,
          opacity: interval === i ? 1 : 0.1,
        }}>
        &bull;
      </Text>,
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        contentContainerStyle={{
          ...styles.scrollView,
          width: `${100 * intervals}%`,
        }}
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={(w, h) => init(w)}
        onScroll={event => {
          setWidth(event.nativeEvent.contentSize.width);
          setInterval(getInterval(event.nativeEvent.contentOffset.x));
        }}
        scrollEventThrottle={200}
        pagingEnabled
        decelerationRate="fast">
        {items.map((item, index) => {
          switch (style) {
            case 'stats':
              return (
                <View style={styles.stat} key={index}>
                  <Text style={{...styles.statText}}>{item.value}</Text>
                  <View style={styles.statHold}>
                    <Text style={{...styles.statLabel}}>{item.label}</Text>
                  </View>
                </View>
              );

            default:
              return (
                <View style={styles.slide} key={index}>
                  <TouchableOpacity
                    style={{
                      ...styles.addCardButton,
                    }}>
                    <MaterialCommunityIcons
                      name={'plus'}
                      color={colors.grey}
                      size={25}
                    />
                    <TextComponent
                      text={'Add Payment Method'}
                      family={appFonts.montserratRegular}
                      size={14}
                      color={colors.grey}
                      mT={25}
                    />
                  </TouchableOpacity>
                </View>
              );
          }
        })}
      </ScrollView>
      <View style={styles.bullets}>{bullets}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  statsHead: {
    paddingTop: 10,
    paddingHorizontal: 12,
  },
  container: {
    width: '100%',
    backgroundColor: colors.white,
    paddingTop: WP('7'),
  },
  scrollView: {
    // display: 'flex',
    // flexDirection: 'row',
    // overflow: 'hidden',
  },
  bullets: {
    // position: 'absolute',
    // top: 0,
    // right: 0,
    // display: 'flex',
    // justifyContent: 'flex-start',
    flexDirection: 'row',
    // paddingHorizontal: 10,
    // paddingTop: 5,
    alignSelf: 'center',
  },
  bullet: {
    paddingHorizontal: 5,
    fontSize: 50,
    color: colors.theme_color,
  },
  slide: {
    flexBasis: '100%',
    flex: 1,
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  slideText: {
    width: '100%',
    textAlign: 'left',
    fontSize: 20,
  },

  stat: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 30,
    flexBasis: '33%',
    flex: 1,
    maxWidth: '33%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  statText: {
    width: '100%',
    textAlign: 'left',
    fontSize: 20,
  },
  statHold: {
    width: '100%',
    marginBottom: 8,
  },
  statLabel: {
    width: '100%',
    textAlign: 'left',
    fontSize: 11,
    fontWeight: '600',
    paddingTop: 5,
  },
  addCardButton: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.grey,
    padding: WP('10'),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
