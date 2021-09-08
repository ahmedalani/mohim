import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import AddressScreen from '../screens/AddressScreen';

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
        component={AddressScreen}
        name={'AddressScreen'}
        options={{
          title: 'Deliver To',
          headerStyle: {backgroundColor: '#52aebc'},
          headerBackTitle: '🛒',
        }}
      />
    </Stack.Navigator>
  );
};

export default ShoppingCartStack;
