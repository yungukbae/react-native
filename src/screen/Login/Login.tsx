import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CustomView, CustomButton} from '../../components';
import {GenNavigationProps} from '../types';

const Login: React.FC<GenNavigationProps<'Login'>> = () => {
  const [isClick, setIsClick] = useState(false);
  const ae = () => {
    setIsClick(true);
  };
  return (
    <CustomView>
      {isClick ? (
        <Text
          style={{flex: 1, textAlign: 'center', fontSize: 24, marginTop: 100}}>
          Login
        </Text>
      ) : (
        <View style={style.view}>
          <Text style={style.text}>Welcome!</Text>
          <CustomButton
            title="Start"
            onPress={ae}
            size={'fullyWidth'}
            color={'secondary'}
          />
        </View>
      )}
    </CustomView>
  );
};

export default Login;

const style = StyleSheet.create({
  view: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {flex: 1, textAlign: 'center', fontSize: 24, marginTop: 100},
});
