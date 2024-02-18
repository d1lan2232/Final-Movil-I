import React from 'react'
import { StyleSheet, Text, useWindowDimensions } from 'react-native'
import { PRIMARY_COLOR } from '../commons/color';

//indica las propiedades de nuestro componente reutilizable
interface TitleProps{
    title: string;
}

export const TitleComponent = ({title}:TitleProps) => {

  const{height}=useWindowDimensions();
    
  return (
    <Text style={{
        height:height*0.12,
        ...styles.title}}>{title}</Text>
  )
}


const styles=StyleSheet.create({
    title:{
        color:'white',
        fontSize:27,
        fontWeight:'bold',
        paddingHorizontal:30,
        paddingVertical:30,
        backgroundColor:PRIMARY_COLOR
    }
})