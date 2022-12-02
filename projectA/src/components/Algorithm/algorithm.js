import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Pressable,
  Touchable,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';

const Algorithm = () => {
  // const dummyData
  return (
    <ScrollView
      style={{
        height: '100%',
      }}>
      <View style={styles.head}>
        <Text style={styles.headText}>이달의 추천 주식</Text>
        <Button title="침팬지 추천받기" color="salmon" />

        <Pressable style={styles.button} title="hi"></Pressable>
      </View>
      <View style={styles.container}>
        <Text style={styles.contentBox}>KOSPI</Text>
        <Text style={styles.contentBox}>KOSDAQ</Text>
      </View>
      <View></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    // flexDirection: 'row',
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
