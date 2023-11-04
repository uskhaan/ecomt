import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import creditCardType from 'credit-card-type';
import {WP, appFonts, appImages, colors} from '../../utilities';
import {TextComponent} from '../Text/TextComponent';

export const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cvvVisible, setCvvVisible] = useState(false);
  const [cardType, setCardType] = useState('default');

  const getCardLogo = cardNumber => {
    const trimmedCardNumber = cardNumber.replace(/\s/g, '');

    if (!trimmedCardNumber) {
      return 'default';
    }

    const cardTypes = creditCardType(cardNumber);

    if (cardTypes && cardTypes.length > 0) {
      return cardTypes[0].type;
    }
    return 'default';
  };

  const handleCardNumberChange = text => {
    setCardNumber(text);
    const cardLogo = getCardLogo(text);
    setCardType(cardLogo);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.cardBackground}
        source={appImages.cardBackgroundImage}
        resizeMode="cover"
        borderRadius={15}>
        <View style={styles.cardLogoContainer}>
          <View>
            <TextComponent
              size={14}
              family={appFonts.montserratRegular}
              color={colors.theme_color}
              text={'Holder name'}
            />
            <TextComponent
              size={15}
              family={appFonts.montserratRegular}
              color={colors.white}
              text={'Ecomt Team'}
              mT={2}
            />
          </View>

          {cardType === 'mastercard' && (
            <Image style={styles.cardLogo} source={appImages.masterCardImage} />
          )}
          {cardType === 'visa' && (
            <Image style={styles.cardLogo} source={appImages.visaCardImage} />
          )}
        </View>
        <View>
          <TextComponent
            size={14}
            family={appFonts.montserratRegular}
            color={colors.theme_color}
            text={'Card number'}
          />
          <TextComponent
            size={20}
            family={appFonts.montserratRegular}
            color={colors.white}
            text={'5501 22** **** 4487'}
            mT={2}
          />
        </View>

        <View style={styles.cardLogoContainer}>
          <View>
            <TextComponent
              size={14}
              family={appFonts.montserratRegular}
              color={colors.theme_color}
              text={'Exp. Date'}
            />
            <TextComponent
              size={14}
              family={appFonts.montserratRegular}
              color={colors.white}
              text={'16/19'}
              mT={2}
            />
          </View>
          <View>
            <TextComponent
              size={14}
              family={appFonts.montserratRegular}
              color={colors.theme_color}
              text={'CVC'}
            />
            <TextComponent
              size={14}
              family={appFonts.montserratRegular}
              color={colors.white}
              text={'111'}
              mT={2}
            />
          </View>
        </View>
      </ImageBackground>
      <TextInput
        style={styles.input}
        placeholder="Card Number"
        value={cardNumber}
        onChangeText={handleCardNumberChange}
        keyboardType="numeric"
        maxLength={19} // Allow for spaces after every 4 digits
      />
      <TextInput
        style={styles.input}
        placeholder="Card Holder"
        value={cardHolder}
        onChangeText={text => setCardHolder(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Expiry Date (MM/YY)"
        value={expiryDate}
        onChangeText={text => setExpiryDate(text)}
        keyboardType="numeric"
        maxLength={5}
      />
      <TouchableOpacity onPress={() => setCvvVisible(!cvvVisible)}>
        <Text>Show CVV</Text>
      </TouchableOpacity>
      {cvvVisible && (
        <TextInput
          style={styles.input}
          placeholder="CVV"
          value={cvv}
          onChangeText={text => setCvv(text)}
          keyboardType="numeric"
          maxLength={4}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardBackground: {
    // width: WP('80'),
    height: WP('50'),
    paddingHorizontal: WP('4'),
    paddingVertical: WP('6'),
    justifyContent: 'space-between',
  },
  cardLogoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardLogo: {
    width: 65,
    height: 40,
    resizeMode: 'contain',
  },
  cardNumber: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 8,
  },
  cardHolder: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 8,
  },
  expiryDate: {
    fontSize: 16,
    color: '#fff',
  },
  cvv: {
    fontSize: 16,
    color: '#fff',
    marginTop: 8,
  },
  input: {
    marginBottom: 16,
    height: 40,
    paddingHorizontal: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
  },
});
