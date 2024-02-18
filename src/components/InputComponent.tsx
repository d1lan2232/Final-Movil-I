import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { ERROR_COLOR, INPUT_COLOR, PRIMARY_COLOR } from '../commons/color'



interface InputProps{
    placeholder: string;
    name: string;
    isPassword?: boolean;
    hasIcon?: boolean;
    hasError:boolean;
    onChangeText: (name: string, value: string) =>void;
    accionIcon?:()=>void;
}

export const InputComponent = ({placeholder, name, onChangeText, isPassword=false, hasIcon=false, accionIcon=()=>{}, hasError}:InputProps) => {
  return (
    <View>
        <TextInput
            placeholder={placeholder}
            keyboardType={'default'}
            style={(hasError)
                ?{...styles.inputText, ...styles.error}
                :{...styles.inputText}}
            onChangeText={(value: string)=>onChangeText(name, value)}
            secureTextEntry={isPassword}/>
        {
            (hasError)
            ?<Text style={styles.errorText}>El campo es obligatorio</Text>
            :null
        }
    </View>
  )
}

const styles=StyleSheet.create({
    
    inputText:{
        backgroundColor:INPUT_COLOR,
        paddingHorizontal:20,
        borderRadius:10,
        marginVertical:10
    },
    error:{
        borderColor:ERROR_COLOR,
        borderStyle: 'solid',
        borderWidth:1
    },
    errorText:{
        color:ERROR_COLOR,
        fontSize:12,
        fontWeight:'bold'
    },
    input:{
        borderColor: 'black',
        elevation: 16, 
        width: 55
    }
})