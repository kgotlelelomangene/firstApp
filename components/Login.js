import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Welcome!</Text>
      <View>
        <TextInput placeholder="Email/ Username"></TextInput>
        <TextInput placeholder="Password"></TextInput>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>

      <Text>no account? Signup here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
