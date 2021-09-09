import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Auth, Hub} from 'aws-amplify';
import Button from '../../components/Button';
import styles from './styles';

const SignInScreen = ({
  setIsSignedIn,
}: {
  setIsSignedIn: (arg0: boolean) => void;
}) => {
  const fetchUser = async () => {
    const user = await Auth.currentAuthenticatedUser().catch(err =>
      console.log(err),
    );
    if (user) {
      setIsSignedIn(true);
    }
  };
  useEffect(() => {
    Hub.listen('auth', ({payload: {event, data}}) => {
      if (event === 'signIn') {
        setIsSignedIn(true);
      } else if (event === 'signOut') {
        setIsSignedIn(false);
      }
    });
    Auth.currentAuthenticatedUser()
      .then(user => console.log(user))
      .catch(() => console.log('Not signed in'));
  }, [setIsSignedIn]);
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
