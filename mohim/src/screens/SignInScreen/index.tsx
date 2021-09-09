import React from 'react';
import {View} from 'react-native';
import {Auth} from 'aws-amplify';
import Button from '../../components/Button';
import styles from './styles';

const SignInScreen = () => {
  const fetchUser = async () => {
    const user = await Auth.currentAuthenticatedUser().catch(err =>
      console.warn('from signInScreen: ', err),
    );
    if (user) {
      console.warn('setting state to true');
      // setIsSignedIn(true);
    }
  };
  return (
    <View style={styles.root}>
      <Button
        text="Sign in with Google"
        onPress={async () => {
          await Auth.federatedSignIn({provider: 'Google'}).then(() =>
            fetchUser(),
          );
          return;
        }}
      />
      <Button
        text="Sign in with Facebook"
        onPress={async () => {
          await Auth.federatedSignIn({provider: 'Facebook'}).then(() =>
            fetchUser(),
          );
          return;
        }}
      />
      <Button
        text="Sign in with Apple"
        onPress={async () => {
          await Auth.federatedSignIn({provider: 'SignInWithApple'}).then(() =>
            fetchUser(),
          );
          return;
        }}
      />
      <Button text="Launch Hosted UI" onPress={() => Auth.federatedSignIn()} />
    </View>
  );
};

export default SignInScreen;
