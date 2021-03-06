import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    backgroundColor: 'white',
    marginVertical: 3,
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    flex: 2,
    height: 150,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  rightContainer: {
    flex: 3,
    padding: 10,
  },
  title: {
    fontSize: 18,
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  star: {
    margin: 2,
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
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 25,
    marginVertical: 5,
  },
});

export default styles;
