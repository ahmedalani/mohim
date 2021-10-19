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

import Amplify, {Auth, Hub, API, DataStore} from 'aws-amplify';
import config from './src/aws-exports';
import {Cart} from './src/models';
import * as queries from './src/graphql/queries';
import * as mutations from './src/graphql/mutations';

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
  const [userCart, setUserCart] = useState<Cart | undefined>(undefined);

  // fetching user data on sign in then setUser state
  const fetchUser = async () => {
    return await Auth.currentAuthenticatedUser()
      .then(res => {
        return res;
      })
      .catch(err => console.warn('err @ app.tsx fetchUser: ', err));
  };
  // creates a new cart for user
  const createNewCart = async (userSub: string) => {
    const cartDetails = {
      userSub: userSub,
      trash: false,
    };
    const nc = await API.graphql({
      query: mutations.createCart,
      variables: {input: cartDetails},
    });
    console.log('App.tsx created new cart res: ', nc.data?.createCart);
    setUserCart(nc.data?.createCart);
  };

  useEffect(() => {
    // look up user cart and if none found call createNewCart()
    const fetchUserCart = async (userSub: string) => {
      console.log('how many times fetchUserCart getting called?');
      if (!userSub) {
        console.log('app: no user found, can not fetch cart');
        return;
      }
      // handling bug: this function gets called twice and end up creating 2 carts for new users; it didn't fix the issue (issue is fixed regardless) but I kept cause why not, just as an extra measure
      if (userCart) {
        console.log(
          'app.tsx trying to fetchUserCart but userCart state is not undefined',
          userCart,
        );
        return;
      }
      const filter = {
        and: [{userSub: {eq: userSub}}, {trash: {ne: true}}],
      };
      // query all carts from db
      await API.graphql({query: queries.listCarts, variables: {filter}})
        .then((res: any) => {
          // check if response valid then search through it for user cart and set the cart state
          if (res.data?.listCarts?.items[0]?.userSub) {
            console.log('App.tsx found cart!!!!!', res.data?.listCarts?.items);
            setUserCart(res.data?.listCarts?.items[0]);
          } else {
            // create new cart for user if none found
            console.log('@ app Calling createNewCart!!!');
            createNewCart(userSub);
          }
        })
        .catch((err: any) => console.log('app.tsx query listCarts error', err));
    };
    // hub to listen for user login/out
    Hub.listen('auth', ({payload: {event, data}}) => {
      switch (event) {
        case 'signIn' || 'cognitoHostedUI':
          // case 'cognitoHostedUI':
          fetchUser().then(userData => {
            // set user
            setUser(userData);
            // look up user cart then set the state for the cart
            fetchUserCart(userData.attributes.sub);
          });
          break;
        case 'signOut':
          setUser(null);
          setUserCart(undefined);
          // TODO: clear *local* datastore
          DataStore.clear()
            .then(res => console.log('cleared DataStore, ', res))
            .catch(err => console.log('Err @ app clear dataStore', err));
          break;
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          console.log('Sign in failure from app.tsx Hub  🔥 ', data);
          break;
      }
    });
    return () => {};
  }, []);

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
        <Router user={user} userCart={userCart} />
      </SafeAreaProvider>
    </View>
  );
};

export default App;
