import {StyleSheet, ScrollView, Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import React from 'react';
import Header from './Header';

export default function Main() {
  const navigation = useNavigation();

  return (
    <>
      <Header />
      <View>
        <ScrollView style={styles.container}></ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
  },
});
