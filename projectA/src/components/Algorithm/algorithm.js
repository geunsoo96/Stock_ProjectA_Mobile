import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';
const Algorithm = () => {
  return (
    <ScrollView
      style={{
        height: 100 + '%',
      }}>
      <View style={styles.container}>
        <Text style={styles.contentBox}>kospi</Text>
        <Text style={styles.contentBox}>kosdaq</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    // flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'orange',
    width: 100 + '%',
    height: 100 + '%',
  },
  contentBox: {
    backgroundColor: 'red',
    width: 80 + '%',
    height: 100 + '%',
  },
});
export default Algorithm;
