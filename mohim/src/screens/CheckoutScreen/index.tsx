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
import {useRoute, RouteProp, useNavigation} from '@react-navigation/native';

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
  const route: RouteProp<{params: {totalPrice: number}}, 'params'> = useRoute();
  let orderTotal = route.params?.totalPrice + 4.99;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'position' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}>
      <ScrollView style={styles.root}>
        {/* review order: show a brief discription of items and quantity total price + shipping? */}
        <View style={styles.orderTotal}>
          <View style={styles.orderTotalRow}>
            <Text style={styles.orderTotaltext}>{checkoutProducts.length} Items:</Text>
            <Text style={styles.orderTotaltext}>${route.params?.totalPrice.toFixed(2)}</Text>
          </View>
          <View style={styles.orderTotalRow}>
            <Text style={styles.orderTotaltext}>Shipping & handling: </Text>
            <Text style={styles.orderTotaltext}>${4.99}</Text>
          </View>
          <View style={styles.orderTotalRow}>
            <Text style={styles.orderTotalT}>Order Total:</Text>
            <Text style={styles.orderTotalN}>${orderTotal.toFixed(2)}</Text>
          </View>
        </View>
        {/* pick a delivery address from the user datastore address list */}

        {/* Button checkout order : place order to datastor after confirmation */}

        {/* return to homeScreen */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CheckoutScreen;
