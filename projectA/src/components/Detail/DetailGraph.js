import React from 'react';
import {View, ScrollView, Text, SafeAreaView, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  graphBox: {
    width: 400,
    height: 280,
    position: 'absolute',
  },
});

export default function DetailGraph(props) {
  const highArr = props.data.map(item => {
    return item.high;
  });
  const lowArr = props.data.map(item => {
    return item.low;
  });
  const top = Math.max(...highArr);
  const bottom = Math.min(...lowArr);
  const gap = top - bottom;
  let width = 0;
  if (highArr.length > 100) {
    width = 8;
  } else if (highArr.length > 50) {
    width = 10;
  } else {
    width = 20;
  }
  const graphData = props.data
    .slice(0)
    .reverse()
    .map((item, index) => {
      let data = {
        full: {
          width: width,
          height: ((item.high - item.low) * 280) / gap,
          position: 'relative',
          top: ((top - item.high) * 280) / gap,
          // left: index * width,
          alignItems: 'center',
        },
        top: {
          width: 1,
          backgroundColor: 'black',
        },
        middle: {
          width: width,
          backgroundColor: 'black',
        },
        bottom: {
          width: 1,
          backgroundColor: 'black',
        },
      };
      if (item.open > item.close) {
        data.top.height = ((item.high - item.open) * 280) / gap;
        data.middle.height = ((item.open - item.close) * 280) / gap;
        data.bottom.height = ((item.close - item.low) * 280) / gap;
        data.top.backgroundColor = 'blue';
        data.middle.backgroundColor = 'blue';
        data.bottom.backgroundColor = 'blue';
        return data;
      } else if (item.open < item.close) {
        data.top.height = ((item.high - item.close) * 280) / gap;
        data.middle.height = ((item.close - item.open) * 280) / gap;
        data.bottom.height = ((item.open - item.low) * 280) / gap;
        data.top.backgroundColor = 'red';
        data.middle.backgroundColor = 'red';
        data.bottom.backgroundColor = 'red';
        return data;
      } else {
        data.top.height = ((item.high - item.close) * 280) / gap;
        data.middle.height = 1;
        data.bottom.height = ((item.open - item.low) * 280) / gap;
        return data;
      }
    });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.graphBox} horizontal={true}>
        {graphData.map((item, index) => {
          return (
            <View style={item.full} key={index}>
              <View style={item.top} />
              <View style={item.middle} />
              <View style={item.bottom} />
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
