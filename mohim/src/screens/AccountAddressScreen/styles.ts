import {StyleSheet} from 'react-native';
import {Platform} from 'react-native';
const styles = StyleSheet.create({
  addressContainer: {
    padding: 5,
    backgroundColor: '#efefef',
  },
  addressLabel: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: 5,
  },
  addressItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    marginTop: 3,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
  },
  addressTextContainer: {
    width: '82%',
  },
  addressText: {
    maxHeight: Platform.OS === 'ios' ? 60 : undefined,
    color: 'grey',
    fontSize: 18,
    padding: 5,
    // next styles work on edit only
    borderWidth: 1,
    borderRadius: 5,
  },
  addressCity: {
    padding: 5,
    color: 'grey',
    fontSize: 18,
  },
  editAndDeletecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '18%',
  },
  newAddressContainer: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
  },
  inputNewAddress: {
    backgroundColor: 'white',
    padding: 5,
    marginTop: 20,
    marginHorizontal: 5,
    height: 40,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 5,
  },
  newAddressCity: {
    color: 'black',
    backgroundColor: 'white',
    padding: 5,
    marginTop: 10,
    marginHorizontal: 5,
    height: 40,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 5,
  },
  centeredView: {
    flex: 1,
    backgroundColor: 'grey',
    opacity: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerContainer: {
    backgroundColor: 'white',
    height: 300,
  },
});

export default styles;
