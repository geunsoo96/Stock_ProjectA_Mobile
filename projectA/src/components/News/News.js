import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import Header from '../../Layout/Header';

const News = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text>News</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'greenyellow',
  },
});

export default News;
