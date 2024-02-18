import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { PRIMARY_COLOR } from '../commons/color';

export const CrearCuentaScreen = () => {
   
  return (
    <View style={styles.container}>
        <Text style={styles.textoCrear}>Crear una cuenta</Text>
        <Text style={styles.textoSolicitar}>Solicitaremos datos importantes para la creacion</Text>
        <View style={styles.container2}>
            <Text style={styles.textoNombre}>Nombre:</Text>
            <TextInput
            style={styles.formulario}
            placeholder="Nombre"
            keyboardType="email-address"
            />
            <Text style={styles.textoEmail}>Email</Text>
            <TextInput
            style={styles.formularioEmail}
            placeholder="Email"
            keyboardType="email-address"
            />
            <Text style={styles.textoContra}>Contaseña:</Text>
            <TextInput
            style={styles.cuadroPass}
            placeholder="Contraseña"
            secureTextEntry={true}
            />
            <Text style={styles.textoConfContra}>Confirmar contraseña:</Text>
            <TextInput
            style={styles.cuadroConfPass}
            placeholder="Contraseña"
            secureTextEntry={true}
            />
            <Text style={styles.mayorEdad}>Al dar click en "crear" usted indica ser mayor de edad</Text>
            <TouchableOpacity style={styles.boton}>
            <Text style={styles.textoBoton}>Volver</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boton2}>
            <Text style={styles.textoBoton}>Crear</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:PRIMARY_COLOR,
        alignContent: 'center',
        //alignItems: 'center',
        padding: 10,
    },
    textoCrear:{
        color: '#FFF',
        fontSize: 30,
        padding: 10,
        left: 5,
        fontWeight: 'bold',
        top: 10,
        
    },
    textoSolicitar:{
        color: 'grey',
        left: 30,
        top: 15,
        fontStyle: 'italic'
    },
    container2:{
        backgroundColor: '#5a7ca7',
        width: '95%',
        height: '75%',
        borderWidth: 2,
        borderColor: 'black', 
        padding: 15,
        left: 10,
        top: 60,
        right: 10,
        bottom: 15,
        borderRadius: 25,
        elevation: 16, 
    },
    formulario:{
        width: '80%',
        borderWidth: 1,
        padding: 15,
        alignSelf: 'center',
        top: 10,
        borderRadius: 30,
        backgroundColor: 'white',
        elevation: 16, 
    },
    textoNombre:{
        color: 'black',
        fontSize: 15,
    },
    textoEmail:{
        color: 'black',
        top: 30,
        fontSize: 15,
    },
    formularioEmail:{
        width: '80%',
        borderWidth: 1,
        padding: 15,
        alignSelf: 'center',
        top: 35,
        borderRadius: 30,
        backgroundColor: 'white',
        elevation: 16, 
    },
    textoContra:{
        color: 'black',
        top: 55,
        fontSize: 15,
    },
    cuadroPass:{
        width: '80%',
        borderWidth: 1,
        padding: 15,
        alignSelf: 'center',
        top: 70,
        borderRadius: 30,
        backgroundColor: 'white',
        elevation: 16, 
    },
    textoConfContra:{
        color: 'black',
        top: 90,
        fontSize: 15,
    },
    cuadroConfPass:{
        width: '80%',
        borderWidth: 1,
        padding: 15,
        alignSelf: 'center',
        top: 110,
        borderRadius: 30,
        backgroundColor: 'white',
        elevation: 16, 
    },
    mayorEdad:{
        top: 135,
        fontStyle: 'italic',
        alignSelf: 'center'
    },
    boton:{
        width: 100,
        borderRadius: 25,
        fontWeight: 'bold',
        alignItems: 'center',
        backgroundColor: '#e57373',
        padding: 10,
        top: 140,
        left: 10,
        borderWidth: 1,
        borderColor: 'black', 
    },
    boton2:{
        width: 100,
        borderRadius: 25,
        fontWeight: 'bold',
        alignItems: 'center',
        backgroundColor: '#81c784',
        padding: 10,
        top: 100,
        left: 230,
        borderWidth: 1,
        borderColor: 'black', 
    },
    textoBoton:{
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})
