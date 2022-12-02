import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          우가우가{'  '}
          <Image
            style={styles.image}
            source={require('../../public/images/logo.png')}
          />
          {'  '}
          투자증권
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFC33B',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 30,
    height: 30,
  },
});
