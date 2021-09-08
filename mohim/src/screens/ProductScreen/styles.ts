import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    padding: 10,
    backgroundColor: 'white',
  },
  title: {},
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 13,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
    color: 'red',
  },
  description: {
    marginVertical: 10,
    lineHeight: 20,
  },
});

export default styles;
