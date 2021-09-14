import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  orderTotal: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 5,
    flexDirection: 'column',
  },
  orderTotalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  orderTotaltext: {
    fontSize: 16,
    fontFamily: 'helvetica',
  },
  orderTotalT: {
    fontFamily: 'helvetica',
    fontWeight: 'bold',
    fontSize: 20,
  },
  orderTotalN: {
    fontFamily: 'helvetica',
    color: '#f15d3c',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default styles;
