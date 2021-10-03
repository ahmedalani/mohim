import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';

import {Address, CartProduct} from '../../models';
import {Picker} from '@react-native-picker/picker';
// data
import {API} from 'aws-amplify';
import * as queries from '../../graphql/queries';
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

  const [deliveryNote, setDeliveryNote] = useState('');
  // to fetch user addresses from datastore
  useEffect(() => {
    const fetchUserAddresses = async () => {
      if (!user) {
        Alert.alert('no user found');
        return;
      }
      const filter = {
        and: [{userSub: {eq: user.attributes.sub}}, {trash: {eq: false}}],
      };
      // query the user addresses from db
      const userAddressList = await API.graphql({
        query: queries.listAddresses,
        variables: {filter},
      });
      // set addressList state
      setAddressList(userAddressList.data.listAddresses.items);
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
                key={`addressItem-${address.label}-${i}`}
                label={`${address.city}: ${address.addressText}`}
                value={address.label}
              />
            ))}
          </Picker>
        </View>
        <TextInput
          style={styles.deliveryNote}
          placeholder={'delivery Note ...'}
          value={deliveryNote}
          onChangeText={setDeliveryNote}
        />
        {/* Button checkout order : place order to datastor then navigate to homescreen */}
        <Button text={'Place Order'} onPress={placeOrder} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CheckoutScreen;
