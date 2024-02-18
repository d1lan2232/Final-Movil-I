import React, { useState } from 'react'
import { FlatList, View } from 'react-native'
import { TitleComponent } from '../../components/TitleComponent'
import { BodyComponent } from '../../components/BodyComponent'
import { CardProducts } from './components/CardProducts';

export interface Product{
  id: number;
  name: string;
  price:number;
  stock:number;
  pathImage:string;
}


const products:Product[]=[
  {id:1, name: 'Camisa Administrativa Beige',price:23.00, stock:10, pathImage:'https://zaydeuniformes.com/wp-content/uploads/2018/06/222rabajo-1_Mesa-de-trabajo-1-300x300.png'},
  {id:2, name: 'Traje UMO Pantalón y Chaqueta',price:85.00, stock:0, pathImage:'https://zaydeuniformes.com/wp-content/uploads/2018/06/traje-umo_Mesa-de-trabajo-1_Mesa-de-trabajo-12_Mesa-de-trabajo-1-300x300.png'},
  {id:3, name: 'Polo Operativa Policía Nacional',price:26.00, stock:15, pathImage:'https://zaydeuniformes.com/wp-content/uploads/2018/06/2352_Mesa-de-trabajo-1-300x300.png'},
  {id:4, name: 'Chompa Específica Delgada Policía Judicial/ Narcóticos',price:1.20, stock:20, pathImage:'https://zaydeuniformes.com/wp-content/uploads/2018/06/9999_Mesa-de-trabajo-1-300x300.png'},
  {id:5, name: 'Gorra A4 Plata',price: 35.70, stock:9, pathImage:'https://zaydeuniformes.com/wp-content/uploads/2018/06/gorra-4-plata-2222_Mesa-de-trabajo-1-300x300.png'},
  {id:6, name: 'Zapatos de Charol Luigi Valdini', price:45.00, stock:20, pathImage:'https://zaydeuniformes.com/wp-content/uploads/2018/06/charol_Mesa-de-trabajo-1-276x300.png'},
  {id:7, name: 'Camisa Operativa con parches Holográficos', price:29.00, stock:9, pathImage:'https://zaydeuniformes.com/wp-content/uploads/2018/06/33333_Mesa-de-trabajo-1-300x300.png'},

]

export const HomeScreen = () => {

  //hook que actualice el estado de los productos
  const [productsState,setProductsState] =useState(products);

  //
  const handlerChangeStockProduct=(idProduct:number, quantity:number)=>{

    const updateStock=productsState.map(item=>item.id == idProduct
      ?{...item,
      stock:item.stock-quantity}
      :item);
      setProductsState(updateStock)
  }
  return (
    <View>
        <TitleComponent title='Productos'/>
        <BodyComponent>
          <FlatList
          data={productsState}
          renderItem={({item})=><CardProducts product={item} handlerChangeStockProduct={handlerChangeStockProduct}/>}
          keyExtractor={item => item.id.toString()}/>
        </BodyComponent>
    </View>
  )
}


