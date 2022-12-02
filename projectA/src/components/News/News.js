import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
// staro;
// tag;

import Header from '../../Layout/Header';

const News = () => {
  const [today, setToday] = useState('');
  const [contentImage, setContentImage] = useState([]);
  const [test, setTest] = useState(true);

  useEffect(() => {
    let date = new Date();
    let dateArray = date.toString().split(' ');
    let year = dateArray[3].split('0')[1];
    let month = dateArray[1];
    let day = dateArray[2];

    setToday(`${day}-${month}-${year}`);
  }, [today]);

  useEffect(() => {
    const getImageData = () => {
      fetch('https://picsum.photos/v2/list?page=1&limit=5')
        .then(async res => await res.json())
        .then(res => {
          let image = [];
          for (let i = 0; i < res.length; i++) {
            image.push(res[i].download_url);
          }
          setContentImage([...image]);
        });
    };
    getImageData();
    console.log(contentImage);
  }, [test]);

  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.topBox}>
            <Text style={styles.newsKorea}>
              <Icon name="staro" style={styles.newsKorea}></Icon> News, Korea
              {'\n'}
            </Text>
            <Text onPress={() => setTest(!test)}>{today}</Text>
          </View>
        </View>
        <View style={styles.contentsContainer}>
          <View style={styles.contentsBox}>
            <ScrollView>
              <View style={styles.contents}>
                <View style={styles.image}>
                  <Image source={{uri: contentImage[0]}} style={{back}} />
                </View>
                <View style={styles.newsBox}>
                  <Text style={styles.title}>제목</Text>
                  <Text style={styles.summary}>요약</Text>
                  <Text style={styles.date}>날짜</Text>
                </View>
              </View>

              <Text style={styles.contents}>하단</Text>
              <Text style={styles.contents}>하단</Text>
              <Text style={styles.contents}>하단</Text>
            </ScrollView>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'greenyellow',
  },
  topContainer: {
    flex: 1,
    // backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBox: {
    width: 138,
    height: 35,
    // backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  newsKorea: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },

  contentsContainer: {
    flex: 3.5,
    // backgroundColor: 'yellow',
    alignItems: 'center',
  },
  contentsBox: {
    width: 350,
    height: 440,
    // backgroundColor: 'skyblue',
  },
  contents: {
    flexDirection: 'row',
    width: 350,
    height: 130,
    marginBottom: 23,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    // backgroundColor: 'red',
  },

  image: {
    flex: 1,
    // backgroundColor: 'red',
  },
  newsBox: {
    flex: 2,
    backgroundColor: 'pink',
  },
  title: {
    flex: 1,
    backgroundColor: 'blue',
  },
  summary: {
    flex: 2,
    backgroundColor: 'green',
  },
  date: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});

export default News;
