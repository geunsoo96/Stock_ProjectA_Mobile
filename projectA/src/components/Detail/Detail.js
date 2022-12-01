import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import DetailGraph from './DetailGraph';
import DetailName from './DetailName';
import DetailPrice from './DetailPrice';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  nameBox: {
    height: 50,
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  graphBox: {
    height: 300,
  },
  buttonBox: {
    height: 60,
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  priceBox: {
    height: 420,
    backgroundColor: 'pink',
  },
});

export default function Detail(props) {
  const nameDummyData = {
    name: '동화약품',
    code: '000020',
  };
  const priceDummyData = {
    open: 10000,
    high: 12000,
    low: 9000,
    close: 11000,
    volume: 111111,
    day: '2022-02-20',
  };
  const [nameData, nameDataSet] = useState(nameDummyData);
  const [graphData, graphDataSet] = useState();
  const [priceData, priceDataSet] = useState(priceDummyData);
  const onPress = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.nameBox}>
        <DetailName data={nameData} />
      </View>
      <View style={styles.graphBox}>
        <DetailGraph />
      </View>
      <View style={styles.buttonBox}>
        <Button title="1주일" onPress={onPress} />
        <Button title="1개월" onPress={onPress} />
        <Button title="1년" onPress={onPress} />
      </View>
      <View style={styles.priceBox}>
        <DetailPrice data={priceData} />
      </View>
    </View>
  );
}
