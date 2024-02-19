import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { ERROR_COLOR, INPUT_COLOR, PRIMARY_COLOR } from '../commons/color'
import Icon from 'react-native-vector-icons/MaterialIcons'

interface InputProps{
    placeholder: string;
    name: string;
    onChangeText: (name: string, value: string)=>void;
    isPassword?: boolean;
    hasIcon?: boolean;
    accionIcon?:()=>void;
    hasError:boolean;
}

export const InputComponent = ({placeholder, name, onChangeText, isPassword=false, hasIcon=false, accionIcon=()=>{}, hasError}:InputProps) => {
  return (
    <View>
        <TextInput
            placeholder={placeholder}
            keyboardType='default'
            style={(hasError)
                    ?{...styles.inputText, ...styles.error}
                    :{...styles.inputText}}
            onChangeText={(value: string)=>onChangeText(name, value)}
            secureTextEntry={isPassword}/>
        {
            (hasIcon)
            ?<Icon style={styles.icon} name='visibility'size={20} color={PRIMARY_COLOR} onPress={accionIcon}/>
            :null
        }
        
        {
            (hasError)
            ?<Text style={styles.errorText}>El campo es oblogatorio</Text>
            :null
        }
    </View>
  )
}

const styles=StyleSheet.create({
    
    inputText:{
        width:350,
        backgroundColor:INPUT_COLOR,
        paddingHorizontal:20,
        borderRadius:10,
        marginVertical:10
        ,alignSelf:'center'
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
    },
    icon:{
        position:'absolute',
        right:50,
        marginTop:20
    },
})