import {StyleSheet, ScrollView, Pressable, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import React from 'react';
import Header from './Header';

export default function Main() {
  const navigation = useNavigation();

  return (
    <>
      <Header />
      <ScrollView style={styles.container}></ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
  },
});
