import React, {type PropsWithChildren} from 'react';
import {ScrollView, View} from 'react-native';
import {globalStyles} from '../styles/global';

interface Props extends PropsWithChildren {
  isScroll?: boolean;
}

export const CustomView: React.FC<Props> = ({isScroll = false, children}) => {
  return isScroll ? (
    <ScrollView style={globalStyles.container}>{children}</ScrollView>
  ) : (
    <View style={globalStyles.container}>{children}</View>
  );
};
