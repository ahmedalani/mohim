import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  SectionList,
  Text,
  View,
} from 'react-native';

// Data
import {API, graphqlOperation} from 'aws-amplify';
import {GraphQLResult} from '@aws-amplify/api';
import {ListProductsQuery} from '../../API';
import {DataStore} from 'aws-amplify';
import {Product, Category} from '../../models';
import * as queries from '../../graphql/queries';

// componenets
import ProductItem from '../../components/ProductItem';

const HomeScreen = ({searchValue}: {searchValue: string}) => {
  console.log('searchValue: ', searchValue);
  // state
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // setProducts([]);
    const createProduct = async () => {
      const allProducts = (await API.graphql(
        graphqlOperation(queries.listProducts),
      )) as GraphQLResult<ListProductsQuery>;
      console.log('query results: ', allProducts?.data?.listProducts?.items);
      setProducts(allProducts?.data?.listProducts?.items);
      // create category
      // await DataStore.save(
      //   new Category({
      //     title: 'General1',
      //     description: 'this category for errything testing',
      //     image:
      //       'https://i.picsum.photos/id/366/500/500.jpg?hmac=3FtB6nxy3ATkMs4gGDZs80_JrjH8CqVrN63TR9ZtmTo',
      //   }),
      // ).then(res => console.log('create category:', res));
      // const gen2 = await DataStore.query(Category).then(res => {
      //   console.log('homescreen query Category ', res);
      //   return res[0];
      // });
      // await DataStore.save(
      //   new Product({
      //     title: 'Product 1 ForGen2',
      //     description: 'This product 1 is for Gen Two Category',
      //     image:
      //       'https://i.picsum.photos/id/1070/500/500.jpg?hmac=fFiEzBh4MVKg9RRd9A3Rdsbvza9QeuqcnNdsKHJzo-8',
      //     images: [
      //       'https://i.picsum.photos/id/1070/500/500.jpg?hmac=fFiEzBh4MVKg9RRd9A3Rdsbvza9QeuqcnNdsKHJzo-8',
      //       'https://i.picsum.photos/id/392/500/500.jpg?hmac=IDJaWS3UnWgbQkqcGiJloXGZ6AqkAVk8O_ogApmWcIg',
      //       'https://i.picsum.photos/id/366/500/500.jpg?hmac=3FtB6nxy3ATkMs4gGDZs80_JrjH8CqVrN63TR9ZtmTo',
      //     ],
      //     sizes: ['small', 'large'],
      //     colors: ['red', 'blue'],
      //     weights: [50, 100],
      //     model: ['c300'],
      //     avgRating: 3.2,
      //     ratings: 4500,
      //     price: 10.99,
      //     oldPrice: 20.99,
      //     categoryID: gen2.id,
      //     category: gen2,
      //   }),
      // );
      // await DataStore.query(Product).then(res => {
      //   console.log('res Product homescreen', res);
      //   setProducts(res);
      // });
    };
    createProduct();
  }, []);
  // DataStore.clear();
  // DataStore.stop();
  // DataStore.start();

  const SECTIONS = [
    {title: 'Sponsored', horizontal: true, data: products},
    {title: 'Results', horizontal: false, data: products},
    {title: 'Related Items', horizontal: true, data: products},
    {title: 'more-Results', horizontal: false, data: products},
    {title: 'more-Related Items', horizontal: true, data: products},
  ];
  // console.log('yo homescreen', SECTIONS[0].data);
  return (
    <SafeAreaView style={styles.page}>
      <SectionList
        sections={SECTIONS}
        keyExtractor={(item, index) => item.id + index}
        renderSectionHeader={({section}) => (
          <View>
            <Text style={styles.header}>{section.title}</Text>
            {section.horizontal && (
              <FlatList
                data={section.data}
                renderItem={({item}) => (
                  <ProductItem item={item} horizon={true} />
                )}
                showsHorizontalScrollIndicator={false}
                horizontal
              />
            )}
          </View>
        )}
        renderItem={({item, section}) => {
          if (section.horizontal) {
            return null;
          }
          return <ProductItem item={item} horizon={false} />;
        }}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
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
