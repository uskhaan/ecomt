import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextComponent} from '../Text/TextComponent';
import {WP, appFonts, appImages, colors} from '../../utilities';

export const SquareMenuComponent = ({onPress}) => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <View style={styles.mainCon}>
      <View style={styles.row}>
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.container}
            onPress={onPress}>
            <ImageBackground
              source={appImages.fruitsImage}
              style={styles.backgroundImage}
              imageStyle={styles.image}>
              <View style={styles.overlay}>
                <TextComponent
                  size={11}
                  family={appFonts.montserratSemiBold}
                  color={colors.white}
                  text={'Beverages'}
                />
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainCon: {},
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  container: {
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.white,
    width: WP('100') / 4,
    height: WP('100') / 4,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
  },
  image: {
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: WP('4'),
  },
});

// import React from 'react';
// import {
//   ImageBackground,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import {TextComponent} from '../Text/TextComponent';
// import {WP, appFonts, appImages, colors} from '../../utilities';
// import {FlatList} from 'react-native';
// export const SquareMenuComponent = ({color1, color2, color3}) => (
//   <View style={styles.mainCon}>
//     <FlatList
//       data={[1, 2, 3, 4, 5, 6, 7, 8]}
//       numColumns={4}
//       renderItem={({item, index}) => {
//         return (
//           <View style={[styles.row]}>
//             <TouchableOpacity style={styles.container}>
//               <ImageBackground
//                 source={appImages.fruitsImage}
//                 style={styles.backgroundImage}
//                 imageStyle={styles.image}>
//                 <View style={styles.overlay}>
//                   <TextComponent
//                     size={11}
//                     family={appFonts.montserratSemiBold}
//                     color={colors.white}
//                     text={'Beverages'}
//                   />
//                 </View>
//               </ImageBackground>
//             </TouchableOpacity>
//           </View>
//         );
//       }}
//       showsVerticalScrollIndicator={false}
//       horizontal={false}
//       keyExtractor={(item, index) => index.toString()}
//       ItemSeparatorComponent={<View style={styles.itemSeparator} />}
//     />

//     {/* <View style={[styles.row]}>
//       <TouchableOpacity style={styles.container}>
//         <ImageBackground
//           source={appImages.fruitsImage}
//           style={styles.backgroundImage}
//           imageStyle={styles.image}>
//           <View style={styles.overlay}>
//             <TextComponent
//               size={11}
//               family={appFonts.montserratSemiBold}
//               color={colors.white}
//               text={'Beverages'}
//             />
//           </View>
//         </ImageBackground>
//       </TouchableOpacity>
//       <View style={styles.container}>
//         <ImageBackground
//           source={appImages.fruitsImage}
//           style={styles.backgroundImage}
//           imageStyle={styles.image}>
//           <View style={styles.overlay}>
//             <TextComponent
//               size={11}
//               family={appFonts.montserratSemiBold}
//               color={colors.white}
//               text={'Beverages'}
//             />
//           </View>
//         </ImageBackground>
//       </View>
//       <View style={styles.container}>
//         <ImageBackground
//           source={appImages.fruitsImage}
//           style={styles.backgroundImage}
//           imageStyle={styles.image}>
//           <View style={styles.overlay}>
//             <TextComponent
//               size={11}
//               family={appFonts.montserratSemiBold}
//               color={colors.white}
//               text={'Beverages'}
//             />
//           </View>
//         </ImageBackground>
//       </View>
//       <View style={styles.container}>
//         <ImageBackground
//           source={appImages.fruitsImage}
//           style={styles.backgroundImage}
//           imageStyle={styles.image}>
//           <View style={styles.overlay}>
//             <TextComponent
//               size={11}
//               family={appFonts.montserratSemiBold}
//               color={colors.white}
//               text={'Beverages'}
//             />
//           </View>
//         </ImageBackground>
//       </View>
//     </View>
//     <View style={[styles.row]}>
//       <View style={styles.container}>
//         <ImageBackground
//           source={appImages.fruitsImage}
//           style={styles.backgroundImage}
//           imageStyle={styles.image}>
//           <View style={styles.overlay}>
//             <TextComponent
//               size={11}
//               family={appFonts.montserratSemiBold}
//               color={colors.white}
//               text={'Beverages'}
//             />
//           </View>
//         </ImageBackground>
//       </View>
//       <View style={styles.container}>
//         <ImageBackground
//           source={appImages.fruitsImage}
//           style={styles.backgroundImage}
//           imageStyle={styles.image}>
//           <View style={styles.overlay}>
//             <TextComponent
//               size={11}
//               family={appFonts.montserratSemiBold}
//               color={colors.white}
//               text={'Beverages'}
//             />
//           </View>
//         </ImageBackground>
//       </View>
//       <View style={styles.container}>
//         <ImageBackground
//           source={appImages.fruitsImage}
//           style={styles.backgroundImage}
//           imageStyle={styles.image}>
//           <View style={styles.overlay}>
//             <TextComponent
//               size={11}
//               family={appFonts.montserratSemiBold}
//               color={colors.white}
//               text={'Beverages'}
//             />
//           </View>
//         </ImageBackground>
//       </View>
//       <View style={styles.container}>
//         <ImageBackground
//           source={appImages.fruitsImage}
//           style={styles.backgroundImage}
//           imageStyle={styles.image}>
//           <View style={styles.overlay}>
//             <TextComponent
//               size={11}
//               family={appFonts.montserratSemiBold}
//               color={colors.white}
//               text={'Beverages'}
//             />
//           </View>
//         </ImageBackground>
//       </View>
//     </View> */}
//   </View>
// );
// const styles = StyleSheet.create({
//   mainCon: {},
//   row: {
//     flexDirection: 'row',
//     flex: 1,
//   },

//   container: {
//     overflow: 'hidden',
//     borderWidth: 1,
//     borderColor: colors.white,
//     width: WP('100') / 4,
//     height: WP('100') / 4,
//   },
//   backgroundImage: {
//     height: '100%',
//     width: '100%',
//   },
//   image: {
//     resizeMode: 'cover',
//   },
//   overlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: WP('4'),
//   },
// });
