import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {WP} from '../../utilities';
import {SliderCard} from '../../components';
export const SliderComponent = ({data, mT}) => (
  <View style={[styles.mainCon, {marginTop: mT}]}>
    <View style={styles.sliderCon}>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return <SliderCard data={item} />;
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
  </View>
);

const styles = StyleSheet.create({
  sliderCon: {
    paddingVertical: WP('4'),
  },
  itemSeparator: {
    padding: WP('2'),
  },
});
