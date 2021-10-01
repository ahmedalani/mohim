import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import CheckoutScreen from '../screens/CheckoutScreen';

// data
import {Cart, CartProduct} from '../models';

const Stack = createStackNavigator();

const ShoppingCartStack = ({
  user,
  userCart,
}: {
  user: {
    attributes: {sub: string};
  } | null;
  userCart: Cart | undefined;
}) => {
  console.log('shoppingCartStack, user, cart', user, userCart);
  const [checkoutProducts, setCheckoutProducts] = useState<CartProduct[]>([]);
  return (
    <Stack.Navigator>
      <Stack.Screen
        children={() => (
          <ShoppingCartScreen
            setCheckoutProducts={setCheckoutProducts}
            userCart={userCart}
            user={user}
          />
        )}
        name={'ShoppingCartScreen'}
        options={{
          title: 'Your Cart 🛒',
          headerStyle: {backgroundColor: '#52aebc'},
        }}
      />
      <Stack.Screen
        children={() => (
          <CheckoutScreen checkoutProducts={checkoutProducts} user={user} />
        )}
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
