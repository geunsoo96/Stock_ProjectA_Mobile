// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   Button,
//   Pressable,
//   Touchable,
//   TouchableOpacity,
// } from 'react-native';
// import {useState} from 'react';
// import React from 'react';
// import {ScrollView} from 'react-native';
// import Header from '../../Layout/Header';

// const Algorithm = () => {
//   const [kospi, setKospi] = React.useState('');
//   const dummyKospi = [
//     '삼성전자',
//     'SK하이닉스',
//     'DB하이텍',
//     '네이버',
//     '카카오',
//     '현대차',
//     '기아차',
//     '현대중공업',
//     '에스원',
//     '서울식품',
//   ];
//   const dummyKosdaq = [
//     '노란우산',
//     '한화리조트',
//     '태양일수',
//     '대명리조트',
//     '대전식품',
//     '에스텍',
//     '혼다차',
//     '논산철강',
//     '청주딸기',
//     '감자보험',
//   ];
//   return (
//     //   <Tab.Screen
//     //   name="Algorithm"
//     //   component={Algorithm}
//     //   options={{
//     //     title: '추천',
//     //     tabBarIcon: ({color, size}) => (
//     //       <Icon name="recommend" color={color} size={size} />
//     //     ),
//     //   }}
//     // />
//     <ScrollView
//       style={{
//         height: '100%',
//       }}>
//       <Header />
//       <View style={styles.head}>
//         <Text style={styles.headText}>이달의 추천 주식</Text>
//         {/* <Button title="침팬지 추천받기" color="salmon" /> */}
//         <TouchableOpacity style={styles.button}>
//           <Text style={{color: 'white'}}>침팬지 추천받기</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.container}>
//         <Text style={styles.contentBox}>
//           KOSPI
//           <Text>{dummyKospi}</Text>
//         </Text>
//         <Text style={styles.contentBox}>
//           KOSDAQ
//           <Text>{dummyKosdaq}</Text>
//         </Text>
//       </View>
//       <View></View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     width: '100%',
//     height: '100%',
//   },
//   contentBox: {
//     // backgroundColor: '#FFC33B',
//     borderStyle: 'solid',
//     borderColor: '#FFC33B',
//     borderWidth: 5,
//     borderRadius: 20,
//     width: 300,
//     height: 600,
//     margin: 5,
//     padding: 20,
//     textAlign: 'center',
//     fontSize: 20,
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   head: {
//     width: '100%',

//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   headText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   button: {
//     width: '30%',
//     height: '15%',
//     backgroundColor: '#FFC33B',
//     borderRadius: 3,
//     // flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
// export default Algorithm;

import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Pressable,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import React from 'react';
import {ScrollView} from 'react-native';
import Header from '../../Layout/Header';
import {useNavigation} from '@react-navigation/native';

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
  const dummyKospiPrice = [
    68000, 134000, 34100, 110000, 80000, 87500, 73600, 1234, 4321, 123,
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
  const navigation = useNavigation();
  return (
    <>
      <Header />
      <ScrollView>
        <View style={styles.container}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            이달의 추천 주식
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Lotto')}>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              침팬지 추천받기
            </Text>
          </TouchableOpacity>
          <View style={styles.stockBox}>
            {/* kospi */}
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
                marginTop: 10,
              }}>
              KOSPI
            </Text>
            <View style={styles.stockBorder}>
              <View style={styles.stockList}>
                {/* name */}
                <Text>{dummyKospi}</Text>
              </View>
              <View style={styles.stockList}>
                {/* price */}
                <Text>{dummyKospiPrice}</Text>
              </View>
            </View>
          </View>
          <View style={styles.stockBox}>
            {/* kosdaq */}
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
                marginTop: 10,
              }}>
              KOSDAQ
            </Text>
            <View style={styles.stockBorder}>
              <View style={styles.stockList}>
                {/* name */}
                <Text>{dummyKosdaq}</Text>
              </View>
              <View style={styles.stockList}>
                {/* price */}
                <Text>{dummyKospiPrice}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 10,
  },
  button: {
    backgroundColor: '#FFC33B',
    width: 200,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 10,
  },
  stockBox: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  stockBorder: {
    flex: 1,
    padding: 10,
    borderStyle: 'solid',
    borderColor: '#FFC33B',
    borderWidth: 3,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 300,
    margin: 10,
  },
  stockList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  stockText: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
});
export default Algorithm;
