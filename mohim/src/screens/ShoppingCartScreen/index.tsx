/* eslint-disable react-native/no-inline-styles */
import React, {
  useCallback,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import {View, StyleSheet, FlatList, Text, Alert} from 'react-native';
import Button from '../../components/Button';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

// components
import CartProductItem from '../../components/CartProductItem';

// Data
import {API} from 'aws-amplify';
import {CartProduct, Cart} from '../../models';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';

const ShoppingCartScreen = ({
  setCheckoutProducts,
  userCart,
  user,
}: {
  setCheckoutProducts: Dispatch<SetStateAction<CartProduct[]>>;
  userCart: Cart | undefined;
  user: {
    attributes: {sub: string};
  } | null;
}) => {
  // State
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);
  const navigation = useNavigation();

  const fetchCartProdutcs = async () => {
    // query only my cart items
    // TODO: query only my NEW added items
    if (!user || !userCart) {
      console.log(
        'ShoppingCartScreen, trying to fetchCartProducts but user or cart not found!',
        user,
        userCart,
      );
      setCartProducts([]);
      return;
    }
    const filter = {
      cartID: {eq: userCart.id},
      //after updated schema will check for trash:true
      // and: [{cartID: {eq: userCart.id}}, {trash: {ne: true}}],
    }; // HERE !!!! deleted not working check trillo
    await API.graphql({
      query: queries.listCartProducts,
      variables: {filter: filter},
    })
      .then((res: any) => {
        setCartProducts(res.data.listCartProducts.items);
      })
      .catch((err: any) =>
        console.log('shoppingCartScreen couldnt query cartproducts: ', err),
      );
  };
  useEffect(() => {
    console.log('how many times we fetching the cart: ');
    fetchCartProdutcs();
  }, [user]);
  // fetch data on screen focus: using it so when we navigate to this screen with new product we fetch for it to see it
  useFocusEffect(
    useCallback(() => {
      console.log('fetching data on focus!!');
      fetchCartProdutcs();
    }, []),
  );

  // delete a cart item (product)
  const deleteCartItem = async (id: string) => {
    // todo post updated schema change product {trash: true} for deleted product then delete from db
    const cpDetails = {
      id: id,
      // _version: 1,
    };
    await API.graphql({
      query: mutations.deleteCartProduct,
      variables: {input: cpDetails},
    })
      .then((res: any) => {
        // todo post updated schema fetchCartProducts
        console.log('shoppingCartScreen deleteCP: ', res);
      })
      .catch((err: any) =>
        console.log('shoppingCartScreen deleteCP err: ', err),
      );
  };

  // calculating total price
  const totalPrice = cartProducts.reduce(
    (summedPrice, cp) =>
      summedPrice + (cp?.product?.price || 0) * cp.selectedQuantity,
    0,
  );

  const onCheckout = () => {
    if (cartProducts.length === 0) {
      Alert.alert('Your cart is empty Add items to proceed');
      return;
    }
    setCheckoutProducts(cartProducts); // parent state
    navigation.navigate('CheckoutScreen', {totalPrice});
  };

  return (
    <View style={styles.page}>
      <View>
        <Text style={{fontSize: 18}}>
          Subtotal ({cartProducts.length} items):
          <Text style={{color: '#fcb249', fontWeight: 'bold'}}>
            {' '}
            ${totalPrice.toFixed(2)}
          </Text>
        </Text>
        <Button
          text="Checkout"
          onPress={onCheckout}
          containerStyles={{backgroundColor: '#52aebc'}}
        />
      </View>
      <FlatList
        data={cartProducts}
        renderItem={({item}) => (
          <CartProductItem deleteItem={deleteCartItem} cartItem={item} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});
export default ShoppingCartScreen;
