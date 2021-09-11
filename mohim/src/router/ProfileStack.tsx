import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import ProfileScreen from '../screens/ProfileScreen';
import AccountInfoScreen from '../screens/AccountInfoScreen';
import LanguageScreen from '../screens/LanguageScreen';
import AccountAddressScreen from '../screens/AccountAddressScreen';

const Stack = createStackNavigator();

const ProfileStack = ({
  user,
  fetchUser,
}: {
  user: {} | null;
  fetchUser: () => void;
}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        children={() => <ProfileScreen user={user} fetchUser={fetchUser} />}
        name={'ProfileScreen'}
        options={{
          title: 'Your Profile 👤',
          headerStyle: {backgroundColor: '#52aebc'},
        }}
      />
      <Stack.Screen
        component={AccountInfoScreen}
        name={'AccountInfoScreen'}
        options={{
          title: 'Your Profile Info 👤',
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
      <Stack.Screen
        component={AccountAddressScreen}
        name={'AccountAddressScreen'}
        options={{
          title: 'My Addresses 👤',
          headerStyle: {backgroundColor: '#52aebc'},
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
