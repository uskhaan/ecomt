import React, {useState} from 'react';
import {KeyboardAvoidingView, Platform, View} from 'react-native';
import {
  AddressCard,
  AppHeader,
  BotTabCard,
  CreditCardComponent,
  PayOptionsComponent,
  PriceCard,
} from '../../../../components';
import {WP, colors, commonstyles, spacing} from '../../../../utilities';
import styles from './styles';
import {ScrollView} from 'react-native';

const PaymentOption = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = selectedValue => {
    setSelectedOption(selectedValue.value);
  };
  return (
    <View style={commonstyles.main}>
      <AppHeader title={'Payment Option'} noAddress={true} />

      <KeyboardAvoidingView
        behavior={Platform.OS == 'android' ? null : 'padding'}
        style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={spacing.pb10}
          showsVerticalScrollIndicator={false}
          style={[commonstyles.main]}>
          <CreditCardComponent mT={WP('4')} />

          <View style={styles.optionsCon}>
            {[
              {label: 'Debit / Credit Card', value: 'card'},
              {label: 'Cash on Delivery', value: 'cod'},
            ].map((option, index) => (
              <PayOptionsComponent
                mT={WP('4')}
                key={index}
                label={option.label}
                selected={option.value === selectedOption}
                onChange={() => handleOptionChange(option)}
              />
            ))}
          </View>

          <AddressCard changeAddress={true} mT={WP('4')} />
          <PriceCard mT={WP('4')} />
        </ScrollView>
        <View style={styles.botTabCon}>
          <BotTabCard title={'Checkout'} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default PaymentOption;
