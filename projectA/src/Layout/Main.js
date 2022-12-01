import {StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import React from 'react';
import Header from './Header';

export default function Main() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Header />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    height: 100,
  },
});
