
import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ModalProduct } from './ModalProduct';
import { Product } from '../HomeScreen';


interface Props{
  product:Product;
  handlerChangeStockProduct:(idProduct:number,quantity:number)=>void;
}
export const CardProducts = ({product,handlerChangeStockProduct}:Props) => {
   const [showModal, setShowModal]=useState(false);
  return (
    <View>
    <TouchableOpacity onPress={()=>setShowModal(!showModal)}>
    <View style={styles.root}>
        <Image source={{uri:product.pathImage}} style={styles.image}/>
        <View>
        <Text style={styles.title}>{product.name}</Text>
        <Text>Precio: ${product.price.toFixed(2)}</Text>
        </View>
        <View style={styles.icon}>
             
        </View>
    </View>
    </TouchableOpacity>
    <ModalProduct product={product} isVisible={showModal} changeVisible={()=>setShowModal(!showModal)} handlerChangeStockProduct={handlerChangeStockProduct}/>
    </View>

  )
}

const styles=StyleSheet.create({
    root:{
        
       // textAlign:'center',
        padding:10,
        borderStyle:'solid',
        borderColor:'black',
        borderWidth:4,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 3,
        },
        marginBottom:35,
        backgroundColor:'white'
    },
    image:{
        width:150,
        height:150,
        textAlign:'justify'
        ,alignSelf:'center'
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        color:'#000'
    },
    icon:{
        flex:1,
        alignItems:'flex-end',

    }
})
