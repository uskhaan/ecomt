import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { Icon } from "@rneui/base";
import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Divider } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../redux/actions";
import {
  appFonts,
  capitalizeFirstLetter,
  colors,
  commonstyles,
  HP,
  profile_uri,
  size,
  WP,
} from "../../utilities";
import { MyStatusBar } from "../Bar/MyStatusBar";

export const DrawerMenu = ({ navigation }) => {
  const { userInfo } = useSelector((state) => state?.auth);
  const { userImage } = useSelector((state) => state?.auth);
  const dispatch = useDispatch(null);

  // Logout
  const onLogout = async () => {
    const body = {
      onSuccess: () => {
        navigation?.replace("Auth");
        GoogleSignin.signOut();
      },
      onFailure: () => {},
    };
    dispatch(logoutAction(body));
  };

  const menu_list = [
    {
      id: 0,
      title: "Home",
      icon: (
        <Icon
          style={styles.icon}
          name="home"
          size={20}
          color={colors.theme_color}
        />
      ),
      onPress: () => {
        navigation?.navigate("Home");
      },
    },
    {
      id: 1,
      title: "History",
      icon: (
        <Icon
          style={styles.icon}
          name="history"
          size={20}
          color={colors.theme_color}
        />
      ),
      onPress: () => {
        if (userInfo) {
          navigation?.navigate("AllQuestions");
        } else {
          navigation?.replace("Auth");
        }
      },
    },
    {
      id: 0,
      title: "Logout",
      icon: (
        <Icon
          style={styles.icon}
          name="logout"
          size={20}
          color={colors.theme_color}
        />
      ),
      onPress: () => {
        onLogout();
      },
    },
  ];

  return (
    <>
      <MyStatusBar backgroundColor={colors.white} barStyle={"dark-content"} />
      <SafeAreaView style={styles.mainContainer}>
        <View>
          <View style={styles.userInfoContainer}>
            <View style={styles.infoContainer}>
              <View style={styles.imgStyle}>
                <Image
                  style={styles.profileImg}
                  source={{
                    uri: userImage ? userImage : profile_uri,
                  }}
                />
              </View>

              <TouchableOpacity
                onPress={() => {
                  if (!userInfo) {
                    navigation?.navigate("Auth");
                  }
                }}
                activeOpacity={0.9}
                style={styles.userNameContainer}
              >
                <Text style={styles.userName}>
                  {`${capitalizeFirstLetter(
                    userInfo?.user?.name || "Login to continue"
                  )}`}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
            data={menu_list}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      item?.onPress();
                    }}
                    style={[styles.card, commonstyles.aiRow]}
                  >
                    {item?.icon}
                    <Text style={styles.text}>{item?.title || ""}</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
            ItemSeparatorComponent={() => {
              return <Divider style={styles.lineStyle} />;
            }}
            keyExtractor={(item, index) => index?.toString()}
          />
        </View>
        <View style={styles.bottomCon}>
          <Text style={styles.h1}>App Version</Text>
          <Text style={styles.h2}>v 1.0</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.light_green,
    justifyContent: "space-between",
  },
  userInfoContainer: {
    marginVertical: HP("4"),
  },
  infoContainer: {
    marginHorizontal: HP("5"),
  },
  imgStyle: {
    width: HP("9"),
    height: HP("9"),
    borderRadius: 100,
    backgroundColor: "gray",
  },
  userNameContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  userName: {
    fontSize: size.large,
    color: colors.b1,
    width: "95%",
    marginVertical: 5,
  },
  buttonContainer: {
    width: 160,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.green,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  drawerIconContainer: {
    // marginTop: HP('2'),
    marginHorizontal: WP("4"),
    flex: 1,
    backgroundColor: colors.white,
  },

  profileImg: {
    height: "100%",
    width: "100%",
    borderRadius: 100,
  },
  card: {
    margin: 5,
    alignItems: "center",
  },
  lineStyle: {
    borderWidth: 1,
    borderColor: colors.g5,
    marginVertical: 10,
  },
  icon: { marginRight: 10, marginLeft: 10 },
  text: { color: colors.b1, marginLeft: 20 },
  bottomCon: {
    margin: 20,
  },
  h1: {
    fontSize: size.normal,
    color: colors.b1,
    fontFamily: appFonts.poppinLight,
    marginBottom: 2,
  },
  h2: {
    fontSize: size.tiny,
    color: colors.g1,
    fontFamily: appFonts.poppinLight,
    marginLeft: 5,
    letterSpacing: 1,
  },
});
