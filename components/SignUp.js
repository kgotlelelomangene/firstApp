import React from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";

export default function  SignUp(){
    return(
        <View style={styles.container}>
            <Text>Sign Up</Text>
            <TextInput placeholder="Name"></TextInput>
            <TextInput placeholder="Email"></TextInput>
            <TextInput placeholder="Password"></TextInput>
            <TouchableOpacity><Text>Save</Text></TouchableOpacity>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });