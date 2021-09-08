import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';

interface ButtonProps {
  text: string;
  onPress: () => void;
  containerStyles?: object;
}
const Button = (props: ButtonProps) => {
  const {text, onPress, containerStyles} = props;

  return (
    <Pressable style={[styles.root, containerStyles]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#52aebc',
    marginVertical: 10,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;
