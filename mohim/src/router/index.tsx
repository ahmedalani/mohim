import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNav from './bottomTabNav';
const Root = createStackNavigator();

const Router = ({
  user,
}: {
  user: {
    attributes: {username: string; phonenumber: string; email: string};
  } | null;
}) => {
  console.log('user from router: ', user?.attributes.email);
  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={{headerShown: false}}>
        <Root.Screen name={'HomeTabs'}>
          {() => <BottomTabNav user={user} />}
        </Root.Screen>
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default Router;
