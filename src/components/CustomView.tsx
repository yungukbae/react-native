import React, {type PropsWithChildren} from 'react';
import {View} from 'react-native';
import {globalStyles} from '../styles/global';

export const CustomView: React.FC<PropsWithChildren> = ({children}) => {
  return <View style={globalStyles.container}>{children}</View>;
};
