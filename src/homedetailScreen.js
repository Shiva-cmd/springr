/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import CameraRoll from '@react-native-community/cameraroll';
import RNFetchBlob from 'rn-fetch-blob';
import {
  Button,
  Text,
  View,
  Platform,
  Image,
  Share,
  ActivityIndicator,
  Alert,
  PermissionsAndroid,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {WebView} from 'react-native-webview';
export function HomeScreendetail(props) {
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState('');
  const event = new Date();
  const [state, setState] = useState({
    url: 'https://static9.depositphotos.com/1011646/1236/i/600/depositphotos_12369509-stock-photo-breaking-news-screen.jpg',
    saving: false,
  });
  const myIcon = <Icon name="rocket" size={30} color="#900" />;
  const options = {
    // weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  console.log(props.route.params.url);
  let date = event.toLocaleDateString(undefined, options);
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `${props.route.params.url}`,
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
    } catch (error) {}
  };
  const handleDownload = async () => {
    console.log('IKI');
    // if device is android you have to ensure you have permission
    if (Platform.OS === 'android') {
      const granted = await getPermissionAndroid();
      if (!granted) {
        return;
      }
    }
    setState({saving: true});
    RNFetchBlob.config({
      fileCache: true,
      appendExt: 'jpg',
    })
      .fetch(
        'GET',
        'https://static9.depositphotos.com/1011646/1236/i/600/depositphotos_12369509-stock-photo-breaking-news-screen.jpg',
      )
      .then(res => {
        CameraRoll.save(res.data, 'photo')
          .then(() => {
            Alert.alert(
              'Save remote Image',
              'Image Saved Successfully',
              [{text: 'OK', onPress: () => console.log('OK Pressed')}],
              {cancelable: false},
            );
          })
          .catch(err => {
            Alert.alert(
              'Save remote Image',
              'Failed to save Image: ' + err.message,
              [{text: 'OK', onPress: () => console.log('OK Pressed')}],
              {cancelable: false},
            );
          })
          .finally(() => setState({saving: false}));
      })
      .catch(error => {
        setState({saving: false});
        Alert.alert(
          'Save remote Image',
          'Failed to save Image: ' + error.message,
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );
      });
  };
  const getPermissionAndroid = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Image Download Permission',
          message: 'Your permission is required to save images to your device',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      }
      Alert.alert(
        'Save remote Image',
        'Grant Me Permission to save Image',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    } catch (err) {
      Alert.alert(
        'Save remote Image',
        'Failed to save Image: ' + err.message,
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    }
  };
  console.log(props);
  return (
    <View style={{flex: 1, margin: 10, backgroundColor: 'white'}}>
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
            uri: 'https://static9.depositphotos.com/1011646/1236/i/600/depositphotos_12369509-stock-photo-breaking-news-screen.jpg',
          }}
          style={{
            width: '100%',
            height: 150,
            resizeMode: 'stretch',
          }}
        />
      </View>
      <TouchableOpacity onPress={() => handleDownload()}>
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
            <Icon name="share" size={25} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <Text>{date}</Text>
        </View>
      </View>
      <WebView source={{uri: props.route.params.url}} />
    </View>
  );
}
export default HomeScreendetail;

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   StatusBar,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   Platform,
//   PermissionsAndroid,
//   Alert,
//   ActivityIndicator,
//   ScrollView,
// } from 'react-native';
// import CameraRoll from '@react-native-community/cameraroll';
// import RNFetchBlob from 'rn-fetch-blob';

// class HomeScreendetail extends React.Component {
//   state = {
//     url: 'https://static9.depositphotos.com/1011646/1236/i/600/depositphotos_12369509-stock-photo-breaking-news-screen.jpg',
//     saving: false,
//   };

//   updateUrl = url => {
//     this.setState({url});
//   };

