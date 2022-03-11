import React from "react";
import { View, Image, Text, Dimensions, TextInput, StyleSheet, Button } from "react-native";
import LottieView from 'lottie-react-native';

export default function TabOneScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#AA1AD1',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      
      
      <View style={{
        height: Dimensions.get('screen').height * 0.5,
        width: '80%',
        backgroundColor: '#D46AF1',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <View>
          <Text style={{
            fontSize: 25,
            fontFamily:"poppins-semi-bold"
          }}>
            Log In
          </Text>
        </View>
        <LottieView style={{
            height:100,
            width:100
          }}
          source={
            require('../assets/lottie/96957-lock.json')
          }
          autoPlay
          />
        <View style={styles.un}>
        <TextInput placeholder='Username' style={{
          width:'100%',
        textAlign:'center',
        color:'white'
        }}>
        </TextInput>
      </View>

      <View style={styles.un}>
        <TextInput placeholder='Password' secureTextEntry style={{
          width:'100%',
        textAlign:'center',
        color:'white'
        }}>
        </TextInput>
      </View>

      <View  style={styles.btn}>
        <Button onPress = {() => alert('Logged in Successfully!') } title='Log in' color="#75228C">
        </Button>
      </View>
        </View>
    </View>
  );

}
 const styles = StyleSheet.create({
  textContainer:{
    height:'30%',
    width:'60%',
    backgroundColor:'white',
  },
  un:{
    height:'10%',
    fontFamily:'poppins-regular',
    width:'70%',
    backgroundColor:'#C854E8',
    padding: 10,
    marginTop:10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor:'white'
  },
  btn:{
    marginTop:10,
  },
  btnTouch:{
    marginTop:10,
    backgroundColor:'white',
    padding: 10,

  }
})


{/* <View style={styles.un}>
        <TextInput placeholder='Username'>
        </TextInput>
      </View>

      <View style={styles.un}>
        <TextInput placeholder='Password' secureTextEntry>
        </TextInput>
      </View>

      <View  style={styles.btn}>
        <Button onPress = {() => alert('Logged in Successfully!') } title='Log in' color="#75228C">
        </Button>
      </View> */}