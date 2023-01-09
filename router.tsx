import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screen/Home';
import {RootStackParamList} from './src/screen/types';
import Login from './src/screen/Login/Login';

const RootStack = createStackNavigator<RootStackParamList>();

const Router = () => {
  const initRoute = 'Login';
  return (
    <RootStack.Navigator
      initialRouteName={initRoute}
      screenOptions={{headerShown: false}}>
      <RootStack.Screen name="Login" component={Login} />
      <RootStack.Screen name="Home" component={Home} />
    </RootStack.Navigator>
  );
};

export default Router;

/**
 * navigtor Param 정의
 * Specifying undefined means that the route doesn't have params.
 * A union type with undefined (e.g. SomeType | undefined) means that params are optional.
 */
// export type RootStackParamList = {
//   Home: {number: number} | undefined;
//   About: {userId: string} | undefined;
//   Profile: undefined;
// };

/**
 * To type check our screens, we need to annotate the navigation prop and the route prop received by a screen.
 * The navigator packages in React Navigation export a generic types to define types for both the navigation and route props from the corresponding navigator.
 */
// export type Props = NativeStackScreenProps<RootStackParamList>;

// export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
// export type AboutProps = NativeStackScreenProps<RootStackParamList, 'About'>;
// export type ProfileScreenNavigationProp = Props['navigation'];

// export type ProfileScreenRouteProp = Props['route'];
/**
 * After we have defined the mappings, we need to tell our navigator to use it.
 * To do that, we can pass it as a generic to the createXNavigator functions:
 */
