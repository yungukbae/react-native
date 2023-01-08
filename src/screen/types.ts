import {type NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: {number: number} | undefined;
  About: {userId: string} | undefined;
  Profile: undefined;
};

export type GenNavigationProps<RouteName extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, RouteName>;
