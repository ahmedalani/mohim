import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

// componenets
import ProductItem from '../../components/ProductItem';

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <ProductItem />
    </View>
  );
};

export default HomeScreen;
