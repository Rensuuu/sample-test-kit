import React from 'react';
import { useState } from "react";
import { View, TextInput, StyleSheet, Button, Alert, } from "react-native";

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
    <View style={styles.logContainer}
    >
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
          <Button onPress = {LoginLoad}title='     Log in     ' color='gray' />
        </View>

    </View>
    )
    ;}
        
    const styles = StyleSheet.create({
        un:{
            height:50,
            fontFamily:'poppins-regular',
            width:280,
            backgroundColor:'white',
            padding: 10,
            marginTop:10,
            borderRadius: 20,
            borderWidth: 1,
            borderColor:'white',
            
          },
          btn:{
            marginTop:10,
          },
          Txt:{
            // width:100,
            textAlign:'center',
            color:'black',
            fontSize:20,
          },
          logContainer:{
                flex: 1,
                backgroundColor: 'wheat',
                alignItems: 'center',
                justifyContent: 'center',
            
          }
    })