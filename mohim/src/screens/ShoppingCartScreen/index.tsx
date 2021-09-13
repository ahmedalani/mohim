/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Text, Alert, ActivityIndicator} from 'react-native';
import Button from '../../components/Button';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

// components
import CartProductItem from '../../components/CartProductItem';

// Data
import {DataStore, Auth} from 'aws-amplify';
import {Product, CartProduct} from '../../models';

const ShoppingCartScreen = () => {
  // State
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);
  const navigation = useNavigation();

  const fetchCartProdutcs = async () => {
    // get user data
    const userData = await Auth.currentAuthenticatedUser();
    // to query only my cart items
    // TODO: query only my NEW added items
    DataStore.query(CartProduct, cp =>
      cp.userSub('eq', userData.attributes.sub),
    ).then(setCartProducts);
  };
  useEffect(() => {
    // console.log('how many times we fetching the cart: ');
    fetchCartProdutcs();
  }, []);
  // fetch data on screen focus: using it so when we navigate to this screen with new product we fetch for it to see it
  useFocusEffect(
    useCallback(() => {
      console.log('fetching data on focus!!');
      fetchCartProdutcs();
    }, []),
  );

  // fetching products for user cart (cartproduct)
  // because the link between cartproduct and actual product is based on ID
  // and when I query I only get the productID not the actual product :/
  useEffect(() => {
    if (cartProducts.filter(cp => !cp.product).length === 0) {
      return;
    }
    const fetchProdutcs = async () => {
      // query all products that are used in the cart
      const products = await Promise.all(
        cartProducts.map(cartProduct =>
          DataStore.query(Product, cartProduct.productID),
        ),
      );
      // assign the products to the cart items
      setCartProducts(currentCartProducts =>
        currentCartProducts.map(cartProduct => ({
          ...cartProduct,
          product: products.find(p => p?.id === cartProduct.productID),
        })),
      );
    };
    fetchProdutcs();
  }, [cartProducts]);

  // subscription with database for quantity update
  useEffect(() => {
    const subscriptions = cartProducts.map(cp =>
      DataStore.observe(CartProduct, cp.id).subscribe(msg => {
        // why is this not printing??!!!
        if (msg.opType === 'UPDATE') {
          setCartProducts(curCartProducts =>
            curCartProducts.map(cpq => {
              if (cpq.id !== msg.element.id) {
                return cpq;
              }
              return {
                ...cpq,
                ...msg.element,
              };
            }),
          );
        }
        // console.log(msg.model, msg.opType, msg.element);
        // I think: if onType === delete then fetchCartProducts
      }),
    );

    return () => {
      subscriptions.forEach(sub => sub.unsubscribe());
    };
  }, [cartProducts]);

  // delete a cart item (product)
  const deleteCartItem = async (id: string) => {
    await DataStore.delete(CartProduct, cp => cp.id('eq', id)).then(() =>
      fetchCartProdutcs(),
    );
  };

  // calculating total price
  const totalPrice = cartProducts.reduce(
    (summedPrice, cp) => summedPrice + (cp?.product?.price || 0) * cp.quantity,
    0,
  );

  const onCheckout = () => {
    if (cartProducts.length === 0) {
      Alert.alert('Your cart is empty Add items to proceed');
      return;
    }
    navigation.navigate('AddressScreen');
  };

  // if cart isn't empty but we doing some fetching or calculating the render this
  if (cartProducts.filter(cp => !cp.product).length !== 0) {
    return <ActivityIndicator />;
  }
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
