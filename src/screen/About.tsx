import React from 'react';
import {Button, Text} from 'react-native';
import CustomView from '../components';
import {GenNavigationProps} from './types';

const About = ({navigation: {navigate}}: GenNavigationProps<'About'>) => {
  return (
    <CustomView>
      <Text>About</Text>
      <Button title="Go Home" onPress={() => navigate('Home', {number: 234})} />
      <Button title="Go Profile" onPress={() => navigate('Profile')} />
    </CustomView>
  );
};

export default About;
