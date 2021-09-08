import React from 'react';
import {View, Text, Pressable} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

interface ProfileActionProps {
  onPress: () => void;
  icon: Element;
  title: string;
}
const ProfileAction = (props: ProfileActionProps) => {
  const {onPress, icon, title} = props;
  return (
    <Pressable
      style={({pressed}) => [
        {backgroundColor: pressed ? '#d9f6fa' : 'white'},
        styles.action,
      ]}
      onPress={onPress}>
      <View style={styles.actionIcon}>{icon}</View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.actionArrow}>
        <MaterialIcons name="arrow-forward-ios" color={'#52aebc'} size={20} />
      </View>
    </Pressable>
  );
};

export default ProfileAction;
