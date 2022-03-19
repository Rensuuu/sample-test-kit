import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import LottieView from 'lottie-react-native';

// REGISTRATION-SCREEN

export default function TabTwoScreen() {
const [name, setName] = useState<string>()
const [surname, setSurname] = useState<string>()
const [username, setUsername] = useState<string>()
const [email, setEmail] = useState<string>()
const [password, setPassword] = useState<string>()
const [cpassword, setCpassword] = useState<string>()

const ErrorReg = () => {
    const nulltxt = ""
    if (name === nulltxt || surname === nulltxt || email === nulltxt || password === nulltxt || cpassword === nulltxt || username === nulltxt) {
        return Alert.alert("Message", "Please input all necessary data");
      }
       Alert.alert("Message", "Successfully Registered!");
}
return (



<View style={styles.container}>
    {/* HEADER */}
    <View style={styles.head}>
         <LottieView style={styles.lottieHead}
            source={
              require('../assets/lottie/68766-register.json')
            }
            autoPlay
            />
    </View>

    {/* REGISTER */}
    <View style={styles.register}>

        <Text style={{
            fontFamily:'poppins-semi-bold',
            fontSize: 40,
            alignItems:'center'
        }}>
            Registration Screen
        </Text>
        <View style={styles.txtContainer}>
            <TextInput 
            label='Please type your name'
            style={styles.regContainer}
            autoComplete={false} 
            mode={'outlined'}
            onChangeText={(value: string) => {
            setName(value);
            }}
            value={name}
            />
        </View>
        <View style={styles.txtContainer}>
            <TextInput 
            label='Please type your surname'
            style={styles.regContainer}
            autoComplete={false} 
            mode={'outlined'}
            onChangeText={(value: string) => {
            setSurname(value);
            }}
            value={surname}
            />
        </View>
        <View style={styles.txtContainer}>
            <TextInput 
            label='Type e-mail address here'
            style={styles.regContainer}
            autoComplete={false} 
            mode={'outlined'}
            onChangeText={(value: string) => {
            setEmail(value);
            }}
            value={email}
            />
        </View>
        <View style={styles.txtContainer}>
            <TextInput 
            label='Type your username'
            style={styles.regContainer}
            autoComplete={false} 
            mode={'outlined'}
            onChangeText={(value: string) => {
            setUsername(value);
            }}
            value={username}
            />
        </View>
        <View style={styles.txtContainer}>
            <TextInput 
            label='Type your password'
            style={styles.regContainer} 
            autoComplete={false}
            mode={'outlined'}
            onChangeText={(value: string) => {
            setPassword(value);
            }}
            value={password}
            secureTextEntry
            />
        </View>
        <View style={styles.txtContainer}>
            <TextInput 
            label='Confirm password'
            style={styles.regContainer}
            autoComplete={false} 
            mode={'outlined'}
            onChangeText={(value: string) => {
            setCpassword(value);
            }}
            value={cpassword}
            secureTextEntry
            />
        </View>

        <View style={styles.toContainer}>
            <TouchableOpacity onPress={ErrorReg}>
                <Text style={{
                    fontSize:25,
                    fontFamily:'poppins-semi-bold'
                }}>
                    Register
                </Text>
            </TouchableOpacity>
        </View>
    </View>

     {/* FOOTER */}
    <View style={styles.foot}>
        <Text style={styles.footerTxt}>App Dev</Text>
    </View>
</View>
)
}
const styles = StyleSheet.create({
    container:{
    height: Dimensions.get('screen').height,
    backgroundColor:'wheat',
    },
    regContainer:{
    color:'black',
    fontSize:16,
    fontFamily:'poppins-regular',
    height: 50,
    },
    head:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    register:{
        flex:3,
        justifyContent:'center',
        alignItems:'center',
    },
    foot:{
        flex:.5,
        justifyContent:'flex-end',
        alignItems:'center',
    },
    txtContainer:{
        height:50,
        fontFamily:'poppins-regular',
        width:280,
        marginTop:20,
    },
    toContainer:{
    color:'black',
    marginTop:40,
    height:48,
    width: 120,
    backgroundColor:'#F9EDEB',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15,
    borderColor:'black',
    borderWidth:1
    },
    lottieHead:{
        marginTop:15,
    },
    footerTxt:{
    fontFamily:'poppins-bold', 
    fontSize:14,
    paddingBottom:7
    }
})

// TABONE-ORIG
// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import Footer from '../components/Folder/Footer';
// import Header from '../components/Folder/Header';
// import Login from '../components/Folder/Login';
// export default function TabTwoScreen() {
// return (
//   // HEADER
//   <View style={styles.container}>
//     <View style={styles.head}>
//       <Header />
//     </View>
//     <View style={styles.log}>
//       <Login />
//     </View>
//     <View style={styles.foot}>
//     <Footer />
//     </View>
//   </View>
//   )
// }
// const styles = StyleSheet.create({
//   head: {
//    flex: 2,
//     justifyContent:'center',
//     alignItems:'center'
//   },
//   container: {
//     flex: 1,
//     backgroundColor: 'wheat'
//   },
//   log:{
//     flex: 2,
//   },
// foot:{
//   flex:1,
//   justifyContent:'flex-end',
//   alignItems:'center',
//   paddingBottom:15,
// },
// })