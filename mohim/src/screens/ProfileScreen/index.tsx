import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Auth} from 'aws-amplify';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';

import {useNavigation} from '@react-navigation/native';
import ProfileAction from '../../components/ProfileAction';
import SignInModal from '../../components/SignInModal';

const ProfileScreen = ({
  user,
}: {
  user: {
    attributes: {username: string; phonenumber: string; email: string};
  } | null;
}) => {
  // state
  const [showModal, setShowModal] = useState(false);

  const navigation = useNavigation();
  const handleActionInfo = () => {
    navigation.navigate('AccountInfoScreen');
  };
  const handleActionAddress = () => {
    navigation.navigate('AccountAddressScreen');
  };
  const handleActionOrderHistory = () => {
    navigation.navigate('AccountOrderHistoryScreen');
  };
  const handleActionLanguage = () => {
    navigation.navigate('LanguageScreen');
  };
  const handleActionLogout = async () => {
    await Auth.signOut().then(() => {
      setShowModal(!showModal);
      navigation.navigate('HomeStack');
    });
  };
  return (
    <ScrollView style={styles.root}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleBar}>My Account</Text>
      </View>
      {user ? (
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
            onPress={handleActionOrderHistory}
            icon={<MaterialIcons name="history" color={'#52aebc'} size={30} />}
            title={'Order History'}
          />
        </View>
      ) : (
        <View>
          <ProfileAction
            onPress={() => setShowModal(!showModal)}
            icon={<Entypo name="login" color={'#52aebc'} size={30} />}
            title={'Login'}
          />
          <SignInModal
            modalVisibility={showModal}
            setModalVisiblity={setShowModal}
          />
        </View>
      )}
      <View style={styles.titleContainer}>
        <Text style={styles.titleBar}>Settings</Text>
      </View>
      <View style={styles.actionsContainer}>
        <ProfileAction
          onPress={handleActionLanguage}
          icon={<Ionicons name="ios-language" color={'#52aebc'} size={30} />}
          title={'Language'}
        />
        {user && (
          <ProfileAction
            onPress={handleActionLogout}
            icon={<MaterialIcons name="logout" color={'#52aebc'} size={30} />}
            title={'Logout'}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
