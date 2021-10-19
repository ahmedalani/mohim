/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, ActivityIndicator, Alert} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {useRoute, RouteProp, useNavigation} from '@react-navigation/native';

// Data
import {API} from 'aws-amplify';
import {Product, Cart} from '../../models';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';

// Styles
import styles from './styles';
import {bluePickerStyles} from '../../shared/customPickerStyles';
// Components
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';

const ProductScreen = ({
  user,
  userCart,
}: {
  user: {
    attributes: {
      username: string;
      phonenumber: string;
      email: string;
      sub: string;
    };
  } | null;
  userCart: Cart | undefined;
}) => {
  // State
  const [product, setProduct] = useState<Product | undefined>(undefined);
  // state for options
  const [selectedModel, setSelectedModel] = useState<string | undefined>(
    undefined,
  );
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    undefined,
  );
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    undefined,
  );
  const [selectedWeight, setSelectedWeight] = useState<string | undefined>(
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
    API.graphql({query: queries.getProduct, variables: {id: route.params.id}})
      .then((res: any) => {
        setProduct(res.data.getProduct);
      })
      .catch((err: any) => console.log('productScreen query product', err));
  }, [route.params?.id]);

  // post new cartProduct item to database for user and navigate to cartScreen
  const onBuyNow = async () => {
    if (!product || !user || !userCart) {
      Alert.alert('please sign in to continue');
      return;
    }
    const cartProductDetails = {
      userSub: user.attributes.sub,
      selectedQuantity: quantity,
      selectedSize,
      selectedColor,
      selectedWeight: selectedWeight ? parseInt(selectedWeight, 10) : undefined,
      trash: false,
      productID: product.id,
      cartProductProductId: product.id,
      cartID: userCart.id,
      cartProductCartId: userCart.id,
    };
    // query to create new cartProduct: it returns the newly crerated cartProduct
    await API.graphql({
      query: mutations.createCartProduct,
      variables: {input: cartProductDetails},
    }).catch((err: any) =>
      console.log(
        'ProductScreen onBuyNow posting new cartProduct query err: ',
        err,
      ),
    );
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
      <View style={styles.optionsContainer}>
        <RNPickerSelect
          key={product.id + 'model'}
          style={bluePickerStyles}
          placeholder={{label: 'select Model ...'}}
          onValueChange={value => setSelectedModel(value)}
          items={product.model.map(option => {
            return {label: option || 'not found', value: option};
          })}
        />
        <RNPickerSelect
          key={product.id + 'sizes'}
          style={bluePickerStyles}
          placeholder={{label: 'select Size ...'}}
          onValueChange={value => setSelectedSize(value)}
          items={product.sizes.map(option => {
            return {label: option || 'not found', value: option};
          })}
        />
        <RNPickerSelect
          key={product.id + 'colors'}
          style={bluePickerStyles}
          placeholder={{label: 'select Color ...'}}
          onValueChange={value => setSelectedColor(value)}
          items={product.colors.map(option => {
            return {label: option || 'not found', value: option};
          })}
        />
        <RNPickerSelect
          key={product.id + 'weights'}
          style={bluePickerStyles}
          placeholder={{label: 'select Weights ...'}}
          onValueChange={value => setSelectedWeight(value)}
          items={product.weights.map(option => {
            // changed the weight to string so make sure to change back to number when add to cartProduct
            return {
              label: option?.toString() || 'not found',
              value: option?.toString(),
            };
          })}
        />
      </View>

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
      {/* Display Comments */}
    </ScrollView>
  );
};

export default ProductScreen;
