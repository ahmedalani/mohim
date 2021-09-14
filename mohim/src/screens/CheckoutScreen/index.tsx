/* eslint-disable react-native/no-inline-styles */
import React, {Dispatch, SetStateAction, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {CartProduct} from '../../models';
import {Picker} from '@react-native-picker/picker';
// data
import cities from '../../data/cities';
// componenets
import Button from '../../components/Button';
// style
import styles from './styles';

// const countries = countryList().getData();
// console.log(countries[0]);
const CheckoutScreen = ({
  checkoutProducts,
}: {
  checkoutProducts: CartProduct[];
}) => {
  console.log('checkoutProducts: from checkoutScreen: ', checkoutProducts);
  // State
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'position' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}>
      <ScrollView style={styles.root}>
        {/* review order: show a brief discription of items and quantity total price + shipping? */}

        {/* pick a delivery address from the user datastore address list */}

        {/* checkout order : place order to datastor after confirmation */}

        {/* return to homeScreen */}
        <View></View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CheckoutScreen;
