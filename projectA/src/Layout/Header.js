import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {logo} from '../../public/images/.png';
import {Icon} from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.container} colors={['360deg', 'violet', '#FFC33B']}>
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
    // backgroundColor: '#FFC33B',
    // background: 'linear-gradient(360deg, violet, #FFC33B)',
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
