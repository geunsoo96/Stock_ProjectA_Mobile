import Header from '../../Layout/Header';
import {View, Image, StyleSheet, Text} from 'react-native';

const Lotto = () => {
  return (
    <View>
      <Header />
      <View style={styles.container}>
        <Image source={require('../../../public/img/image.png')}></Image>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          ↑클릭하시오↑
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'red',
          }}>
          투자의 책임은 본인에게 있습니다.
        </Text>
        <View style={styles.randomBox}></View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  randomBox: {
    width: 300,
    height: 80,
    borderStyle: 'solid',
    borderColor: '#FFC33B',
    borderWidth: 3,
    marginTop: 50,
  },
});
export default Lotto;
