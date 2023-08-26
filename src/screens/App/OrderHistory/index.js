import React from 'react';
import {Image, View} from 'react-native';
import {
  AppButton,
  HomeHeader,
  TextComponent,
  TransactionCard,
} from '../../../components';
import {
  WP,
  appFonts,
  appImages,
  colors,
  commonstyles,
} from '../../../utilities';
import styles from './styles';
import {FlatList} from 'react-native';

const MyStore = ({navigation}) => {
  return (
    <View style={commonstyles.main}>
      <HomeHeader title={'Order History'} search={false} />
      <View style={styles.scrHeading}>
        <TextComponent
          text={'Transactions'}
          family={appFonts.montserratBold}
          size={20}
          color={colors.black}
        />
        <View style={styles.dateCon}>
          <TextComponent
            text={'January 2020'}
            family={appFonts.montserratBold}
            size={13}
            color={colors.theme_color}
          />
        </View>
      </View>

      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        style={[]}
        contentContainerStyle={styles.itemContainerCon}
        horizontal={false}
        renderItem={({item, index}) => {
          return <TransactionCard />;
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={<View style={styles.itemSeparator} />}
      />
    </View>
  );
};

export default MyStore;
