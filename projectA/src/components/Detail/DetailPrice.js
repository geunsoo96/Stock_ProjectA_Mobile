import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  priceBox: {
    width: '50%',
    flexDirection: 'row',
  },
  text: {
    width: '100%',
    fontSize: 40,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default function DetailPrice(props) {
  const dataSet = [
    {kr: '시가', en: 'open'},
    {kr: '고가', en: 'high'},
    {kr: '저가', en: 'low'},
    {kr: '종가', en: 'close'},
    {kr: '거래량', en: 'volume'},
  ];
  return (
    <View style={styles.container}>
      {dataSet.map(item => {
        return (
          <View style={styles.priceBox} key={item.kr}>
            <Text style={styles.text}>{item.kr}</Text>
            <Text style={styles.text}>{props.data[item.en]}</Text>
          </View>
        );
      })}
    </View>
  );
}
