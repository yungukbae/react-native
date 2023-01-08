import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  About: undefined;
};

export type Props = NativeStackScreenProps<RootStackParamList>;
