/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, Text, View, Image, Share} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
export function HomeScreendetail(props) {
  console.log(props.route.params);
  const event = new Date();
  const myIcon = <Icon name="rocket" size={30} color="#900" />;
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  let date = event.toLocaleDateString(undefined, options);
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          `${props.route.params.url}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      
    }
  };
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
      <TouchableOpacity onPress={() => console.log('KIKIs')}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            borderColor: 'black',
            borderWidth: 2,
            elevation: 2,
            marginHorizontal: 60,
          }}>
          <Text style={{fontSize: 16, fontWeight: '800'}}>Save</Text>
        </View>
      </TouchableOpacity>

      <View
        style={{
          margin: 10,
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 16, fontWeight: '400'}}>
          {props.route.params.des}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}>
        <View>
          <Text style={{fontSize: 16, fontWeight: '400'}}>
            {props.route.params.name}
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => onShare()}>
            <Icon name="share" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <Text>{date}</Text>
        </View>
      </View>
      <View>
        <Text></Text>
      </View>
    </View>
  );
}
export default HomeScreendetail;
