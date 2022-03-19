import React from 'react';
import { View, StyleSheet } from 'react-native';
import Footer from '../components/Folder/Footer';
import Header from '../components/Folder/Header';
import Login from '../components/Folder/Login';

{// TABTWOSCREEN
// import { StyleSheet } from 'react-native';
// import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';
}

// LOG-IN

export default function TabOneScreen() {
  return (
   // HEADER
    <View style={styles.container}>

    <View style={styles.head}>
    <Header />
    </View>

    <View style={styles.log}>
    <Login />
    </View>

    <View style={styles.foot}>
    <Footer />
    </View>

    </View>


    
    // TABTWOSCREEN-INSIDE
  );
}
    // TABTWOSCREEN-INSIDE
    // <View style={styles.container}>
    //   <Text style={styles.title}>Tab Two</Text>
    //   <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    //   <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    // </View>

const styles = StyleSheet.create({
  head: {
   flex: 2,
    justifyContent:'center',
    alignItems:'center'
  },
  container: {
    flex: 1,
    backgroundColor: 'wheat'
  },
  log:{
    flex: 2,
  },
foot:{
  flex:1,
  justifyContent:'flex-end',
  alignItems:'center',
  paddingBottom:15,
},
})

// TABTWOSCREEN
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });
