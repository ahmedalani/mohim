import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    backgroundColor: 'white',
    marginVertical: 3,
  },
  rootH: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    backgroundColor: 'white',
    marginVertical: 3,
    marginHorizontal: 3,
  },
  image: {
    flex: 2,
    height: 150,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  imageH: {
    flex: 3,
    height: 150,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  rightContainer: {
    flex: 3,
    padding: 10,
  },
  rightContainerH: {
    flex: 2,
    padding: 10,
  },
  title: {
    fontSize: 18,
  },
  titleH: {
    fontSize: 18,
    width: 140,
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
});

export default styles;
