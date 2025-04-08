import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image } from "react-native";



export default function App(){
  const[Base, SetBase] = useState('');
  const[Altura, setAltura] = useState('');
 
  function area(){
  const area = (Base * Altura) / 2;
    Alert.alert(`O resultado da area é: ${area}`);
    return area;
  }
  
  return(
    <View style={style.container}>
      
         
          <Image
          style={style.logo}
          source={require("./assets/calcular-area-triangulo.png")}
          />

    <Text style={style.title}>Vamos calcula a área do triangulo</Text>
    <Text style={style.label}>Base</Text>
    <TextInput
    style={style.input}
    placeholder="Base"
    value={Base}
    onChangeText={SetBase}
    keyboardType="numeric"
    />

    <Text style={style.label}>Altura</Text>
    <TextInput
    style={style.input}
    placeholder="Altura"
    value={Altura}
    onChangeText={setAltura}
    keyboardType="numeric"
    />

    <TouchableOpacity style={style.button} onPress={area}>
      <Text style={style.buttonText}>Calcula</Text>
    </TouchableOpacity>


  </View>
  );
}

  const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: 'black',
    },

    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#fff',
    },

    label:{
      color: '#fff',
      fontSize: 20,
      marginBottom: 10,
    },

    input: {
      width: '100%',
      height: 50,
      backgroundColor: '#fff',
      marginBottom: 20,
      paddingLeft: 10,
      borderRadius: 5,
    },

    button:{
      borderColor: '#4CAF50',
      paddingVertical: 10,
      paddingHorizontal: 40,
      borderRadius: 5,
      backgroundColor: '#fff'
    },

    buttonText:{
      fontSize: 18,
      fontWeight: 'bold',
    },
  });