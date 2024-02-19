import React, { useState } from 'react'
import { FlatList, Modal, View, Text, StyleSheet } from 'react-native';
import { TitleComponent } from '../../components/TitleComponent'
import { BodyComponent } from '../../components/BodyComponent'
import { CardProducts } from './components/CardProducts';
import { ModalCar } from './components/ModalCar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../commons/color';


export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  pathImage: string;
}


const products: Product[] = [
  { id: 1, name: 'Camisa Administrativa Beige', price: 23.00, stock: 10, pathImage: 'https://zaydeuniformes.com/wp-content/uploads/2018/06/222rabajo-1_Mesa-de-trabajo-1-300x300.png' },
  { id: 2, name: 'Traje UMO Pantalón y Chaqueta', price: 85.00, stock: 3, pathImage: 'https://zaydeuniformes.com/wp-content/uploads/2018/06/traje-umo_Mesa-de-trabajo-1_Mesa-de-trabajo-12_Mesa-de-trabajo-1-300x300.png' },
  { id: 3, name: 'Polo Operativa Policía Nacional', price: 26.00, stock: 15, pathImage: 'https://zaydeuniformes.com/wp-content/uploads/2018/06/2352_Mesa-de-trabajo-1-300x300.png' },
  { id: 4, name: 'Chompa Específica Delgada Policía Judicial/ Narcóticos', price: 1.20, stock: 20, pathImage: 'https://zaydeuniformes.com/wp-content/uploads/2018/06/9999_Mesa-de-trabajo-1-300x300.png' },
  { id: 5, name: 'Gorra A4 Plata', price: 35.70, stock: 9, pathImage: 'https://zaydeuniformes.com/wp-content/uploads/2018/06/gorra-4-plata-2222_Mesa-de-trabajo-1-300x300.png' },
  { id: 6, name: 'Zapatos de Charol Luigi Valdini', price: 45.00, stock: 20, pathImage: 'https://zaydeuniformes.com/wp-content/uploads/2018/06/charol_Mesa-de-trabajo-1-276x300.png' },
  { id: 7, name: 'Camisa Operativa con parches Holográficos', price: 29.00, stock: 9, pathImage: 'https://zaydeuniformes.com/wp-content/uploads/2018/06/33333_Mesa-de-trabajo-1-300x300.png' },

]


export interface Car{
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export const HomeScreen = () => {

  //Hook para actualizar el estado de los productos
  const [productsState, setProductsState] = useState(products);
  //Hook para capturar la lista de productos seleccionados
  const [cars, setCars] = useState<Car[]>([]);
  //Hook para gestionar el modal del car
  const [showModal, setShowModal] = useState(false);

  //Función para controlar el stock
  const handlerChangeStockProduct=(idProducto: number, quantity: number)=>{
    const updateStock=productsState.map(item=>item.id == idProducto
      ? {...item,
        stock:item.stock-quantity}
      : item);
    setProductsState(updateStock)
    //llamar función añadir carrito
    addProduct(idProducto, quantity)
  }

  //Función agregar en el carrito de compras
  const addProduct=(idProduct: number, quantity: number)=>{
    const product=productsState.find((item)=>item.id == idProduct);

    //si no existe el producto
    if(!product){
      return;
    }

    //si existe el producto
    const newCar: Car={
      id:product.id,
      name:product.name,
      price:product.price,
      quantity: quantity
    }
    //Añadir en el carrito
    setCars(prevCars=>[...prevCars, newCar])
    //console.log(cars);
    
  }


  
  return (
    <View>
      <View style={styles.heder} >
        <TitleComponent title='Productos' />
        
        <View style={styles.IconCar}>
        
        <View  style={styles.IconCar2}><Icon name={'shopping-cart'} size={27} color={'#fff'} onPress={() => setShowModal(!showModal)} /><Text style={styles.IconCar2}>{cars.length}</Text></View>
        
        </View>
      </View>
      <BodyComponent>
        <FlatList
          data={productsState}
          renderItem={({ item }) => <CardProducts product={item} handlerChangeStockProduct={handlerChangeStockProduct} />}
          keyExtractor={item => item.id.toString()} />
      </BodyComponent>
      <ModalCar cars={cars} isVisible={showModal} changeVisible={() => setShowModal(!showModal)} />
    </View>
  )
}

const styles = StyleSheet.create({
  heder: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:PRIMARY_COLOR
  },IconCar2:{
   backgroundColor:PRIMARY_COLOR
   ,fontSize:30,
   color:'#fff',
   textAlign:'center'
  },
  IconCar:{
    flex:1,
     alignItems:'flex-end',
     paddingHorizontal:33
  }
})

