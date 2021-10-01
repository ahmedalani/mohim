import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';

import {Address, CartProduct} from '../../models';
import {Picker} from '@react-native-picker/picker';
// data
import {DataStore} from 'aws-amplify';

// componenets
import Button from '../../components/Button';
// style
import styles from './styles';

// const countries = countryList().getData();
// console.log(countries[0]);
const CheckoutScreen = ({
  checkoutProducts,
  user,
}: {
  checkoutProducts: CartProduct[];
  user: {attributes: {sub: string}} | null;
}) => {
  // picker state
  const [checkoutAddress, setCheckoutAddress] = useState<Address | undefined>(
    undefined,
  );
  // state list of user addresses
  const [addressList, setAddressList] = useState<Address[]>([]);

  // to fetch user addresses from datastore
  useEffect(() => {
    const fetchUserAddresses = async () => {
      if (!user) {
        Alert.alert('no user found');
        return;
      }
      // query the datastore for user addresses
      const userAddressList = await DataStore.query(Address, ad =>
        ad.userSub('eq', user.attributes.sub),
      );
      // set addressList state
      setAddressList(userAddressList);
    };
    fetchUserAddresses();
  }, [user]);

  const placeOrder = async () => {
    Alert.alert('Thanks for using MHM ❤️');
    console.log('place order');
  };

  const route: RouteProp<{params: {totalPrice: number}}, 'params'> = useRoute();
  const orderTotal = route.params?.totalPrice + 4.99;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'position' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}>
      <ScrollView style={styles.root}>
        {/* review order: show a brief discription of items and quantity total price + shipping? */}
        <View style={styles.orderTotal}>
          <View style={styles.orderTotalRow}>
            <Text style={styles.orderTotaltext}>
              {checkoutProducts.length} Items:
            </Text>
            <Text style={styles.orderTotaltext}>
              ${route.params?.totalPrice.toFixed(2)}
            </Text>
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
        <View>
          <Picker
            selectedValue={checkoutAddress}
            onValueChange={setCheckoutAddress}>
            {addressList.map((address, i) => (
              <Picker.Item
                key={`addressItem-${address.lable}-${i}`}
                label={`${address.city}: ${address.addressText}`}
                value={address.lable}
              />
            ))}
          </Picker>
        </View>
        {/* Button checkout order : place order to datastor then navigate to homescreen */}
        <Button text={'Place Order'} onPress={placeOrder} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CheckoutScreen;
