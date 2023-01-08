import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screen/Home';
import BasicComp from './src/screen/BasicComp';
import Profile from './src/screen/Profile';
import {RootStackParamList} from './src/screen/types';
import UserInterface from './src/screen/UserInterface';

const RootStack = createStackNavigator<RootStackParamList>();

const Router = () => {
  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="BasicComp" component={BasicComp} />
      <RootStack.Screen name="Profile" component={Profile} />
      <RootStack.Screen name="UserInterface" component={UserInterface} />
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
