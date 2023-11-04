import React from 'react';
import {ScrollView, View} from 'react-native';
import {
  HomeHeader,
  ProductSliderComponent,
  SliderComponent,
  SquareMenuComponent,
  StoreSliderComponent,
} from '../../../components';
import {
  WP,
  commonstyles,
  homeNewList,
  homeSliderList,
  homeSquareMenuList,
  spacing,
} from '../../../utilities';

const Home = ({navigation}) => {
  return (
    <View style={commonstyles.main}>
      <HomeHeader title={'Groceries'} search={true} />
      <ScrollView
        contentContainerStyle={[spacing.pb10]}
        showsVerticalScrollIndicator={false}>
        <SliderComponent data={homeSliderList} />
        <SquareMenuComponent data={homeSquareMenuList} />
        <ProductSliderComponent
          mT={WP('5')}
          title={'New Products'}
          data={homeNewList}
        />
        <ProductSliderComponent mT={WP('5')} title={'Popular Products'} />
        <StoreSliderComponent mT={WP('5')} />
      </ScrollView>
    </View>
  );
};

export default Home;
