import React, {useState} from 'react';
import {View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';

const LanguageScreen = () => {
  const [selectedOption, setSelectedOption] = useState(undefined);
  return (
    <View style={styles.root}>
      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        <Picker.Item
          label={'English'}
          value={'English'}
          key={'lang-pick-English'}
        />
        <Picker.Item
          label={'العربية'}
          value={'العربية'}
          key={'lang-pick-Arabic'}
        />
      </Picker>
    </View>
  );
};

export default LanguageScreen;
