import React from 'react';
import { useState } from "react";
import { View, Image, Text, Dimensions, TextInput, StyleSheet, Button, Alert, TouchableOpacity } from "react-native";
import LottieView from 'lottie-react-native';


export default function Login() {
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [loading, setLoading] = useState<boolean>(false)
   
    
    const LoginLoad = () => {
      const un = "appdevgroup";
      const pw = "password";
     setLoading(true)
     setTimeout(() => {
     setLoading(false)
      if (username === un && pw === password) {
        return Alert.alert("Message", "Successfully logged in.");
      }
      Alert.alert("Message", "Error log in.");
     }, 1500);
    }
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
              require('../../assets/lottie/96957-lock.json')
            }
            autoPlay
            />
          <View style={styles.un}>
          <TextInput placeholder='Username' style={styles.Txt}
          onChangeText={(value: string) => {
            setUsername(value);
          }}
          value={username}
          />
        </View>
        <View style={styles.un} >
          <TextInput placeholder='Password' secureTextEntry style={styles.Txt}
           onChangeText={(value: string) => {
            setPassword(value);
          }}
          value={password}
          />
        </View>
        
        <View  style={styles.btn}>
          <Button onPress = {LoginLoad}title='Log in'/>
        </View>
        
          </View>
          <View style={styles.Footer}>
          <TouchableOpacity>
            <Text style={styles.Txt}>Create an Account?</Text>
          </TouchableOpacity>
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
    },
    Txt:{
      width:'100%',
      textAlign:'center',
      color:'white',
      fontSize:20,
    },
  Footer:{
    justifyContent:'flex-end',
    paddingTop: 20,
  }
  })