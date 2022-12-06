import React from 'react';
import {View, Text, ScrollView, SafeAreaView, StyleSheet} from 'react-native';

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
  grid: {
    width: '100%',
    height: '25%',
    position: 'absolute',
    borderBottomWidth: 1,
    borderStyle: 'dashed',
  },
  text: {
    fontSize: 12,
    justifyContent: 'center',
    alignItems: 'center',
    top: 55,
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
  const gridArr = [
    bottom + (gap * 3) / 4,
    bottom + (gap * 2) / 4,
    bottom + gap / 4,
    bottom,
  ];
  let barWidth = 0;
  if (highArr.length > 100) {
    barWidth = 8;
  } else if (highArr.length > 50) {
    barWidth = 10;
  } else {
    barWidth = 20;
  }
  const graphData = props.data
    .slice(0)
    .reverse()
    .map(item => {
      let data = {
        full: {
          width: barWidth,
          height: ((item.high - item.low) * 280) / gap,
          position: 'relative',
          top: ((top - item.high) * 280) / gap,
          alignItems: 'center',
        },
        top: {
          width: 1,
          backgroundColor: 'black',
        },
        middle: {
          width: barWidth,
          backgroundColor: 'black',
        },
        bottom: {
          width: 1,
          backgroundColor: 'black',
        },
        data: item,
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
        {gridArr.map((item, index) => {
          return (
            <View style={styles.grid} top={index * 25 + '%'}>
              <Text style={styles.text}>{item}</Text>
            </View>
          );
        })}
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
