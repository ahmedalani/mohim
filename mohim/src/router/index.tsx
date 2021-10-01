import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNav from './bottomTabNav';
import {Cart} from '../models';
const Root = createStackNavigator();

const Router = ({
  user,
  userCart,
}: {
  user: {
    attributes: {
      username: string;
      phonenumber: string;
      email: string;
      sub: string;
    };
  } | null;
  userCart: Cart | undefined;
}) => {
  console.log('user from router: ', user?.attributes.email);
  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={{headerShown: false}}>
        <Root.Screen name={'HomeTabs'}>
          {() => <BottomTabNav user={user} userCart={userCart} />}
        </Root.Screen>
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default Router;
