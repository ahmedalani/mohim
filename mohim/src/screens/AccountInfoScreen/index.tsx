import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';

const AccountInfoScreen = ({
  user,
}: {
  user: {
    attributes: {username: string; phonenumber: string; email: string};
  } | null;
}) => {
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
          {user?.attributes.username || 'username not found'}
        </TextInput>
        <TextInput editable={false} style={styles.infoItem}>
          {user?.attributes.phonenumber || 'phonenumber not found'}
        </TextInput>
        <TextInput editable={false} style={styles.infoItem}>
          email: {user?.attributes.email}
        </TextInput>
      </View>
    </View>
  );
};

export default AccountInfoScreen;
