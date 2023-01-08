import React from 'react';
import {Button, Text} from 'react-native';
import CustomView from '../components';
import {GenNavigationProps} from './types';

const Home = ({route, navigation}: GenNavigationProps<'Home'>) => {
  const {params} = route;
  console.log(params);

  return (
    <CustomView>
      <Text>Home</Text>
      <Button title="Go About" onPress={() => navigation.navigate('About')} />
      <Button
        title="Go Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </CustomView>
  );
};

export default Home;
