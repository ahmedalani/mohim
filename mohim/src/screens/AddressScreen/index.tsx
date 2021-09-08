/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
// data
import cities from '../../data/cities';
// componenets
import Button from '../../components/Button';
// style
import styles from './styles';

// const countries = countryList().getData();
// console.log(countries[0]);
const AddressScreen = () => {
  // State
  const [city, setCity] = useState(cities[0].label);
  const [fullname, setFullname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [secondaryPhoneNumber, setSecondaryPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('');
  const [notes, setNotes] = useState('');

  const onCheckout = () => {
    if (addressError) {
      Alert.alert('fix all fields before submitting');
      return;
    }
    if (!fullname) {
      Alert.alert('Please fill in the full name field');
      return;
    }
    if (!phoneNumber) {
      Alert.alert('Prvide phone number to proceed');
      return;
    }
    if (city === 'Please choose a city') {
      Alert.alert('Please choose a city :)');
      return;
    }
    console.warn('Success!');
  };

  const validateAddress = () => {
    if (address.length < 5 || address.length > 50) {
      setAddressError('address too short or too long');
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'position' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}>
      <ScrollView style={styles.root}>
        <View>
          <Picker selectedValue={city} onValueChange={setCity}>
            {cities.map((cityItem, i) => (
              <Picker.Item
                key={`cityItem-${cityItem.value}-${i}`}
                value={cityItem.value}
                label={cityItem.label}
              />
            ))}
          </Picker>
        </View>
        {/* Full name */}
        <View style={styles.row}>
          <Text style={styles.label}>Full name (first and last name)</Text>
          <TextInput
            style={styles.input}
            placeholder="Full name"
            value={fullname}
            onChangeText={setFullname}
          />
        </View>
        {/* Phone number */}
        <View style={styles.row}>
          <Text style={styles.label}>Phone Number *</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType={'phone-pad'}
          />
        </View>
        {/* Secondary Phone number */}
        <View style={styles.row}>
          <Text style={styles.label}>Phone Number 2</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone Number 2 Optional"
            value={secondaryPhoneNumber}
            onChangeText={setSecondaryPhoneNumber}
            keyboardType={'phone-pad'}
          />
        </View>
        {/* Address */}
        <View style={styles.row}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={address}
            onEndEditing={validateAddress}
            onChangeText={text => {
              setAddress(text);
              setAddressError('');
            }}
          />
          {!!addressError && (
            <Text style={styles.errorLabel}>{addressError}</Text>
          )}
        </View>
        {/* Notes */}
        <View style={styles.row}>
          <Text style={styles.label}>Notes</Text>
          <TextInput
            style={styles.input}
            placeholder="More address details"
            value={notes}
            onChangeText={setNotes}
          />
        </View>
        <Button
          containerStyles={{backgroundColor: '#22e3dd'}}
          text={'checkout'}
          onPress={onCheckout}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddressScreen;
