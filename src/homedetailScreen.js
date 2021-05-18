/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, Text, View, Image} from 'react-native';
export function HomeScreendetail(props) {
  console.log(props)
  return (
    <View style={{flex: 1, margin: 10}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <Text style={{color: 'black', fontSize: 18, fontWeight: '700'}}>
          News
        </Text>
      </View>
      <View>
        <Image
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
          style={{
            width: '100%',
            height: 150,
            resizeMode: 'stretch',
          }}></Image>
      </View>
      <View>
        <Button title="Share"></Button>
      </View>
      <View>
        <Text>HOMME DETAIL</Text>
      </View>
      <View>
        <View>
          <Text>name</Text>
        </View>
        <View>
          <Text>share</Text>
        </View>
        <View>
          <Text>Daete</Text>
        </View>
      </View>
      <View>
        <Text>Descriptio</Text>
      </View>
    </View>
  );
}
export default HomeScreendetail;
