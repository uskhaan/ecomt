import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WP, appFonts, colors} from '../../utilities';
import {TextComponent} from '../Text/TextComponent';
import {ProductCard, StoreCard} from '../../components';
export const StoreSliderComponent = ({mT}) => (
  <View style={[styles.mainCon, {marginTop: mT}]}>
    <View
      style={{
        paddingHorizontal: WP('4'),
        backgroundColor: colors.theme_color,
        paddingTop: WP('4'),
        height: WP('50'),
      }}>
      <View style={styles.topCon}>
        <TextComponent
          size={18}
          family={appFonts.montserratBold}
          color={colors.white}
          text={'Store to follow'}
        />
        <TouchableOpacity style={styles.button}>
          <TextComponent
            size={12}
            family={appFonts.montserratMedium}
            color={colors.theme_color}
            text={'View All'}
          />
        </TouchableOpacity>
      </View>
    </View>

    <FlatList
      style={styles.flatList}
      data={[1, 2, 3, 4, 5]}
      renderItem={({item, index}) => {
        return <StoreCard />;
      }}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      keyExtractor={(item, index) => index.toString()}
      ItemSeparatorComponent={<View style={styles.itemSeparator} />}
      ListFooterComponentStyle={{paddingHorizontal: WP('2')}}
      ListFooterComponent={<View />}
      ListHeaderComponentStyle={{paddingHorizontal: WP('2')}}
      ListHeaderComponent={<View />}
    />
  </View>
);
const styles = StyleSheet.create({
  mainCon: {
    // height: WP('40'),
  },
  topCon: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: WP('4'),
    paddingVertical: WP('2'),
    borderRadius: 24,
  },
  itemSeparator: {
    padding: WP('2'),
  },
  flatList: {
    // paddingHorizontal: WP('4'),
    marginTop: -WP('33'),
  },
});
