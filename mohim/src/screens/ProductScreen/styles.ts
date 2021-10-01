import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    padding: 10,
    backgroundColor: 'white',
  },
  title: {},
  optionsContainer: {
    // backgroundColor: 'blue',
  },
  option: {
    // backgroundColor: 'red',
    margin: 5,
    height: 150,
    // width: 300,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 13,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
    color: '#f15d3c',
  },
  description: {
    marginVertical: 10,
    lineHeight: 20,
  },
});

export default styles;
