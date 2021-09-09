import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNav from './bottomTabNav';
import SignInScreen from '../screens/SignInScreen';
const Root = createStackNavigator();

const Router = ({user}) => {
  console.log('user from router: ', user);
  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={{headerShown: false}}>
        {user ? (
          <Root.Screen component={BottomTabNav} name={'HomeTabs'} />
        ) : (
          <Root.Screen component={SignInScreen} name={'signInScreen'} />
        )}
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default Router;
