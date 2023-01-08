import React, {useState} from 'react';
import {Alert, Button, StyleSheet, Switch, Text} from 'react-native';
import CustomView from '../components';
import {GenNavigationProps} from './types';

const UserInterface: React.FC<GenNavigationProps<'UserInterface'>> = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <CustomView>
      <Text style={styles.boldText}>Button</Text>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Button
        title="Press me"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
      <Text style={styles.boldText}>Switch</Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </CustomView>
  );
};

const styles = StyleSheet.create({
  boldText: {
    fontWeight: 'bold',
    marginBottom: 12,
    marginTop: 25,
  },
});

export default UserInterface;
