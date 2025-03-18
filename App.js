import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, Alert, StyleSheet, View } from 'react-native';

export default function App(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () =>{
    if (email === '' || password === ''){
      Alert.alert('Erro', 'Email ou senha incorreta!');
    }else{
      Alert.alert('Sucesso', 'Login realizado com sucesso');
    }
  };

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Login</Text>

      <TextInput
      style={styles.input}
      placeholder='Email'
      value={email}
      onChangeText={setEmail}
      keyboardType="email-address"
      />

      <TextInput
      style={styles.input}
      placeholder="Senha"
      Value={password}
      onChangeText={setPassword}
      secureTextEntry
      />

     <TouchableOpacity style={styles.button} onPress={handleLogin}>
      <Text>Entrar</Text>
     </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justyfyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title:{
    flex: 1,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input:{
    width: '100%',
    heigth: 50,
    boderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },
  button:{
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  buttonText:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
