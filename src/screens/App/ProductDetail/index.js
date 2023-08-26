import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {
  BotTabCard,
  ProductDescCard,
  ProductDetailCard,
  ProductHeader,
  ProductTitleCard,
} from '../../../components';
import {WP, appImages, commonstyles, spacing} from '../../../utilities';
import styles from './styles';

const ProductDetail = () => {
  return (
    <View style={commonstyles.main}>
      <View style={[commonstyles.main]}>
        <ProductHeader
          style="slide"
          items={[
            {
              src: appImages.fruitsImage,
            },
            {
              src: appImages.welcomeImage1,
            },
            {
              src: appImages.welcomeImage3,
            },
          ]}
        />
        <ProductTitleCard />
        <ScrollView
          contentContainerStyle={spacing.pb10}
          showsVerticalScrollIndicator={false}>
          <ProductTitleCard
            onPressFollow={() => console.log('Follow Pressed')}
            mT={WP('2')}
          />
          <ProductDescCard mT={WP('2')} />
          <ProductDetailCard
            mT={WP('2')}
            title={'Details'}
            title1={'Condition'}
            desc1={'Organic'}
            title2={'Price Type'}
            desc2={'Fixed'}
            title3={'Category'}
            desc3={'Beverages'}
            title4={'Location'}
            desc4={'Kualalumpur, Malaysia'}
          />
          <ProductDetailCard
            mT={WP('2')}
            title={'Additional Details'}
            title1={'Delivery Details'}
            desc1={'Home Delivery Available, Cash On Delivery'}
          />
        </ScrollView>
      </View>
      <View style={styles.botTabCon}>
        <BotTabCard title={'Add To Cart'} />
      </View>
    </View>
  );
};

export default ProductDetail;
