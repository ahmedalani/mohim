/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
// components
import QuantitySelector from '../QuantitySelector';
// style
import styles from './styles';
// icons
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
// Data
import {API} from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import {CartProduct} from '../../models';

interface CartProductItemProps {
  deleteItem: (cartItemId: string) => void;
  cartItem: CartProduct;
}

const CartProductItem = (props: CartProductItemProps) => {
  // props
  const {product, ...cartProductDetails} = props.cartItem;

  // state
  const [localQuantity, setLocalQuantity] = useState(
    cartProductDetails.selectedQuantity,
  );
  const [cpVersion, setCpVersion] = useState(props.cartItem._version);

  // quantity update with data store
  const updateQuantity = async (newQuantity: number) => {
    const itemToUpdate = {
      id: cartProductDetails.id,
      selectedQuantity: newQuantity,
      _version: cpVersion,
    };
    await API.graphql({
      query: mutations.updateCartProduct,
      variables: {input: itemToUpdate},
    })
      .then((res: any) => {
        console.log('cartProductItem: update Quantity res:', res);
        setLocalQuantity(res.data.updateCartProduct.selectedQuantity);
        setCpVersion(res.data.updateCartProduct._version);
      })
      .catch((err: any) =>
        console.log('cartProductItem: update quantity failed: ', err),
      );
  };

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
          quantity={localQuantity}
          setQuantity={updateQuantity}
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
