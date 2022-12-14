import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Main from './Layout/Main';
import Algorithm from './components/Algorithm/algorithm';
import News from './components/News/News';
import Detail from './components/Detail/Detail';
import Search from './components/Detail/Search';
import Lotto from './components/Algorithm/lotto';
// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Main"
          screenOptions={{headerShown: false}}>
          <Tab.Screen
            name="Detail"
            component={Detail}
            options={{
              title: '검색',
              tabBarIcon: ({color, size}) => (
                <Icon name="search" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Main"
            component={Main}
            options={{
              title: '메인',
              tabBarIcon: ({color, size}) => (
                <Icon name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Algorithm"
            component={Algorithm}
            options={{
              title: '추천',
              tabBarIcon: ({color, size}) => (
                <Icon name="recommend" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Lotto"
            component={Lotto}
            options={{
              title: '랜덤',
              tabBarIcon: ({color, size}) => (
                <Icon3 name="random" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="News"
            component={News}
            options={{
              title: '뉴스',
              tabBarIcon: ({color, size}) => (
                <Icon2 name="news" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
0;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
