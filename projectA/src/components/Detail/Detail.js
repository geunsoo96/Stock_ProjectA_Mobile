import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 50,
  },
});

export default function Detail(props) {
  return (
    <View>
      <Text style={styles.text}>너무힘들다 {props.name}</Text>
    </View>
  );
}

Detail.defaultProps = {
  name: 'ㄹㅇ',
};
