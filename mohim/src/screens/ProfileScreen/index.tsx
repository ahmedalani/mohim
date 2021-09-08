import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';

import {useNavigation} from '@react-navigation/native';
import ProfileAction from '../../components/ProfileAction';

const ProfileScreen = () => {
  // state
  const [userName, setUserName] = useState('someUser');
  const [userEmail, setUserEmail] = useState('user Email');
  const [phoneNumber, setPhoneNumber] = useState('user Phone#');

  const navigation = useNavigation();
  const handleActionInfo = () => {
    navigation.navigate('AccountInfoScreen', {
      userName,
      userEmail,
      phoneNumber,
    });
  };
  const handleActionLanguage = () => {
    navigation.navigate('LanguageScreen');
  };
  const handleActionAddress = () => {
    navigation.navigate('AccountAddressScreen');
  };
  return (
    <ScrollView style={styles.root}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleBar}>My Account</Text>
      </View>
      <View style={styles.actionsContainer}>
        <ProfileAction
          onPress={handleActionInfo}
          icon={
            <Ionicons
              name="ios-information-circle"
              color={'#52aebc'}
              size={30}
            />
          }
          title={'Account Information'}
        />
        <ProfileAction
          onPress={handleActionInfo}
          icon={
            <MaterialIcons name="notifications" color={'#52aebc'} size={30} />
          }
          title={'Notifications'}
        />
        <ProfileAction
          onPress={handleActionInfo}
          icon={<AntDesign name="star" color={'#52aebc'} size={30} />}
          title={'Reviews'}
        />
        <ProfileAction
          onPress={handleActionAddress}
          icon={
            <MaterialIcons name="location-on" color={'#52aebc'} size={30} />
          }
          title={'My Addresses'}
        />
        <ProfileAction
          onPress={handleActionInfo}
          icon={<AntDesign name="heart" color={'#52aebc'} size={28} />}
          title={'Wish List'}
        />
        <ProfileAction
          onPress={handleActionInfo}
          icon={<MaterialIcons name="history" color={'#52aebc'} size={30} />}
          title={'Order History'}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleBar}>Settings</Text>
      </View>
      <View style={styles.actionsContainer}>
        <ProfileAction
          onPress={handleActionLanguage}
          icon={<Ionicons name="ios-language" color={'#52aebc'} size={30} />}
          title={'Language'}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
