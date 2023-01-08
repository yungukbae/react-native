import React from 'react';
import {Button, Text} from 'react-native';
import CustomView from '../components';
import {GenNavigationProps} from './types';

const Profile = ({navigation: {navigate}}: GenNavigationProps<'Profile'>) => {
  return (
    <CustomView>
      <Text>Profile</Text>
      <Button title="Go Home" onPress={() => navigate('Home', {number: 234})} />
    </CustomView>
  );
};

export default Profile;
