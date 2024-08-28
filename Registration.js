import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory'

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Basic validation
    if (!username || !email || !password) {
      Alert.alert('Please fill out all fields');
      return;
    }

    // Here you can add the registration logic, like making an API call

    Alert.alert('Registration Successful', `Welcome, ${username}!`);
  };

  return (
<KeyboardAccessoryView>
  <View>
    <TextInput />
  </View>
</KeyboardAccessoryView>
    
//    <>
//    <KeyboardAccessoryView style={styles.container}>

//       <Text style={styles.header}>Register</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Username"
//         value={username}
//         onChangeText={setUsername}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />

//       <Button title="Register" onPress={handleRegister} />
//       </KeyboardAccessoryView>
// </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

export default RegistrationForm;
