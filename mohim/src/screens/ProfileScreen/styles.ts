import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleContainer: {
    backgroundColor: '#e6e6e6',
  },
  actionsContainer: {
    borderColor: 'red',
    padding: 5,
  },
  action: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
  },
  actionIcon: {
    flex: 1,
  },
  title: {
    flex: 10,
    fontFamily: 'helvetica',
    fontSize: 18,
    color: '#4f4c4c',
    marginLeft: 8,
    paddingTop: 3,
  },
  actionArrow: {
    flex: 1,
  },

  text: {
    fontFamily: 'HelveticaNeue',
    color: '#52575D',
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  profileImage: {
    height: 200,
    width: 200,
    borderRadius: 100,
    overflow: 'hidden',
  },
  titleBar: {
    marginVertical: 18,
    marginHorizontal: 16,
    fontFamily: 'helvetica',
    fontSize: 20,
    color: '#4f4c4c',
  },
  detailsContainer: {
    flex: 1,
  },
  username: {
    color: 'grey',
    fontSize: 22,
    fontWeight: 'bold',
    paddingVertical: 8,
    textAlign: 'center',
  },
  fullName: {
    color: 'grey',
    fontSize: 22,
    fontWeight: 'bold',
    padding: 8,
    textAlign: 'left',
  },
  phoneNumber: {
    color: 'grey',
    fontSize: 22,
    fontWeight: 'bold',
    paddingVertical: 8,
    textAlign: 'left',
  },
  email: {
    color: 'grey',
    fontSize: 22,
    fontWeight: 'bold',
    paddingVertical: 8,
    textAlign: 'left',
  },
  addressContainer: {},
  addressLabel: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: 5,
    textAlign: 'left',
  },
  address: {
    color: 'grey',
    fontSize: 18,
    paddingHorizontal: 8,
    paddingBottom: 10,
    textAlign: 'left',
  },
  inputNewAddressLabel: {
    backgroundColor: 'white',
    padding: 5,
    marginTop: 8,
    marginHorizontal: 5,
    height: 40,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 5,
  },
  inputNewAddress: {
    backgroundColor: 'white',
    padding: 5,
    marginHorizontal: 5,
    marginTop: -1,
    height: 40,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 5,
  },
});
export default styles;
