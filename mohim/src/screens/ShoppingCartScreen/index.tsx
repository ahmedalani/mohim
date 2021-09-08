/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Text, Alert} from 'react-native';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

// components
import CartProductItem from '../../components/CartProductItem';

interface CartProduct {
  id: string;
  userSub: string;
  quantity: number;
  option?: string;
  productID: string;
  product?: {
    id: string;
    title: string;
    description?: string;
    image: string;
    images: string[];
    options?: string[];
    avgRating: number;
    ratings?: number;
    price: number;
    oldPrice?: number;
  };
}
const ShoppingCartScreen = () => {
  // State
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);
  const navigation = useNavigation();

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
          <CartProductItem
            deleteItem={() => console.log('Delete!')}
            cartItem={item}
          />
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
