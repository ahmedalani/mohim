import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNav from './bottomTabNav';
const Root = createStackNavigator();

const Router = ({
  user,
  fetchUser,
}: {
  user: {username: string; attributes: {sub: string; email: string}} | null;
  fetchUser: () => void;
}) => {
  console.log('user from router: ', user?.attributes.email);
  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={{headerShown: false}}>
        <Root.Screen name={'HomeTabs'}>
          {() => <BottomTabNav user={user} fetchUser={fetchUser} />}
        </Root.Screen>
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default Router;
