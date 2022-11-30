import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from './Layout/Header';
import Main from './Layout/Main';

export default function App() {
  return (
    <View>
      <Header />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({});
