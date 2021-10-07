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
import {Product} from '../../models';
import * as queries from '../../graphql/queries';

// componenets
import ProductItem from '../../components/ProductItem';

const HomeScreen = ({searchValue}: {searchValue: string}) => {
  console.log('searchValue: ', searchValue);
  // state
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // setProducts([]);
    // this needs some work: check android
    const fetchProducts = async () => {
      const allProducts = (await API.graphql(
        graphqlOperation(queries.listProducts),
      )) as GraphQLResult<ListProductsQuery>;
      console.log('query results: ', allProducts?.data?.listProducts?.items);
      setProducts(allProducts?.data?.listProducts?.items);
    };
    fetchProducts();
  }, []);

  const SECTIONS = [
    {title: 'Sponsored', horizontal: true, data: products},
    {title: 'Results', horizontal: false, data: products},
    {title: 'Related Items', horizontal: true, data: products},
    {title: 'more-Results', horizontal: false, data: products},
    {title: 'more-Related Items', horizontal: true, data: products},
  ];

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
