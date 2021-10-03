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
import {useRoute, RouteProp, useNavigation} from '@react-navigation/native';

import {Address, CartProduct, Cart} from '../../models';
import {Picker} from '@react-native-picker/picker';
// data
import {API} from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
// componenets
import Button from '../../components/Button';
// style
import styles from './styles';

// const countries = countryList().getData();
// console.log(countries[0]);
const CheckoutScreen = ({
  checkoutProducts,
  user,
  userCart,
}: {
  checkoutProducts: CartProduct[];
  user: {attributes: {sub: string}} | null;
  userCart: Cart | undefined;
}) => {
  // picker state
  const [checkoutAddress, setCheckoutAddress] = useState<String | undefined>(
    undefined,
  );
  const [paymentMethod, setPaymentMethod] = useState('');
  // state list of user addresses
  const [addressList, setAddressList] = useState<Address[]>([]);
  // delivery notes
  const [deliveryNotes, setDeliveryNotes] = useState('');

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

  const route: RouteProp<{params: {totalPrice: number}}, 'params'> = useRoute();
  const orderTotal = route.params?.totalPrice + 4.99;

  const navigation = useNavigation();

  // post new order to db and empty user cart if succussful
  const placeOrder = async () => {
    Alert.alert('Thanks for using MHM ❤️');
    // create new order
    const adres = addressList.find(ad => ad.label === checkoutAddress);
    const newOrder = {
      userSub: user?.attributes.sub,
      deliveryNotes,
      totalPrice: orderTotal,
      paymentMethod,
      cartID: userCart?.id,
      orderCartId: userCart?.id,
      addressID: adres?.id,
      orderAddressId: adres?.id,
      trash: false,
    };
    // post order to db
    await API.graphql({
      query: mutations.createOrder,
      variables: {input: newOrder},
    })
      .then(() => {
        // map over user cart products to remove them from cart
        checkoutProducts.map(async p => {
          const itemToUpdate = {
            id: p.id,
            trash: true,
            _version: p._version,
          };
          // update trash column value to true
          await API.graphql({
            query: mutations.updateCartProduct,
            variables: {input: itemToUpdate},
          }).then((res: any) => {
            const cpDetails = {
              id: res.data.updateCartProduct.id,
              _version: res.data.updateCartProduct._version,
            };
            // then delete item from db
            API.graphql({
              query: mutations.deleteCartProduct,
              variables: {input: cpDetails},
            });
          });
        });
      })
      .catch((err: any) =>
        console.log('Posting new order and empty user cart err: ', err),
      );

    navigation.goBack();
    navigation.navigate('HomeStack');
    console.log('place order');
  };

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
        {/* choose payment methode: for now just choose to post order to database */}
        <View>
          <Picker
            selectedValue={paymentMethod}
            onValueChange={setPaymentMethod}>
            <Picker.Item
              key={'paymentMethod-1'}
              label={'Cash On Delivery'}
              value={'CashOnDelivery'}
            />
            <Picker.Item
              key={'paymentMethod-2'}
              label={'Credit Card'}
              value={'CreditCard'}
            />
          </Picker>
        </View>
        {/* Delivery Notes */}
        <TextInput
          style={styles.deliveryNotes}
          placeholder={'delivery Note ...'}
          value={deliveryNotes}
          onChangeText={setDeliveryNotes}
        />
        {/* Button checkout order : place order to datastor then navigate to homescreen */}
        <Button text={'Place Order'} onPress={placeOrder} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CheckoutScreen;
