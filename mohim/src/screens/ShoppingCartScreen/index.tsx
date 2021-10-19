/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useState, Dispatch, SetStateAction} from 'react';
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
      and: [{cartID: {eq: userCart.id}}, {trash: {ne: true}}],
    };
    await API.graphql({
      query: queries.listCartProducts,
      variables: {filter: filter},
    })
      .then((res: any) => {
        setCartProducts(res.data.listCartProducts.items);
        console.log('shoppingCartScreen cps: res', res.data.listCartProducts.items);
      })
      .catch((err: any) =>
        console.log('shoppingCartScreen couldnt query cartproducts: ', err),
      );
  };
  // useEffect(() => {
  //   console.log('how many times we fetching the cart: ');
  //   fetchCartProdutcs();
  // }, [user, userCart]);

  // fetch data on screen focus: using it so when we navigate to this screen with new product we fetch for it to see it
  useFocusEffect(
    useCallback(() => {
      console.log('fetching data on focus!!');
      fetchCartProdutcs();
    }, [user, userCart]),
  );

  // delete a cart item (product)
  const deleteCartItem = async (id, version) => {
    // change product {trash: true} for deleted product then delete from db
    const itemToUpdate = {
      id,
      trash: true,
      _version: version,
    };
    await API.graphql({
      query: mutations.updateCartProduct,
      variables: {input: itemToUpdate},
    })
      .then((res: any) => {
        const cpDetails = {
          id: res.data.updateCartProduct.id,
          _version: res.data.updateCartProduct._version,
        };
        API.graphql({
          query: mutations.deleteCartProduct,
          variables: {input: cpDetails},
        });
      })
      .then(() => {
        fetchCartProdutcs();
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
