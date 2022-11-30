import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from './Layout/Header';
import Algorithm from './components/Algorithm/algorithm';
import Main from './Layout/Main';

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <Header />
        <Main />
        <Text>App</Text>
        <Algorithm />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
