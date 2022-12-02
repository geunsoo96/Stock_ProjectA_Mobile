import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Main from './Layout/Main';
import Algorithm from './components/Algorithm/algorithm';
import News from './components/News/News.js';
import Detail from './components/Detail/Detail';
import Search from './components/Detail/search';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Main"
          screenOptions={{headerShown: false}}>
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Main" component={Main} />
          <Tab.Screen name="Algorithm" component={Algorithm} />
          <Tab.Screen name="News" component={News} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
