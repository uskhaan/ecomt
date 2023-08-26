import React from 'react';
import {View} from 'react-native';
import {WP, commonstyles, spacing} from '../../../utilities';
import {FlatList} from 'react-native';
import {AppHeader, ProductCard} from '../../../components';
import styles from './styles';

const Wishlist = () => {
  return (
    <View style={commonstyles.main}>
      <AppHeader title={'Wishlist'} />

      <View style={[styles.contentCon, commonstyles.contentContainer()]}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          style={[]}
          contentContainerStyle={[styles.flatContentCon]}
          horizontal={false}
          numColumns={2}
          renderItem={({item, index}) => {
            return (
              <View style={styles.cardCon}>
                <ProductCard />
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={<View style={styles.itemSeparator} />}
        />
      </View>
    </View>
  );
};

export default Wishlist;
