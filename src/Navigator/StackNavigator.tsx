import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../Screens/LoginScreen';
import { OlvidasteContra } from '../Screens/OlvidasteContra';
import { CrearCuentaScreen } from '../Screens/CrearCuentaScreen';
import { HomeScreen } from '../Screens/HomeScreen/HomeScreen';


import { useState } from 'react';

//Data de prueba
export interface User{
  id: number,
  email: string,
  password: string
}

const users:User[]=[
  {id:1,  email:'hola', password:'123456'},
  {id:2,  email:'caguas@gmail.com', password:'12345678'},
]

const Stack = createStackNavigator();


export const StackNavigator = () => {
  //Hook gestionar los usuarios registrados en el login
  const [usersLogin, setUsersLogin]=useState(users);

  //Función para agregar los nuevos usuarios desde el setUserLogin
  const handlerAddUser=(user: User)=>{
    setUsersLogin([...usersLogin, user])
  }
  return (
    <Stack.Navigator>
            <Stack.Screen name="LoginScreen" options={{headerShown:false}} children={()=><LoginScreen users={usersLogin}/>}/>
      <Stack.Screen name="OlvidasteContra" component={OlvidasteContra} />
      <Stack.Screen name="CrearCuentaScreen" component={CrearCuentaScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}