import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  SectionList,
  Text,
  View,
} from 'react-native';

// componenets
import ProductItem from '../../components/ProductItem';

// for dummy data
interface Product {
  id: string;
  title: string;
  description?: string;
  image: string;
  images: string[];
  options?: string[];
  avgRating: number;
  ratings?: number;
  price: number;
  oldPrice?: number;
}
const HomeScreen = props => {
  console.log('searchValue: ', props.searchValue);
  // dummyData
  const [data, setData] = useState<Product[]>([
    {
      id: 'init',
      title: 'product title',
      description: 'state-state-state-state-state-state-state-state',
      image:
        'https://mhmt3bucket93316-dev.s3.eu-central-1.amazonaws.com/public/productImages/kent-toot2.jpeg',
      images: [
        'https://mhmt3bucket93316-dev.s3.eu-central-1.amazonaws.com/public/productImages/kent-toot2.jpeg',
        'https://mhmt3bucket93316-dev.s3.eu-central-1.amazonaws.com/public/productImages/kent-toot2.jpeg',
        'https://mhmt3bucket93316-dev.s3.eu-central-1.amazonaws.com/public/productImages/kent-toot2.jpeg',
      ],
      avgRating: 3,
      ratings: 5,
      price: 10.95,
      oldPrice: 20.95,
    },
  ]);
  const generateData = () => {
    let result = [];
    for (let i = 0; i < 5; i++) {
      const dataObj: Product = {
        id: i.toString(),
        title:
          'product titleproduct titleproduct titleproduct titleproduct titleproduct titleproduct titleproduct title',
        description: 'adfafsadfadsfasdfasdfasdfasdfadsfaf',
        image:
          'https://mhmt3bucket93316-dev.s3.eu-central-1.amazonaws.com/public/productImages/kent-toot2.jpeg',
        images: [
          'https://mhmt3bucket93316-dev.s3.eu-central-1.amazonaws.com/public/productImages/kent-toot2.jpeg',
          'https://mhmt3bucket93316-dev.s3.eu-central-1.amazonaws.com/public/productImages/kent-toot2.jpeg',
          'https://mhmt3bucket93316-dev.s3.eu-central-1.amazonaws.com/public/productImages/kent-toot2.jpeg',
        ],
        avgRating: 3,
        ratings: 53,
        price: 10.95,
        oldPrice: 20.95,
      };
      result.push(dataObj);
    }
    setData(result);
  };
  useEffect(() => {
    generateData();
  }, []);

  const SECTIONS = [
    {title: 'Sponsored', horizontal: true, data},
    {title: 'Results', horizontal: false, data},
    {title: 'Related Items', horizontal: true, data},
    {title: 'more-Results', horizontal: false, data},
    {title: 'more-Related Items', horizontal: true, data},
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
                showsVerticalScrollIndicator={false}
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
