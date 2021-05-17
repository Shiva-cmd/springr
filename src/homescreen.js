/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, Text, View} from 'react-native';
export function HomeScreen(props) {
  return (
    <View style={{flex:1,justifyContent:'center',backgroundColor:'red'}}>
      <Text>HOMME </Text>
      <Button title="prsee me" onPress={()=>props.navigation.navigate('Homedeatl')}/>
    </View>
  );
}
export default HomeScreen;
