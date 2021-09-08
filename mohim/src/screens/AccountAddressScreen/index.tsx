/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {View, Text, TextInput, Pressable, Modal, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Button from '../../components/Button';
import styles from './styles';

// DATA
import cities from '../../data/cities';
interface Address {
  id: 'a1';
  userSub: 'userSub';
  lable: 'Address 33';
  addressText: 'addressText is this line of text';
  city: 'city name';
}
const AccountAddressScreen = () => {
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

  const onSubmitNewAddress = () => {
    if (!newAddressInput) {
      Alert.alert('please fill new address to proceed');
      return;
    }
    if (addresses && addresses.length > 3) {
      Alert.alert('too many addresses, delete one then try again');
      return;
    }

    setNewAddressInput('');
  };

  const handleAddressEdit = async (action: string, lable?: string) => {
    // submit editing
    const submitEdit = async () => {
      const curAddress = addresses?.filter(a => a.lable === lable)[0];
      if (!curAddress) {
        Alert.alert('address not found!');
        return;
      }
      // error handling: if address is the same (no edit required) make sure to not submit, backend will fail with "error: createdAt read only"
      if (
        !existingAddressEdit ||
        existingAddressEdit === curAddress.addressText
      ) {
        return;
      }
      setExistingAddressEdit(undefined);
    };
    // start editing
    if (action === 'START') {
      if (activeAddress === lable) {
        submitEdit();
        setActiveAddress(undefined);
        return;
      }
      setActiveAddress(lable);
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
      c => c.lable === labelOfAddressToDeleted,
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
            console.log('Deleted!');
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
  // if (!addresses) {
  //   return <ActivityIndicator />;
  // }
  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{x: 0, y: 0}}
      style={styles.addressContainer}>
      <View>
        {addresses?.map((adrs, index) => (
          <View key={index} style={styles.addressItem}>
            <View style={styles.addressTextContainer}>
              <Text key={`${index}-label`} style={styles.addressLabel}>
                {adrs.lable}
              </Text>
              <TextInput
                key={`${index}-address`}
                autoFocus={true}
                editable={activeAddress === adrs.lable}
                blurOnSubmit={true}
                // value={existingAddressEdit}
                onChangeText={setExistingAddressEdit}
                onSubmitEditing={() => handleAddressEdit('DONE', adrs.lable)}
                multiline={true}
                numberOfLines={2}
                style={{
                  ...styles.addressText,
                  backgroundColor:
                    activeAddress === adrs.lable ? 'white' : '#efefef',
                  borderColor:
                    activeAddress === adrs.lable ? '#52aebc' : '#efefef',
                }}>
                {adrs.addressText}
              </TextInput>
              <Text key={`${index}-city`} style={styles.addressCity}>
                {adrs.city}
              </Text>
            </View>
            <View style={styles.editAndDeletecontainer}>
              <Pressable onPress={() => handleAddressEdit('START', adrs.lable)}>
                {activeAddress === adrs.lable ? (
                  <MaterialIcons name="done" color={'#52aebc'} size={25} />
                ) : (
                  <AntDesign name="edit" color={'#f15e3b'} size={25} />
                )}
              </Pressable>
              <Pressable onPress={() => handleAddressDelete(adrs.lable)}>
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
          {/* had to put textinput in a Pressable to work on Android */}
          <Pressable onPress={() => setCityModal(!cityModal)}>
            <TextInput
              style={styles.newAddressCity}
              placeholder={'- Choose a City -'}
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
