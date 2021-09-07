import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

// componenets
import ProductItem from '../../components/ProductItem';

const HomeScreen = () => {
  // dummyData
  const data = {
    id: '1',
    title: 'product title',
    image:
      'https://mhmt3bucket93316-dev.s3.eu-central-1.amazonaws.com/public/productImages/kent-toot2.jpeg',
    avgRating: 3,
    ratings: 5,
    price: 10.95,
    oldPrice: 20.95,
  };

  return (
    <SafeAreaView style={styles.page}>
      <ProductItem item={data} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 10,
  },
  header: {},
});

export default HomeScreen;
