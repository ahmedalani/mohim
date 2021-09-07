import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';

// Screen Stacks
import HomeStack from './HomeStack';
// import ShoppingCartStack from './ShoppingCartStack';
// import ProfileStack from './ProfileStack';

// screens
// import MenuScreen from '../screens/MenuScreen';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarInactiveTintColor: 'black',
        tabBarActiveTintColor: '#52aebc',
        headerShown: false,
      }}>
      <Tab.Screen
        component={HomeStack}
        name={'HomeStack'}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        component={HomeStack}
        name={'profile'}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="user" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        component={HomeStack}
        name={'shoppingCartStack'}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="shopping-cart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        component={HomeStack}
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
