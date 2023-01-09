import React, {type PropsWithChildren} from 'react';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from '../styles/global';

interface Props extends PropsWithChildren {
  isScroll?: boolean;
}
const CustomView: React.FC<Props> = ({isScroll = false, children}) => {
  return (
    <SafeAreaView style={globalStyles.container}>
      {isScroll ? <ScrollView>{children}</ScrollView> : children}
    </SafeAreaView>
  );
};
export default CustomView;
