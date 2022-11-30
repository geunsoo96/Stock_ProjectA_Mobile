import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>메인(스크롤뷰)</Text>
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
