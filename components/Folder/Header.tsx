import React from 'react';
import { View, StyleSheet } from "react-native";
import LottieView from 'lottie-react-native';

export default function Header(){
return (
    <View>
        <LottieView style={styles.Header}
            source={
              require('../../assets/lottie/39476-login-screen.json')
            }
            autoPlay
            />
    </View>

)
}

const styles = StyleSheet.create({
    Header:{
    height:'100%',
    width:'100%'
    }

})