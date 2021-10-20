import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const AccountOrderHistoryScreen = ({
  user,
}: {
  user: {
    attributes: {username: string; phonenumber: string; email: string};
  } | null;
}) => {
  return (
    <View>
      <Text style={styles.title}>OrderHistory</Text>
    </View>
  );
};

export default AccountOrderHistoryScreen;
