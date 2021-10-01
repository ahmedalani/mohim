/* eslint-disable react-native/no-inline-styles */
import React, {
  useCallback,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Button from '../../components/Button';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

// components
import CartProductItem from '../../components/CartProductItem';

// Data
import {API, DataStore, Auth} from 'aws-amplify';
import {Product, CartProduct, Cart} from '../../models';
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

  // const fetchCartProducts = async () => {
  //   if (!user) {
  //     console.log(
  //       'ShoppingCartScreen, trying to fetchCartProducts but user not found!',
  //     );
  //     return;
  //   }
  //   const cps = await DataStore.query(CartProduct, cp =>
  //     cp.userSub('eq', user.attributes.sub),
  //   );
  //   const userCP = cps.filter(cp => cp.cart?.id === userCart?.id);
  //   console.log('ShoppingCartScreen: ', cps, userCP);
  // };
  // fetchCartProducts();
  // return;
  const fetchCartProdutcs = async () => {
    // query only my cart items
    // TODO: query only my NEW added items
    if (!user || !userCart) {
      console.log(
        'ShoppingCartScreen, trying to fetchCartProducts but user or cart not found!',
        user,
        userCart,
      );
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
        console.log('shoppingCartScreen: queried cartProducts', res.data.listCartProducts.items);
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
      console.log('shoppingCArtScreen: whaat the fuck: ', userCart);
      fetchCartProdutcs();
    }, [user]),
  );

  // fetching products for user cart (cartproduct)
  // because the link between cartproduct and actual product is based on ID
  // and when I query I only get the productID not the actual product :/
  // useEffect(() => {
  //   if (cartProducts.filter(cp => !cp.product).length === 0) {
  //     return;
  //   }
  //   const fetchProdutcs = async () => {
  //     // query all products that are used in the cart
  //     const products = await Promise.all(
  //       cartProducts.map(cartProduct =>
  //         DataStore.query(Product, cartProduct.productID),
  //       ),
  //     );
  //     // assign the products to the cart items
  //     setCartProducts(currentCartProducts =>
  //       currentCartProducts.map(cartProduct => ({
  //         ...cartProduct,
  //         product: products.find(p => p?.id === cartProduct.productID),
  //       })),
  //     );
  //   };
  //   fetchProdutcs();
  // }, [cartProducts]);

  // subscription with database for quantity update
  // useEffect(() => {
  //   const subscriptions = cartProducts.map(cp =>
  //     DataStore.observe(CartProduct, cp.id).subscribe(msg => {
  //       // why is this not printing??!!!
  //       if (msg.opType === 'UPDATE') {
  //         setCartProducts(curCartProducts =>
  //           curCartProducts.map(cpq => {
  //             if (cpq.id !== msg.element.id) {
  //               return cpq;
  //             }
  //             return {
  //               ...cpq,
  //               ...msg.element,
  //             };
  //           }),
  //         );
  //       }
  //       // console.log(msg.model, msg.opType, msg.element);
  //       // I think: if onType === delete then fetchCartProducts
  //     }),
  //   );

  //   return () => {
  //     subscriptions.forEach(sub => sub.unsubscribe());
  //   };
  // }, [cartProducts]);

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

  // if cart isn't empty but we doing some fetching or calculating the render this
  // if (cartProducts.filter(cp => cp.product).length !== 0) {
  //   return <ActivityIndicator />;
  // }
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
