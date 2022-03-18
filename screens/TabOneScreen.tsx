import React from 'react';
import { View, StyleSheet } from 'react-native';
import Footer from '../components/Folder/Footer';
import Header from '../components/Folder/Header';
import Login from '../components/Folder/Login';

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
  
  
  
  )
}
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