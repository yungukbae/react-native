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
  size?: 'fullyWidth' | 'medium' | 'small' | number;
  onPress: (event: GestureResponderEvent) => void;
}
const CustomButton: React.FC<Props> = props => {
  const buttonSize = {fullyWidth: '100%', medium: '50%', small: 60};

  const widthValue =
    typeof props.size === 'number'
      ? props.size
      : buttonSize[props.size ?? 'fullyWidth'];

  const buttonStyle = [globalStyles.button, {width: widthValue}];

  return (
    <TouchableOpacity style={buttonStyle} onPress={props.onPress}>
      <Text style={props.textStyle}>타이틀</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
