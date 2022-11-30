import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import {logo} from '../../public/images/.png';
import {Icon} from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text>검색</Text>
      </View>
      <View>
        <Text style={styles.title}>
          우가우가{' '}
          <Image
            style={styles.image}
            source={require('../../public/images/logo.png')}
          />{' '}
          투자증권
        </Text>
      </View>
      <View>
        <Text>메뉴</Text>
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
    justifyContent: 'space-between',
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
