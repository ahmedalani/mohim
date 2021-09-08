/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import QuantitySelector from '../QuantitySelector';
// style
import styles from './styles';
// icons
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface CartProductItemProps {
  deleteItem: (cartItemId: string) => void;
  cartItem: {
    id: string;
    userSub: string;
    quantity: number;
    option?: string;
    productID: string;
    product?: {
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
    };
  };
}

const CartProductItem = (props: CartProductItemProps) => {
  // props
  const {product, ...cartProductDetails} = props.cartItem;

  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Image style={styles.image} source={{uri: product?.image}} />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {product?.title}
          </Text>
          <View style={styles.ratingsContainer}>
            {/* TODO: Post MVP: half-star logic */}
            {[1, 2, 3, 4, 5].map((el, i) => (
              <FontAwesome
                style={styles.star}
                name={
                  i < Math.floor(product?.avgRating ? product.avgRating : 0)
                    ? 'star'
                    : 'star-o'
                }
                size={18}
                color={'gold'}
                key={`${product?.id}-${i}`}
              />
            ))}
            <Text>{product?.ratings}</Text>
          </View>
          <Text style={styles.price}>
            from ${product?.price.toFixed(2)}
            {product?.oldPrice && (
              <Text style={styles.oldPrice}>
                ${product?.oldPrice.toFixed(2)}
              </Text>
            )}
          </Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <QuantitySelector
          quantity={cartProductDetails.quantity}
          setQuantity={() => console.log('setQuantity!')}
        />
        <Pressable
          onPress={() => props.deleteItem(props.cartItem.id)}
          style={{marginRight: 15}}>
          <AntDesign name="delete" color={'red'} size={25} />
        </Pressable>
      </View>
    </View>
  );
};

export default CartProductItem;
