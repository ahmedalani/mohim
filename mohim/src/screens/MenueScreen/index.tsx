/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';
import Button from '../../components/Button';

const MenuScreen = () => {
  const onLogout = async () => {
    await Auth.signOut();
  };
  return (
    <SafeAreaView>
      <Button
        text="Sign out"
        onPress={onLogout}
        containerStyles={{
          backgroundColor: '#52aebc',
          marginHorizontal: 5,
          marginTop: 250,
        }}
      />
    </SafeAreaView>
  );
};

export default MenuScreen;
