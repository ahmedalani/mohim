import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

interface ProductItemProps {
  item: {
    id: string;
    title: string;
    image: string;
    avgRating: number;
    ratings?: number | undefined;
    price: number;
    oldPrice?: number | undefined;
  };
}

const ProductItem = (props: ProductItemProps) => {
  // props
  const {item} = props;

  const onPress = () => {
    //navigate to product details page
    console.warn('product pressed');
  };

  return (
    <Pressable style={styles.root} onPress={onPress}>
      <Image style={styles.image} source={{uri: item.image}} />
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>
          {item.title}
        </Text>
        <View style={styles.ratingsContainer}>
          {/* TODO: Post MVP: half-star logic */}
          {[1, 2, 3, 4, 5].map((el, i) => (
            <FontAwesome
              style={styles.star}
              name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
              size={18}
              color={'#fcb249'}
              key={`${item.id}-${i}`}
            />
          ))}
          <Text>{item.ratings}</Text>
        </View>
        <Text style={styles.price}>
          from ${item.price.toFixed(2)}
          {item.oldPrice && (
            <Text style={styles.oldPrice}>${item.oldPrice.toFixed(2)}</Text>
          )}
        </Text>
      </View>
    </Pressable>
  );
};

export default ProductItem;
