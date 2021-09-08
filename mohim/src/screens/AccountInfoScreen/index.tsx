import React from 'react';
import {useRoute, RouteProp} from '@react-navigation/native';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';

const AccountInfoScreen = () => {
  //
  const route: RouteProp<
    {params: {userName: string; phoneNumber: number; userEmail: string}},
    'params'
  > = useRoute();

  return (
    <View>
      <View style={styles.title}>
        <Text style={styles.titleText}>Account Information</Text>
      </View>
      <View style={styles.infoContainer}>
        <TextInput editable={false} style={styles.infoItem}>
          Ahmed Hussain (Static)
        </TextInput>
        <TextInput editable={false} style={styles.infoItem}>
          {route.params.userName}
        </TextInput>
        <TextInput editable={false} style={styles.infoItem}>
          {route.params.phoneNumber}
        </TextInput>
        <TextInput editable={false} style={styles.infoItem}>
          {route.params.userEmail}
        </TextInput>
      </View>
    </View>
  );
};

export default AccountInfoScreen;
