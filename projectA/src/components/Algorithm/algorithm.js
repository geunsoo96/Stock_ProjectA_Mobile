import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Pressable,
  Touchable,
} from 'react-native';
import {useState} from 'react';
import React from 'react';
import {ScrollView} from 'react-native';
import Header from '../../Layout/Header';

const Algorithm = () => {
  const [kospi, setKospi] = React.useState('');
  const dummyKospi = [
    '삼성전자',
    'SK하이닉스',
    'DB하이텍',
    '네이버',
    '카카오',
    '현대차',
    '기아차',
    '현대중공업',
    '에스원',
    '서울식품',
  ];
  const dummyKosdaq = [
    '노란우산',
    '한화리조트',
    '태양일수',
    '대명리조트',
    '대전식품',
    '에스텍',
    '혼다차',
    '논산철강',
    '청주딸기',
    '감자보험',
  ];
  return (
    //   <Tab.Screen
    //   name="Algorithm"
    //   component={Algorithm}
    //   options={{
    //     title: '추천',
    //     tabBarIcon: ({color, size}) => (
    //       <Icon name="recommend" color={color} size={size} />
    //     ),
    //   }}
    // />
    <ScrollView
      style={{
        height: '100%',
      }}>
      <Header />
      <View style={styles.head}>
        <Text style={styles.headText}>이달의 추천 주식</Text>
        {/* <Button title="침팬지 추천받기" color="salmon" /> */}
        <Tab.Screen
          name="Algorithm"
          component={Algorithm}
          options={{
            title: '추천',
            tabBarIcon: ({color, size}) => (
              <Icon name="recommend" color={color} size={size} />
            ),
          }}
        />
        <Pressable style={styles.button} title="hi"></Pressable>
      </View>
      <View style={styles.container}>
        <Text style={styles.contentBox}>
          KOSPI
          <Text>{dummyKospi}</Text>
        </Text>
        <Text style={styles.contentBox}>
          KOSDAQ
          <Text>{dummyKosdaq}</Text>
        </Text>
      </View>
      <View></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  contentBox: {
    // backgroundColor: '#FFC33B',
    borderStyle: 'solid',
    borderColor: '#FFC33B',
    borderWidth: 5,
    borderRadius: 20,
    width: 300,
    height: 600,
    margin: 5,
    padding: 20,
    textAlign: 'center',
    fontSize: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  head: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    width: '30%',
    height: '15%',
    backgroundColor: '#FFC33B',
    borderRadius: 3,
  },
});
export default Algorithm;
