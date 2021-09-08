import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

interface QuantitySelectorProps {
  quantity: number;
  setQuantity: (p: number) => void;
}

const QuantitySelector = (props: QuantitySelectorProps) => {
  const {quantity, setQuantity} = props;

  const onMinus = () => {
    setQuantity(Math.max(0, quantity - 1));
  };
  const onPlus = () => {
    setQuantity(quantity + 1);
  };

  return (
    <View style={styles.root}>
      <Pressable style={styles.button} onPress={onMinus}>
        <Text style={styles.buttonText}>-</Text>
      </Pressable>
      <Text style={styles.quantity}>{quantity}</Text>
      <Pressable style={styles.button} onPress={onPlus}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'black',
    width: 100,
  },
  button: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#52aebc',
  },
  buttonText: {
    fontSize: 18,
  },
  quantity: {
    color: 'black',
  },
});

export default QuantitySelector;
