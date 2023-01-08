import {type NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: {number: number} | undefined;
  BasicComp: undefined;
  Profile: undefined;
  UserInterface: undefined;
};

export type GenNavigationProps<RouteName extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, RouteName>;
