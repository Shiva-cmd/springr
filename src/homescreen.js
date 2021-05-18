/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  Button,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

const HomeScreen = props => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    Api();
  }, []);
  async function Api() {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/sources?apiKey=d29d58aab88d4ea0b04ddb245a230068',
      );
      // console.log(response.data.sources);
     
      
      const propertyNames = Object.values(response.data.sources);
       setData(propertyNames);
      //  console.log(data)
      setloading(false);
    } catch (e) {
      console.log(e);
    }
  }
  
  return (
    <View style={{margin: 10, flex: 1}}>
      {loading ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            alignContent: 'center',
          }}>
          <ActivityIndicator size="large" color="blue"></ActivityIndicator>
        </View>
      ) : (
        <View>
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
          <ScrollView>
            {data.map((mp, j) => {
              
              
              return (
                <View key={j} style={{}}>
                  <TouchableOpacity
                    onPress={() =>
                      props.navigation.navigate('Homedeatl', {des:mp.description,name:mp.name})
                    }>
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
                  </TouchableOpacity>

                  <View
                    style={{
                      margin: 10,
                      justifyContent: 'center',
                    }}>
                    <Text style={{fontSize: 15}}>{mp.description}</Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
