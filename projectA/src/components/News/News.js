import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import Header from '../../Layout/Header';

const News = () => {
  const [today, setToday] = useState('');
  const [contentImage, setContentImage] = useState([]);
  const [test, setTest] = useState(true);
  const [getData, setGetData] = useState(1);
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let date = new Date();
    let dateArray = date.toString().split(' ');
    let year = dateArray[3].split('0')[1];
    let month = dateArray[1];
    let day = dateArray[2];

    setToday(`${day}-${month}-${year}`);
  }, [today]);

  useEffect(() => {
    const getDataValue = () => {
      fetch(
        `http://apis.data.go.kr/B410001/ovseaMrktNewsService/ovseaMrktNews?serviceKey=uTVcynnfHvQE%2FYUDpYxd5H2oDt89Vg9pvZsbT%2Bd5fwvJSMHp7f2m7IAF4kIJDJF51jLa2xE3m8lpZG2aI3Cy4A%3D%3D&type=json&numOfRows=3&pageNo=${getData}`,
      )
        .then(async res => {
          let jsonRes = await res.json();
          let datavalue = [];
          let data = jsonRes.items;
          for (let i = 0; i < 3; i++) {
            let title = data[i].newsTitl;
            let writeDate = data[i].newsWrtDt.split(' ')[0];
            let sumar = data[i].cntntSumar;
            // let news = data[i].newsBdt;
            let value = {
              id: i,
              newsTitle: title,
              date: writeDate,
              sumar: sumar,
              // news: news,
            };
            datavalue[i] = value;
          }
          setNewsData(datavalue);
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
        });
    };

    const getImageData = () => {
      fetch(`https://picsum.photos/v2/list?page=${getData}&limit=3`)
        .then(async res => await res.json())
        .then(res => {
          let image = [];
          for (let i = 0; i < res.length; i++) {
            image.push(res[i].download_url);
          }
          setContentImage(image);
        });
    };

    setLoading(true);
    getDataValue();
    getImageData();
  }, [getData]);

  if (loading) {
    return (
      <View>
        <Text>로딩중</Text>
      </View>
    );
  }

  if (!loading) {
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
              <Text>{today}</Text>
            </View>
          </View>
          <View style={styles.contentsContainer}>
            <View style={styles.contentsBox}>
              <ScrollView
                onScroll={e => {
                  let paddingToBottom = 1;
                  paddingToBottom += e.nativeEvent.layoutMeasurement.height;
                  if (
                    e.nativeEvent.contentOffset.y + paddingToBottom >=
                    e.nativeEvent.contentSize.height
                  ) {
                    if (getData < 331) {
                      setGetData(getData + 1);
                      setTest(!test);
                    }
                  }
                }}>
                {contentImage.map((val, i) => {
                  return (
                    <View key={i} style={styles.contents}>
                      <View style={styles.imageBox}>
                        <Image source={{uri: val}} style={styles.image} />
                      </View>
                      <View style={styles.newsBox}>
                        <Text style={styles.title}>
                          {newsData[i].newsTitle}
                        </Text>
                        <Text style={styles.summary}>{newsData[i].sumar}</Text>
                        <Text style={styles.date}>
                          {newsData[i].date}{' '}
                          <Icon name="tag" style={styles.date}></Icon>
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </ScrollView>
            </View>
          </View>
        </View>
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBox: {
    width: 138,
    height: 35,
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
    alignItems: 'center',
  },
  contentsBox: {
    width: 350,
    height: 440,
  },
  contents: {
    flexDirection: 'row',
    width: 350,
    height: 130,
    marginBottom: 23,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 110,
    height: 120,
    borderRadius: 10,
  },
  newsBox: {
    flex: 2,
    height: 110,
  },
  title: {
    flex: 2.5,
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
  summary: {
    flex: 3.5,
    fontSize: 10,
    marginTop: 10,
    fontWeight: 'bold',
  },
  date: {
    flex: 1,
    fontSize: 12,
    marginTop: 10,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default News;
