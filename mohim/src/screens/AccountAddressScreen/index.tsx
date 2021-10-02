/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Modal,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Button from '../../components/Button';
import styles from './styles';

import {API} from 'aws-amplify';

// DATA
import cities from '../../data/cities';
import {Address} from '../../models';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';

const AccountAddressScreen = ({
  user,
}: {
  user: {
    attributes: {
      username: string;
      phonenumber: string;
      email: string;
      sub: string;
    };
  } | null;
}) => {
  // State
  const [addresses, setAddresses] = useState<Address[] | undefined>(undefined);
  const [newAddressInput, setNewAddressInput] = useState('');
  // for editing an exisiting address
  const [existingAddressEdit, setExistingAddressEdit] = useState<
    string | undefined
  >(undefined);
  const [activeAddress, setActiveAddress] = useState<string | undefined>(
    undefined,
  );

  const [cityModal, setCityModal] = useState(false);
  const [city, setCity] = useState(cities[0].value);

  const fetchUserAddresses = async () => {
    const filter = {
      and: [{userSub: {eq: user?.attributes.sub}}, {trash: {eq: false}}],
    };
    await API.graphql({
      query: queries.listAddresses,
      variables: {filter: filter},
    })
      .then((res: any) => {
        console.log('res query listAddresses', res);
        // set addresses
        // const notDeleted = res.data.listAddresses.items.filter(
        //   e => e._deleted !== true,
        // );
        setAddresses(res.data.listAddresses.items);
      })
      .catch(err =>
        console.log('Err @ addressScreen query listAddresses: ', err),
      );
  };
  useEffect(() => {
    fetchUserAddresses();
  }, []);

  const onSubmitNewAddress = () => {
    // error handling before posting to db
    if (!newAddressInput) {
      Alert.alert('please fill new address to proceed');
      return;
    }
    if (addresses && addresses.length > 3) {
      Alert.alert('too many addresses, delete one then try again');
      return;
    }
    // post new address to the database
    const postAddressToDatabase = async () => {
      if (!user) {
        Alert.alert('please login to continue');
        return;
      }
      let labelIndex = '';
      if (addresses) {
        let index = addresses?.length + 1;
        labelIndex = index.toString();
      }
      const addressDetails: Address = {
        userSub: user?.attributes.sub,
        label: `Address ${labelIndex}`,
        addressText: newAddressInput,
        city: city,
        trash: false,
      };
      await API.graphql({
        query: mutations.createAddress,
        variables: {input: addressDetails},
      })
        .then((res: any) => {
          console.log('addressScreen query createAddress res: ', res);
          fetchUserAddresses();
          setNewAddressInput('');
        })
        .catch((err: any) =>
          console.log('AddressScreen query createAddress Err: ', err),
        );
    };
    postAddressToDatabase();
  };

  // subscribe to datastore for each address item
  // useEffect(() => {
  //   const subscriptions = addresses?.map(ad =>
  //     DataStore.observe(Address, ad.id).subscribe(msg => {
  //       if (msg.opType === 'UPDATE') {
  //         setAddresses(curAddresses => {
  //           return (
  //             // console.log('yo from inside curr'),
  //             curAddresses?.map(adt => {
  //               if (adt.id !== msg.element.id) {
  //                 return adt;
  //               }
  //               return {
  //                 ...adt,
  //                 ...msg.element,
  //               };
  //             })
  //           );
  //         });
  //       }
  //       // console.log(msg.model, msg.opType, msg.element);
  //     }),
  //   );
  //   return () => {
  //     subscriptions?.forEach(sub => sub.unsubscribe());
  //   };

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const handleAddressEdit = async (action: string, label?: string) => {
    //add error handling: if address is the same (no edit required) make sure to not submit, backend will fail with "error: createdAt read only"
    // submit editing
    const submitEdit = async () => {
      const curAddress = addresses?.filter(a => a.label === label)[0];
      if (!curAddress) {
        Alert.alert('address not found!');
        return;
      }
      if (
        !existingAddressEdit ||
        existingAddressEdit === curAddress.addressText
      ) {
        return;
      }
      const itemToUpdate = {
        id: curAddress.id,
        addressText: existingAddressEdit || curAddress?.addressText,
        _version: curAddress._version,
      };
      await API.graphql({
        query: mutations.updateAddress,
        variables: {input: itemToUpdate},
      })
        .then((res: any) => {
          console.log('AddressScreen query updateAddress res: ', res);
          setExistingAddressEdit(undefined);
          fetchUserAddresses();
        })
        .catch(err =>
          console.log('AddressScreen query updateAddress err: ', err),
        );
    };
    // start editing
    if (action === 'START') {
      if (activeAddress === label) {
        submitEdit();
        setActiveAddress(undefined);
        return;
      }
      setActiveAddress(label);
      return;
    }
    if (action === 'DONE') {
      submitEdit();
      setActiveAddress(undefined);
      return;
    }
  };

  const handleAddressDelete = async (labelOfAddressToDeleted: string) => {
    const addressToDelete = addresses?.filter(
      c => c.label === labelOfAddressToDeleted,
    )[0];
    if (!addressToDelete) {
      Alert.alert('something went wrong, please try again');
      return;
    }
    Alert.alert(
      'Are your sure?',
      'You are about to delete the address, to exit press NO',
      [
        // The "Yes" button
        {
          text: 'Yes',
          onPress: async () => {
            const itemToUpdate = {
              id: addressToDelete.id,
              trash: true,
              _version: addressToDelete._version,
            };
            // update trash column to true
            await API.graphql({
              query: mutations.updateAddress,
              variables: {input: itemToUpdate},
            })
              .then((res: any) => {
                // console.log('res on update trash to true: ', res);
                const addressUpdated = res.data.updateAddress;
                const addressDetails = {
                  id: addressUpdated.id,
                  _version: addressUpdated._version,
                };
                // deleting address from db
                API.graphql({
                  query: mutations.deleteAddress,
                  variables: {input: addressDetails},
                });
              })
              .then(() => {
                // console.log('deleteAddress query res: ', res);
                updateAddresslabel();
              })
              .catch((err: any) =>
                console.log('err deleteing address or', err),
              );
          },
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: 'No',
        },
      ],
    );
  };
  // update all addresses labels after deleting an address
  const updateAddresslabel = async () => {
    // query all user addresses that are not deleted; you'd think we don't have to specify, lol
    const filter = {
      and: [{userSub: {eq: user?.attributes.sub}}, {trash: {eq: false}}],
    };
    await API.graphql({
      query: queries.listAddresses,
      variables: {filter},
    })
      .then(async (updatedAddressArray: any) => {
        // sort the updated addresses list
        const sortedAddressArr = sortedAddresses(
          updatedAddressArray.data.listAddresses.items,
        );
        // map over the updated address list and fix all labels as
        await Promise.all(
          sortedAddressArr.map(async (adres, i) => {
            // create the new label
            const labelIndex = `Address ${(i + 1).toString()}`;
            // check if label needs to be updated and appropriately update
            if (adres.label !== labelIndex) {
              const itemToUpdate = {
                id: adres.id,
                label: labelIndex,
                _version: adres._version,
              };
              await API.graphql({
                query: mutations.updateAddress,
                variables: {input: itemToUpdate},
              });
            }
          }),
        );
      })
      .then(() => fetchUserAddresses())
      .catch((err: any) =>
        console.log('updating addresses labels after delete query err: ', err),
      );
  };
  // sort function to display addresses by label incrementall
  // returns a sorted addresses array of models (obj)
  const sortedAddresses = (arr: Address[]) => {
    const res = arr?.sort((a, b) => {
      // eslint-disable-next-line radix
      let aNum = parseInt(a.label.charAt(a.label.length - 1));
      // eslint-disable-next-line radix
      let bNum = parseInt(b.label.charAt(b.label.length - 1));
      return aNum - bNum;
    });
    return res;
  };

  if (!addresses) {
    return <ActivityIndicator />;
  }
  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{x: 0, y: 0}}
      style={styles.addressContainer}>
      <View>
        {sortedAddresses(addresses).map((adrs, index) => (
          <View key={index} style={styles.addressItem}>
            <View style={styles.addressTextContainer}>
              <Text key={`${index}-label`} style={styles.addressLabel}>
                {adrs.label}
              </Text>
              <TextInput
                key={`${index}-address`}
                autoFocus={true}
                editable={activeAddress === adrs.label}
                blurOnSubmit={true}
                // value={existingAddressEdit}
                onChangeText={setExistingAddressEdit}
                onSubmitEditing={() => handleAddressEdit('DONE', adrs.label)}
                multiline={true}
                numberOfLines={2}
                style={{
                  ...styles.addressText,
                  backgroundColor:
                    activeAddress === adrs.label ? 'white' : '#efefef',
                  borderColor:
                    activeAddress === adrs.label ? '#52aebc' : '#efefef',
                }}>
                {adrs.addressText}
              </TextInput>
              <Text key={`${index}-city`} style={styles.addressCity}>
                {adrs.city}
              </Text>
            </View>
            <View style={styles.editAndDeletecontainer}>
              <Pressable onPress={() => handleAddressEdit('START', adrs.label)}>
                {activeAddress === adrs.label ? (
                  <MaterialIcons name="done" color={'#52aebc'} size={25} />
                ) : (
                  <AntDesign name="edit" color={'#f15e3b'} size={25} />
                )}
              </Pressable>
              <Pressable onPress={() => handleAddressDelete(adrs.label)}>
                <AntDesign name="delete" color={'#f15e3b'} size={25} />
              </Pressable>
            </View>
          </View>
        ))}
        <View style={styles.newAddressContainer}>
          <TextInput
            style={styles.inputNewAddress}
            placeholder={'enter new address'}
            value={newAddressInput}
            onChangeText={setNewAddressInput}
          />
          {/* had to wrap the textInput in a Pressable to work on android */}
          <Pressable onPress={() => setCityModal(!cityModal)}>
            <TextInput
              style={styles.newAddressCity}
              textAlign={'center'}
              editable={false}
              value={city}
              onPressOut={() => setCityModal(!cityModal)}
            />
          </Pressable>
          <Button
            text={'submit'}
            onPress={onSubmitNewAddress}
            containerStyles={{
              marginHorizontal: 5,
              marginTop: 20,
            }}
          />
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={cityModal}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setCityModal(!cityModal);
          }}>
          <Pressable
            onPress={() => setCityModal(!cityModal)}
            style={styles.centeredView}
          />
          <View style={styles.pickerContainer}>
            <Button
              text={'Done'}
              onPress={() => setCityModal(!cityModal)}
              containerStyles={{marginHorizontal: 5}}
            />
            <Picker selectedValue={city} onValueChange={setCity}>
              {cities.map((cityItem, i) => (
                <Picker.Item
                  key={`cityItem-${cityItem.value}-${i}`}
                  value={cityItem.value}
                  label={cityItem.value}
                />
              ))}
            </Picker>
          </View>
        </Modal>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default AccountAddressScreen;
