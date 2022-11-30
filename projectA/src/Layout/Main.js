import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Detail from '../components/Detail/Detail';

export default function Header() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Detail />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    height: 900,
  },
});
