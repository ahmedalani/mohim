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
import {API} from 'aws-amplify';
import {Product} from '../../models';
import * as queries from '../../graphql/queries';

// componenets
import ProductItem from '../../components/ProductItem';

const HomeScreen = ({
  searchValue,
  user,
}: {
  searchValue: string;
  user: {attributes: {sub: string}} | null;
}) => {
  console.log('searchValue: ', searchValue);
  // state
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    await API.graphql({
      query: queries.listProducts,
      variables: {filter: {trash: {ne: true}}, limit: 500},
    })
      .then((res: any) => {
        console.log('homeScreen query products res: ', res);
        if (res.data.listProducts.items.length > 0) {
          setProducts(res?.data?.listProducts?.items);
        }
      })
      .catch((err: any) => console.log('homeScreen query products err: ', err));
  };
  useEffect(() => {
    fetchProducts();
    return () => {};
  }, [user?.attributes.sub]);

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
