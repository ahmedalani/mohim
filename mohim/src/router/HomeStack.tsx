/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import {SafeAreaView, TextInput, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
// Screens
// import HomeScreen from '../screens/HomeScreen';
const Stack = createStackNavigator();

interface HeaderComponentProps {
  searchValue: string;
  setSearchValue: (arg0: string) => void;
}

const HeaderComponent = ({
  searchValue,
  setSearchValue,
}: HeaderComponentProps) => {
  return (
    <SafeAreaView style={{backgroundColor: '#52aebc'}}>
      <View
        style={{
          margin: 10,
          padding: 5,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {/* TODO: Post MVP: add search icon inside the textInput */}
        {/* TODO: Post MVP: or make it pressable to do the search 🤔 */}
        <Feather name="search" size={20} style={{flex: 1}} />
        <TextInput
          style={{height: 40, marginLeft: 10, flex: 18}}
          placeholder="search..."
          value={searchValue}
          onChangeText={setSearchValue}
        />
      </View>
    </SafeAreaView>
  );
};

const HomeStack = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <Stack.Navigator
      screenOptions={{
        header: () => (
          <HeaderComponent
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        ),
      }}>
      <Stack.Screen name={'HomeScreen'} options={{title: 'Home Page'}}>
        {() => <HomeScreen searchValue={searchValue} />}
      </Stack.Screen>
      <Stack.Screen component={ProductScreen} name={'ProductScreen'} />
    </Stack.Navigator>
  );
};

export default HomeStack;
