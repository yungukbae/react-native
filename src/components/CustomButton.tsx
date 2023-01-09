import React from 'react';
import {
  Text,
  type StyleProp,
  type TextStyle,
  TouchableOpacity,
  type GestureResponderEvent,
} from 'react-native';
import {globalStyles} from '../styles/global';

interface Props {
  title: string;
  textStyle?: StyleProp<TextStyle>;
  color?: 'primary' | 'secondary' | 'heavy' | string;
  size?: 'fullyWidth' | 'medium' | 'small' | number;
  onPress: (event: GestureResponderEvent) => void;
}

const CustomButton: React.FC<Props> = props => {
  const size = {fullyWidth: '100%', medium: '50%', small: 60}[
    props.size ?? 'fullyWidth'
  ];

  const color = {
    primary: '#A75D5D',
    secondary: '#b6b6b6',
    heavy: '#000',
    inherit: '#fff',
  }[props.color ?? 'inherit'];

  const widthValue = typeof props.size === 'number' ? props.size : size;

  const buttonStyle = [
    globalStyles.button,
    {width: widthValue, backgroundColor: color},
  ];

  return (
    <TouchableOpacity style={buttonStyle} onPress={props.onPress}>
      <Text style={props.textStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
