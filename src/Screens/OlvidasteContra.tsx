import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { PRIMARY_COLOR } from '../commons/color';

export const OlvidasteContra = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.textoOlvidaste}>Olvidaste tu contraseña?</Text>
        <Text style={styles.textoAyudamos}>¡No te preocupes! Nos sucede a todos. Ingresa tu Email y te ayudaremos</Text>
        <View style={styles.container2}>
        <Text style={styles.textoEmail}>Email:</Text>
        <TextInput
            style={styles.formularioEmail}
            placeholder="Email"
            keyboardType="email-address"
        />
        </View>
        <TouchableOpacity style={styles.botonEnviar}>
            <Text style={styles.textoEnviar}>Solicitar</Text>
        </TouchableOpacity>
        <Text style={styles.textoPronto}>Pronto te llegará un correo!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:PRIMARY_COLOR,
        alignContent: 'center',
        padding: 5,
    },
    textoOlvidaste:{
        color: '#fff',
        fontSize: 25,
        padding: 10,
        left: 5,
        fontWeight: 'bold',
        top: '20%',
    },
    textoAyudamos:{
        color: 'grey',
        top: '22%',
        left: 10,
        fontStyle: 'italic',
        fontSize: 14,
        padding: 5,
        alignSelf: 'baseline',
    },
    container2:{
        backgroundColor: '#5a7ca7',
        width: '95%',
        height: '25%',
        borderWidth: 2,
        borderColor: 'black', 
        padding: 10,
        left: 10,
        top: '25%',
        right: 10,
        bottom: 15,
        borderRadius: 25,
        elevation: 16, 
    },
    textoEmail:{
        color: 'black',
        top: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    formularioEmail:{
        width: '90%',
        borderWidth: 1,
        padding: 15,
        alignSelf: 'center',
        top: 55,
        borderRadius: 30,
        backgroundColor: 'white',
        elevation: 16, 
    },
    botonEnviar:{
        width: 100,
        borderRadius: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        backgroundColor: '#81c784',
        padding: 10,
        top: '30%',
        borderWidth: 1,
        borderColor: 'black', 
    },
    textoEnviar:{
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    textoPronto:{
        alignSelf: 'center',
        top: '32%',
        color: 'grey',
        fontStyle: 'italic',
        fontSize: 15
    }
})