import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export const CompraScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.textoInicio}>Nuestros articulos </Text>
        <View style={styles.container2}>
            <View style={styles.articuloI}>
                <Image
                source={{uri: 'https://zaydeuniformes.com/wp-content/uploads/2018/06/222rabajo-1_Mesa-de-trabajo-1-300x300.png'}}
                style={styles.imagenes}/>
                <Text style={styles.texto}>Camisa Administrativa Beige </Text>
                <Text style={styles.textoPrecio}>$23.00 </Text>
            </View>
            <View style={styles.articuloI2}>
                <Image
                source={{uri: 'https://zaydeuniformes.com/wp-content/uploads/2018/06/66666_Mesa-de-trabajo-1-300x300.png'}}
                style={styles.imagenes}/>
                <Text style={styles.texto}>Pantalón Operativo Policía Verde</Text>
                <Text style={styles.textoPrecio}>$35.00</Text>
            </View>
            <View style={styles.articuloD}>
                <Image
                source={{uri: 'https://zaydeuniformes.com/wp-content/uploads/2018/06/traje-umo_Mesa-de-trabajo-1_Mesa-de-trabajo-12_Mesa-de-trabajo-1-300x300.png'}}
                style={styles.imagenes}/>
                <Text style={styles.texto}>Traje UMO Pantalón y Chaqueta</Text>
                <Text style={styles.textoPrecio}>$85.00</Text>
            </View>
            <View style={styles.articuloD2}>
                <Image
                source={{uri: 'https://zaydeuniformes.com/wp-content/uploads/2018/06/gorra-verde-oficial-1_Mesa-de-trabajo-1-300x300.png'}}
                style={styles.imagenes}/>
                <Text style={styles.texto}>Gorra Verde Oficial Policía Nacional</Text>
                <Text style={styles.textoPrecio}>$11.00</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding: 5
    },
    textoInicio:{
        fontSize: 35,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        top: 5
    },
    container2:{
        top: 20,
        backgroundColor: 'black',
        height: '92%',
        width: '100%',
        padding: 10,
        borderRadius: 15,
    },
    articuloI:{
        backgroundColor: 'white',
        height: '45%',
        width: '45%',
        elevation: 16,
        padding: 15,
        borderRadius: 10,
        top: 10,
        left: 5
    },
    imagenes:{
        width: '80%',
        height: '45%',
        alignSelf: 'center', 
        borderColor: 'white',
        borderWidth: 1, 
    },
    texto:{
        color: 'black',
        alignItems: 'center',
        top: 25,
        fontSize: 15,
    },
    textoPrecio:{
        color: 'black',
        fontSize: 25,
        alignSelf: 'center',
        top: 45
    },
    articuloI2:{
        backgroundColor: 'white',
        height: '45%',
        width: '45%',
        elevation: 16,
        padding: 15,
        top: 30,
        borderRadius: 10,
        left: 5
    },
    articuloD:{
        backgroundColor: 'white',
        height: '45%',
        width: '45%',
        elevation: 16,
        padding: 15,
        borderRadius: 10,
        bottom: 572,
        left: 198
    },
    articuloD2:{
        backgroundColor: 'white',
        height: '45%',
        width: '45%',
        elevation: 16,
        padding: 15,
        borderRadius: 10,
        bottom: 550,
        left: 198
    }

})