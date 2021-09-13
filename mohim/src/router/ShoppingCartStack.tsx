import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import CheckoutScreen from '../screens/CheckoutScreen';

const Stack = createStackNavigator();

const ShoppingCartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ShoppingCartScreen}
        name={'ShoppingCartScreen'}
        options={{
          title: 'Your Cart 🛒',
          headerStyle: {backgroundColor: '#52aebc'},
        }}
      />
      <Stack.Screen
        component={CheckoutScreen}
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