//   getPermissionAndroid = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//         {
//           title: 'Image Download Permission',
//           message: 'Your permission is required to save images to your device',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         },
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         return true;
//       }
//       Alert.alert(
//         'Save remote Image',
//         'Grant Me Permission to save Image',
//         [{text: 'OK', onPress: () => console.log('OK Pressed')}],
//         {cancelable: false},
//       );
//     } catch (err) {
//       Alert.alert(
//         'Save remote Image',
//         'Failed to save Image: ' + err.message,
//         [{text: 'OK', onPress: () => console.log('OK Pressed')}],
//         {cancelable: false},
//       );
//     }
//   };

//   handleDownload = async () => {
//     // if device is android you have to ensure you have permission
//     if (Platform.OS === 'android') {
//       const granted = await this.getPermissionAndroid();
//       if (!granted) {
//         return;
//       }
//     }
//     this.setState({saving: true});
//     RNFetchBlob.config({
//       fileCache: true,
//       appendExt: 'png',
//     })
//       .fetch('GET', this.state.url)
//       .then(res => {
//         CameraRoll.save(res.data, 'photo')
//           .then(() => {
//             Alert.alert(
//               'Save remote Image',
//               'Image Saved Successfully',
//               [{text: 'OK', onPress: () => console.log('OK Pressed')}],
//               {cancelable: false},
//             );
//           })
//           .catch(err => {
//             Alert.alert(
//               'Save remote Image',
//               'Failed to save Image: ' + err.message,
//               [{text: 'OK', onPress: () => console.log('OK Pressed')}],
//               {cancelable: false},
//             );
//           })
//           .finally(() => this.setState({saving: false}));
//       })
//       .catch(error => {
//         this.setState({saving: false});
//         Alert.alert(
//           'Save remote Image',
//           'Failed to save Image: ' + error.message,
//           [{text: 'OK', onPress: () => console.log('OK Pressed')}],
//           {cancelable: false},
//         );
//       });
//   };

//   render() {
//     const {url, saving} = this.state;
//     return (
//       <>
//         <StatusBar barStyle="dark-content" />
//         <SafeAreaView style={styles.container}>
//           <ScrollView>
//             <View style={styles.app}>
//               {saving ? (
//                 <View style={styles.loader}>
//                   <ActivityIndicator size="large" />
//                 </View>
//               ) : (
//                 <>
//                   <Image source={{uri: url}} style={styles.imagePreview} />
//                   <TouchableOpacity
//                     style={styles.downloadButton}
//                     onPress={this.handleDownload}>
//                     <Text>Download Image</Text>
//                   </TouchableOpacity>

//                 </>
//               )}

//             </View>
//           </ScrollView>
//         </SafeAreaView>
//       </>
//     );
//   }
// }

// export default HomeScreendetail;

// const styles = StyleSheet.create({
//   container: {
//     // backgroundColor: '#2FF345CC',
//     flex: 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//   },
//   app: {
//     // backgroundColor: '#11131B',
//     flex: 1,
//     alignSelf: 'stretch',
//     alignItems: 'center',
//     paddingVertical: 30,
//   },
//   headerText: {
//     marginTop: 50,
//     fontSize: 26,
//     color: 'white',
//   },
//   textInputWrapper: {
//     marginTop: 30,
//     alignSelf: 'stretch',
//     padding: 10,
//   },
//   textInput: {
//     padding: 10,
//     backgroundColor: '#EFEFEF',
//     borderWidth: 1,
//     borderColor: '#DDD',
//     borderRadius: 3,
//   },
//   imagePreview: {
//     height: 300,
//     width: 300,
//     backgroundColor: 'purple',
//     marginTop: 30,
//   },
//   downloadButton: {
//     backgroundColor: 'white',
//     marginTop: 40,
//     paddingHorizontal: 40,
//     paddingVertical: 20,
//     borderRadius: 3,
//   },
//   loader: {
//     flex: 1,
//     justifyContent: 'center',
//   },
// });
