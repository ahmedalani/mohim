import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import ProfileScreen from '../screens/ProfileScreen';
import AccountInfoScreen from '../screens/AccountInfoScreen';
import AccountAddressScreen from '../screens/AccountAddressScreen';
import AccountOrderHistoryScreen from '../screens/AccountOrderHistoryScreen';
import LanguageScreen from '../screens/LanguageScreen';

const Stack = createStackNavigator();

const ProfileStack = ({
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
    <Stack.Navigator>
      <Stack.Screen
        children={() => <ProfileScreen user={user} />}
        name={'ProfileScreen'}
        options={{
          title: 'Your Profile 👤',
          headerStyle: {backgroundColor: '#52aebc'},
        }}
      />
      <Stack.Screen
        children={() => <AccountInfoScreen user={user} />}
        name={'AccountInfoScreen'}
        options={{
          title: 'Your Profile Info 👤',
          headerStyle: {backgroundColor: '#52aebc'},
        }}
      />
      <Stack.Screen
        children={() => <AccountAddressScreen user={user} />}
        name={'AccountAddressScreen'}
        options={{
          title: 'My Addresses 👤',
          headerStyle: {backgroundColor: '#52aebc'},
        }}
      />
      <Stack.Screen
        children={() => <AccountOrderHistoryScreen user={user} />}
        name={'AccountOrderHistoryScreen'}
        options={{
          title: 'Order History',
          headerStyle: {backgroundColor: '#52aebc'},
        }}
      />
      <Stack.Screen
        component={LanguageScreen}
        name={'LanguageScreen'}
        options={{
          title: 'Choose Language 👤',
          headerStyle: {backgroundColor: '#52aebc'},
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
