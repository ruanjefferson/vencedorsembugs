import React, {useState} from "react";
import { View,Text,TextInput,TouchableOpacity, Alert, StyleSheet, Image } from "react-native";

function IMC(peso, altura) {
  const result = peso / (altura * altura)
  if (result <18.5){
    Alert.alert(`${result}, Abaixo do peso`)
  }
  else if(result >=18.5 && result <=24.9) {
     Alert.alert(`${result}, Peso normal`)
  }
  else if(result >=25.0 && result <=29.9){
     Alert.alert(`${result}, Sobrepeso`)
  }
  else if(result >=30.0 && result <=34.9){
     Alert.alert(`${result}, Obesidade Grau 1`)
  }
  else if(result >=35.0 && result <= 39.9){
     Alert.alert(`${result}, Obesidade Grau 2`)
  }
  else if(result >40.0){
     Alert.alert(`${result} Obesidade Grau 3`)
  }
}

export default function App(){
  const [Peso, setPeso] = useState();
  const [Altura, setAltura] = useState();

  return(
    <View style={style.container}>

        <Image
          style={style.logo}
          source={require("./assets/4327775.png")}
          />

      <Text style={style.title}>Calcula IMC</Text>

      <Text style={style.label}>Peso</Text>
      <TextInput
      style={style.input}
      placeholder="Peso"
      value={Peso}
      onChangeText={setPeso}
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

      <TouchableOpacity style={style.button} onPress={() => IMC(Peso, Altura)}>
        <Text style={style.buttonText}>Calcula</Text>
      </TouchableOpacity>
    </View>
  );
}

  const style = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      backgroundColor: "#223A5C",
    },

    title:{
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
      color: "#fff",
    },

    label:{
      fontSize: 20,
      fontWeight: 'bold',
      color: "#fff",
      marginBottom: 8,
    },

    input:{
      width: '100%',
      height: 50,
      borderColor: '#ddd',
      borderWidth: 1,
      marginBottom: 15,
      paddingLeft: 10,
      borderRadius: 5,
    },

    button:{
      backgroundColor: 'black',
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