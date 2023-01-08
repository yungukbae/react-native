import React from 'react';
import {Text} from 'react-native';
import CustomView from '../components';
import {GenNavigationProps} from './types';

const Profile = ({route, navigator}: GenNavigationProps<'Profile'>) => {
  return (
    <CustomView>
      <Text>Profile</Text>
    </CustomView>
  );
};

export default Profile;
