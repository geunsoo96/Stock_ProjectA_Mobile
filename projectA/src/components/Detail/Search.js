
import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import Header from '../../Layout/Header'
import { useState } from 'react'


export default function Search() {
  
  //search 값을 useState로 관리
  const [search, onChangeText] = React.useState('값')
  function onPress(){
    alert(search)
  }

  return (
    <View>
      <Header />
      <Text>search</Text>
      <View style={styles.container}>
        {/* onChageText 실행시 폼 입력값을 search 에 저장 */}
        <TextInput name="search" style={styles.textInput} placeholder={"검색어 입력"} value={search} onChangeText={text=>{
          onChangeText(text);
         
        }} onSubmitEditing={onPress}></TextInput>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'80%'
  },
  textInput:{
    borderWidth:0,
    width:300,
    fontSize:20,
    borderRadius:3,
    padding:15,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
  }
})