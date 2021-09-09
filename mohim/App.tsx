/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {
  View,
  StatusBar,
  useColorScheme,
  Linking,
  Modal,
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';
import Router from './src/router';
import InAppBrowser from 'react-native-inappbrowser-reborn';

import RNBootSplash from 'react-native-bootsplash';

import Amplify, {Auth, Hub} from 'aws-amplify';
import config from './src/aws-exports';

const urlOpener = async (url: string, redirectUrl: string) => {
  await InAppBrowser.isAvailable();
  const res = await InAppBrowser.openAuth(url, redirectUrl, {
    showTitle: false,
    enableUrlBarHiding: true,
    enableDefaultShare: false,
    ephemeralWebSession: false,
    toolbarColor: '#52aebc',
  });

  if (res.type === 'success') {
    await Linking.openURL(res.url);
  }
};

Amplify.configure({...config, oauth: {...config.oauth, urlOpener}});

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Button from './src/components/Button';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import {SignInWithAppleButton} from 'react-native-apple-authentication';
import AntDesign from 'react-native-vector-icons/AntDesign';

const App = () => {
  const [user, setUser] = useState(null);
  const [signModal, setSignModal] = useState(true);

  useEffect(() => {
    Hub.listen('auth', ({payload: {event, data}}) => {
      switch (event) {
        case 'signIn':
        case 'cognitoHostedUI':
          fetchUser().then(userData => setUser(userData));
          break;
        case 'signOut':
          setUser(null);
          break;
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          console.log('Sign in failure', data);
          break;
      }
    });

    fetchUser().then(userData => setUser(userData));
  }, []);

  const fetchUser = async () => {
    return await Auth.currentAuthenticatedUser()
      .then(res => {
        console.log('user login response ', res);
        return res;
      })
      .catch(err => console.warn('from signInScreen: ', err));
  };
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  useEffect(() => {
    const bootSplashScreen = async () => {
      await RNBootSplash.hide({fade: true});
    };
    bootSplashScreen();
  }, []);

  return (
    <View style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'dark-content' : 'light-content'} />
      <SafeAreaProvider>
        <Router user={user} />
        {user && (
          <Modal animationType="fade" transparent={true} visible={true}>
            <Pressable
              onPress={() => setSignModal(!signModal)}
              style={styles.centeredView}
            />
            <View style={styles.modalButtonContainer}>
              <GoogleSigninButton
                style={styles.googleButton}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={async () => {
                  await Auth.federatedSignIn({provider: 'Facebook'}).then(() =>
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
              <Pressable
                onPress={async () => {
                  await Auth.federatedSignIn({
                    provider: 'SignInWithApple',
                  }).then(() => fetchUser());
                  return;
                }}
                style={styles.applePress}>
                <AntDesign name="apple1" color={'black'} size={25} />
                <Text>Sign in with Apple</Text>
              </Pressable>
              <Button
                text="Launch Hosted UI"
                onPress={() => Auth.federatedSignIn()}
              />
            </View>
          </Modal>
        )}
      </SafeAreaProvider>
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: '#52aebc',
    opacity: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButtonContainer: {
    backgroundColor: '#ffffff',
    paddingHorizontal: '5%',
    paddingBottom: '60%',
    paddingTop: 5,
    alignItems: 'center',
  },
  googleButton: {
    width: 192,
    height: 48,
  },
  applePress: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  appleButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  appleBtn: {height: 44, width: 200},
});

export default App;
/*
              <View style={styles.appleButtonContainer}>
                {SignInWithAppleButton({
                  buttonStyle: styles.appleBtn,
                  callBack: async () => {
                    await Auth.federatedSignIn({provider: 'Facebook'}).then(
                      () => fetchUser(),
                    );
                  },
                  buttonText: 'Sign Up With Apple',
                })}
              </View>

*/
