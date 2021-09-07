/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {View, StatusBar, useColorScheme} from 'react-native';
import Router from './src/router';

import RNBootSplash from 'react-native-bootsplash';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
const App = () => {
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
        <Router />
      </SafeAreaProvider>
    </View>
  );
};

export default App;
