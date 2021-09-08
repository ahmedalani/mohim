/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Text, ScrollView, ActivityIndicator} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useRoute, RouteProp, useNavigation} from '@react-navigation/native';

// Styles
import styles from './styles';

// Components
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';

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
const ProductScreen = () => {
  // State
  const [product, setProduct] = useState<Product | undefined>({
    id: 'init',
    title: 'product title',
    description:
      'state-state-state-state-state-state-state-statestate-state-state-state-state-state-state-statestate-state-state-state-state-state-state-statestate-state-state-state-state-state-state-statestate-state-state-state-state-state-state-statestate-state-state-state-state-state-state-statestate-state-state-state-state-state-state-statestate-state-statestate-state-state-state-state-state-state-statestate-state-state-state-state-state-state-statestate-state-state-state-state-state-state-statestate-state-state-state-state-state-state-statestate-state-state-state-state-state-state-state-state-state-state-state-state',
    image:
      'https://mhmt3bucket93316-dev.s3.eu-central-1.amazonaws.com/public/productImages/kent-toot2.jpeg',
    images: [
      'https://mhmt3bucket93316-dev.s3.eu-central-1.amazonaws.com/public/productImages/kent-toot2.jpeg',
      'https://mhmt3bucket93316-dev.s3.eu-central-1.amazonaws.com/public/productImages/kent-toot2.jpeg',
      'https://mhmt3bucket93316-dev.s3.eu-central-1.amazonaws.com/public/productImages/kent-toot2.jpeg',
    ],
    options: ['one capsule', 'two capsule'],
    avgRating: 3,
    ratings: 5,
    price: 10.95,
    oldPrice: 20.95,
  });

  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined,
  );
  const [quantity, setQuantity] = useState(1);

  const navigation = useNavigation();

  const route: RouteProp<{params: {id: string}}, 'params'> = useRoute();
  // This renders everytime you do anything in product screen, Why?
  // because the state changes when do anything on the screen which causes rerender, is that bad? 🤔
  console.log('ID in ProductScreen from ProductItem: ', route.params);

  // because selectedOption initialized with undefined
  useEffect(() => {
    if (product?.options) {
      setSelectedOption(product.options[0]);
    }
  }, [product]);

  const onBuyNow = () => {
    console.log('buyNow');
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
