import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { PRIMARY_COLOR } from '../commons/color'

interface ButtonProps{
    title: string;
    onPress:()=>void;
}

export const ButtonComponent = ({title, onPress}:ButtonProps) => {
  return (
    <TouchableOpacity style={styles.boton}
        onPress={onPress}>
        <Text style={styles.textoBtn}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    boton: {
        width: 180,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'black',
        fontWeight: 'bold',
        alignItems: 'center',
        backgroundColor: '#eaa124',
        padding: 10,
        alignSelf:'center'
        
        
      },
    textoBtn: {
        color: 'white',
        fontWeight: 'bold',
        fontSize:20
      },
})