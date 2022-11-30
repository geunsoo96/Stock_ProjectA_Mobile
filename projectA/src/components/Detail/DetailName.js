import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  text36: {
    fontSize: 36,
  },
  text25: {
    fontSize: 25,
  },
});

export default function DetailName(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text36}>{props.data.name}</Text>
      <Text style={styles.text25}>{props.data.code}</Text>
    </View>
  );
}
