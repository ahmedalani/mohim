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
import {View, StatusBar, useColorScheme, Linking} from 'react-native';
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

const App = () => {
  const [user, setUser] = useState(null);

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
      .catch(err => console.warn('from app.tsx: ', err));
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
      </SafeAreaProvider>
    </View>
  );
};

export default App;
