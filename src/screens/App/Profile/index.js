import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {
  HomeHeader,
  ProfileCard,
  TextComponent,
  TransactionCard,
} from '../../../components';
import {appFonts, colors, commonstyles} from '../../../utilities';
import styles from './styles';

const Profile = ({navigation}) => {
  return (
    <View style={commonstyles.main}>
      <HomeHeader title={'Profile'} search={false} />
      <ProfileCard />
      <View style={styles.profileMenuCon}>
        <TouchableOpacity>
          <TextComponent
            size={14}
            family={appFonts.montserratMedium}
            color={colors.black}
            text={'Edit Profile'}
          />
        </TouchableOpacity>
        <View style={styles.lineStyle} />
        <TouchableOpacity>
          <TextComponent
            size={14}
            family={appFonts.montserratMedium}
            color={colors.black}
            text={'Language & Currency'}
          />
        </TouchableOpacity>
        <View style={styles.lineStyle} />
        <TouchableOpacity>
          <TextComponent
            size={14}
            family={appFonts.montserratMedium}
            color={colors.black}
            text={'Feedback'}
          />
        </TouchableOpacity>
        <View style={styles.lineStyle} />
        <TouchableOpacity>
          <TextComponent
            size={14}
            family={appFonts.montserratMedium}
            color={colors.black}
            text={'Refer a Friend'}
          />
        </TouchableOpacity>
        <View style={styles.lineStyle} />
        <TouchableOpacity>
          <TextComponent
            size={14}
            family={appFonts.montserratMedium}
            color={colors.black}
            text={'Terms & Conditions'}
          />
        </TouchableOpacity>
        <View style={styles.lineStyle} />
        <TouchableOpacity>
          <TextComponent
            size={14}
            family={appFonts.montserratMedium}
            color={colors.theme_color}
            text={'Logout'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
