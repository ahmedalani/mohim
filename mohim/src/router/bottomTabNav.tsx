import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';

// Screen Stacks
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import ShoppingCartStack from './ShoppingCartStack';

// screens
import MenuScreen from '../screens/MenueScreen';

const Tab = createBottomTabNavigator();

const BottomTabNav = ({
  user,
}: {
  user: {
    attributes: {
      username: string;
      phonenumber: string;
      email: string;
      sub: string;
    };
  } | null;
}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarInactiveTintColor: 'black',
        tabBarActiveTintColor: '#52aebc',
        headerShown: false,
      }}>
      <Tab.Screen
        children={() => <HomeStack user={user} />}
        name={'HomeStack'}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        children={() => <ProfileStack user={user} />}
        name={'profile'}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="user" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        component={ShoppingCartStack}
        name={'shoppingCartStack'}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="shopping-cart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        component={MenuScreen}
        name={'more'}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="menu" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
