import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  name: {
    color: 'black',
    fontSize: 36,
    fontWeight: '900',
  },
  code: {
    color: 'black',
    fontSize: 25,
    fontWeight: '600',
  },
});

export default function DetailName(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.data.name}</Text>
      <Text style={styles.code}>{props.data.code}</Text>
    </View>
  );
}
