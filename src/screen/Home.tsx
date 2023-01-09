import React from 'react';
import {Button, Text} from 'react-native';
import CustomView from '../components';
import {GenNavigationProps} from './types';

const Home: React.FC<GenNavigationProps<'Home'>> = ({route, navigation}) => {
  const {params} = route;
  console.log(params);

  return <CustomView></CustomView>;
};

export default Home;
