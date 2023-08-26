import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {WP, commonstyles, spacing} from '../../../utilities';
import {
  HomeHeader,
  ProductCard,
  ProductSliderComponent,
  SliderCard,
  SliderComponent,
  SquareMenuComponent,
  StoreSliderComponent,
} from '../../../components';
import styles from './styles';
import {AppHeader} from '../../../components/Headers/AppHeader';

const Home = ({navigation}) => {
  return (
    <View style={commonstyles.main}>
      <HomeHeader title={'Groceries'} search={true} />
      <ScrollView
        contentContainerStyle={[spacing.pb10]}
        showsVerticalScrollIndicator={false}>
        <SliderComponent />
        <SquareMenuComponent
          onPress={() => {
            navigation.navigate('Category');
          }}
        />
        <ProductSliderComponent mT={WP('5')} />
        <ProductSliderComponent mT={WP('5')} />
        <StoreSliderComponent mT={WP('5')} />
      </ScrollView>
    </View>
  );
};

export default Home;
