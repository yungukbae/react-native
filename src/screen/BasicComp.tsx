import React from 'react';
import {Image, StyleSheet, Text, TextInput, ScrollView} from 'react-native';
import CustomView from '../components';
import {GenNavigationProps} from './types';

const BasicComp: React.FC<GenNavigationProps<'BasicComp'>> = () => {
  return (
    <CustomView isScroll={true}>
      <Text style={styles.boldText}>Text</Text>
      <Text>BasicComp</Text>
      <Text style={styles.boldText}>Image</Text>
      <Image
        style={styles.img}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Text style={styles.boldText}>TextInput</Text>
      <TextInput
        style={styles.input}
        placeholder="this issef placeholder"
        keyboardType="numeric"
      />
      <Text style={styles.boldText}>Scroll View</Text>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
      <Text style={styles.boldText}>Scroll View</Text>
      <Text style={styles.boldText}>Scroll View</Text>
      <Text style={styles.boldText}>Scroll View</Text>
      <Text style={styles.boldText}>Scroll View</Text>
      <Text style={styles.boldText}>Scroll View</Text>
      <Text style={styles.boldText}>Scroll View</Text>
      <Text style={styles.boldText}>Scroll View</Text>
      <Text style={styles.boldText}>Scroll View</Text>
    </CustomView>
  );
};

const styles = StyleSheet.create({
  boldText: {
    fontWeight: 'bold',
    marginBottom: 12,
    marginTop: 25,
  },
  img: {
    width: 60,
    height: 60,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  scrollView: {
    height: 300,
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default BasicComp;
