import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
export default function Footer(){
    return (
        <View>
            <TouchableOpacity>
                <Text style={styles.foot} onPress ={() => Alert.alert("Message", "Create Account")} >
                    Create an Account?
                </Text>
            </TouchableOpacity>
        </View>
    
    )
    }
    const styles = StyleSheet.create({
        foot:{
            fontFamily:'poppins-regular',
            fontSize: 18,
            color: 'black'
        }
    
    })