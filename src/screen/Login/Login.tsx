import React from 'react';
import {Text} from 'react-native';
import {CustomView, CustomButton} from '../../components';
import {GenNavigationProps} from '../types';

const Login: React.FC<GenNavigationProps<'Login'>> = () => {
  const ae = () => {
    console.log('efsefs');
  };
  return (
    <CustomView>
      <Text style={{flex: 1, textAlign: 'center', fontSize: 24}}>Welcome!</Text>
      <CustomButton title="test" onPress={ae} size={'small'} />
    </CustomView>
  );
};

export default Login;
