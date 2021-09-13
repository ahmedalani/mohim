/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Text, ScrollView, ActivityIndicator, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useRoute, RouteProp, useNavigation} from '@react-navigation/native';

// Data
import {DataStore} from 'aws-amplify';
import {Product, CartProduct} from '../../models';

// Styles
import styles from './styles';

// Components
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';

const ProductScreen = ({
  user,
}: {
  user: {
    attributes: {
      username: string;
      phonenumber: string;
      email: string;
      sub: string;
    };
  } | null;
}) => {
  // State
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined,
  );
  const [quantity, setQuantity] = useState(1);

  const navigation = useNavigation();

  const route: RouteProp<{params: {id: string}}, 'params'> = useRoute();
  // This renders everytime you do anything in product screen, Why?
  // because the state changes when do anything on the screen which causes rerender, is that bad? 🤔
  console.log('ID in ProductScreen from ProductItem: ', route.params);

  // query specific product based on id provided from home screen when pressed on ProductItem
  useEffect(() => {
    if (!route.params?.id) {
      return;
    }
    DataStore.query(Product, route.params.id).then(setProduct);
  }, [route.params?.id]);

  // because selectedOption initialized with null
  useEffect(() => {
    if (product?.options) {
      setSelectedOption(product.options[0]);
    }
  }, [product]);

  // post the product as new cartProduct item to database for user and navigate to cartScreen
  const onBuyNow = async () => {
    if (!product || !user) {
      Alert.alert('please sign in to continue');
      return;
    }
    const newCartProduct = new CartProduct({
      userSub: user.attributes.sub,
      quantity,
      option: selectedOption,
      productID: product.id,
    });
    await DataStore.save(newCartProduct);
    navigation.goBack();
    navigation.navigate('shoppingCartStack');
  };

  if (!product) {
    return <ActivityIndicator />;
  }
  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>

      {/* Image Carousel */}
      <ImageCarousel images={product.images} />

      {/* option selector */}
      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {product.options?.map((option, i) => (
          <Picker.Item
            label={option}
            value={option}
            key={`product-option-${i}`}
          />
        ))}
      </Picker>

      {/* price */}
      <Text style={styles.price}>
        from ${product.price.toFixed(2)}
        {product.oldPrice && (
          <Text style={styles.oldPrice}>${product.oldPrice.toFixed(2)}</Text>
        )}
      </Text>

      {/* Desc */}
      <Text style={styles.description}>{product.description}</Text>

      {/* Quantity Selector */}
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

      {/* Button */}
      <Button
        containerStyles={{backgroundColor: '#52aebc'}}
        text={'Add to cart'}
        onPress={() => {
          console.warn('Successfully Added to Cart');
        }}
      />
      <Button
        containerStyles={{backgroundColor: '#52aebc'}}
        text={'Buy now'}
        onPress={onBuyNow}
      />
    </ScrollView>
  );
};

export default ProductScreen;
