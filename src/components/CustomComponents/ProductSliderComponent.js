import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WP, appFonts, colors} from '../../utilities';
import {TextComponent} from '../Text/TextComponent';
import {ProductCard} from '../../components';
export const ProductSliderComponent = ({mT, title, data}) => (
  <View style={[styles.mainCon, {marginTop: mT}]}>
    <View style={styles.topCon}>
      <TextComponent
        size={18}
        family={appFonts.montserratBold}
        color={colors.black}
        text={title}
      />
      <TouchableOpacity style={styles.button}>
        <TextComponent
          size={12}
          family={appFonts.montserratMedium}
          color={colors.white}
          text={'See All'}
        />
      </TouchableOpacity>
    </View>

    <FlatList
      style={styles.flatList}
      data={data}
      renderItem={({item, index}) => {
        return <ProductCard data={item} />;
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
  mainCon: {},
  topCon: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: WP('4'),
  },
  button: {
    backgroundColor: colors.theme_color,
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
    marginTop: WP('4'),
  },
});
