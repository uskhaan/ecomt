import React from 'react';
import {View} from 'react-native';
import {WP, commonstyles, spacing} from '../../../utilities';
import {AppHeader} from '../../../components/Headers/AppHeader';
import {FlatList} from 'react-native';
import {HomeHeader, ProductCard} from '../../../components';
import styles from './styles';

const Browse = () => {
  return (
    <View style={commonstyles.main}>
      <HomeHeader title={'Browse'} filters={true} search={true} />

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

export default Browse;
