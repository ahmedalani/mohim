import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import CheckoutScreen from '../screens/CheckoutScreen';

// data
import {CartProduct} from '../models';

const Stack = createStackNavigator();

const ShoppingCartStack = () => {
  const [checkoutProducts, setCheckoutProducts] = useState<CartProduct[]>([]);
  // console.log('from SCStack: ', checkoutProducts);
  return (
    <Stack.Navigator>
      <Stack.Screen
        children={() => (
          <ShoppingCartScreen setCheckoutProducts={setCheckoutProducts} />
        )}
        name={'ShoppingCartScreen'}
        options={{
          title: 'Your Cart 🛒',
          headerStyle: {backgroundColor: '#52aebc'},
        }}
      />
      <Stack.Screen
        children={() => <CheckoutScreen checkoutProducts={checkoutProducts} />}
        name={'CheckoutScreen'}
        options={{
          title: 'Review & Place your Order',
          headerStyle: {backgroundColor: '#52aebc'},
          headerBackTitle: '🛒',
        }}
      />
    </Stack.Navigator>
  );
};

export default ShoppingCartStack;
