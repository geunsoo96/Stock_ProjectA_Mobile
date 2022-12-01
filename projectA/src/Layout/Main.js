import {StyleSheet, ScrollView, Pressable, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import React from 'react';
import Header from './Header';

export default function Main() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Header />
      <Pressable onPress={() => navigation.navigate('News')}>
        <Text>뉴스</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Detail')}>
        <Text>디테일</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Algorithm')}>
        <Text>알고리즘</Text>
      </Pressable>
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
