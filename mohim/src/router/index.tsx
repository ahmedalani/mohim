import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNav from './bottomTabNav';
import SignInScreen from '../screens/SignInScreen';
const Root = createStackNavigator();

const Router = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={{headerShown: false}}>
        {isSignedIn ? (
          <Root.Screen name={'HomeTabs'}>
            {() => <BottomTabNav setIsSignedIn={setIsSignedIn} />}
          </Root.Screen>
        ) : (
          <Root.Screen name={'signInScreen'}>
            {() => <SignInScreen setIsSignedIn={setIsSignedIn} />}
          </Root.Screen>
        )}
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default Router;
