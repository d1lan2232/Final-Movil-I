import React, { useState } from 'react';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { hasErrorFormLogin, showSnackBar, verifyExistUser } from '../commons/authValidations';
import { User } from '../Navigator/StackNavigator';
import { ERROR_COLOR } from '../commons/color';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';


export interface LoginForm {
  email: string;
  password: string;
  hasError: boolean;
}
interface LoginProps {
  users: User[]
}
//interface Props extends StackScreenProps<any,any>{};

export const LoginScreen = ({ users }: LoginProps) => {

  //Hook de navegación
  const navigation = useNavigation();

  //Hook - control de los datos en el form
  const [form, setForm] = useState<LoginForm>({
    email: '',
    password: '',
    hasError: false,
  });

  //const [numero, setNumero] = useState(0);

  //Hook - desencriptar el password
  const [hiddenPassword, setHiddenPassword] = useState(true);

  //Función que cambie el valor del useState (form)
  const handlerChangeText = (name: string, value: string) => {
    console.log(name);
    console.log(value); 
    setForm(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  //Funcion que envie los datos del formulario
  const handlerSendInfo = () => {
    //Validar formulario
    if (hasErrorFormLogin(form)) {
      setForm(prevState => ({
        ...prevState,
        hasError: true
      }))
      return;
    }
    setForm(prevState => ({
      ...prevState,
      hasError: false
    }))

    // llamar función que verifica si el usuario existe en el arreglo
    const existUser = verifyExistUser(users, form);
    if (!existUser || existUser.password != form.password) {
      showSnackBar("email y/o contraseña incorrecta!", ERROR_COLOR);
      return;
    }
    //console.log(form);
    navigation.dispatch(CommonActions.navigate({ name: 'HomeScreen' }))

  }

  return (
    <View style={styles.container}>
      <Text style={styles.textoHola}>SAFE UNIFORMS</Text>
      <Text style={styles.textoIngresa}>Ingresa a tu cuenta:</Text>
      <InputComponent
        placeholder='email'
        onChangeText={handlerChangeText}
        name={'email'}
        hasError={form.hasError} 
        />
      <InputComponent
        placeholder='Contraseña'
        name={'password'}
        onChangeText={handlerChangeText}
        isPassword={hiddenPassword}
        hasIcon={true}
        accionIcon={() => setHiddenPassword(!hiddenPassword)}
        hasError={form.hasError}
      />
      <TouchableOpacity 
            onPress={()=>navigation.dispatch(CommonActions.navigate({name:'OlvidasteContra'}))}>
            <Text style={styles.textoCrear}>Olvidaste tu contraseña?</Text>
     </TouchableOpacity>

     <ButtonComponent title='Iniciar Sesión' onPress={handlerSendInfo}/>

      <TouchableOpacity 
            onPress={()=>navigation.dispatch(CommonActions.navigate({name:'CrearCuentaScreen'}))}>
            <Text style={styles.textoCrear}>Crear tu cuenta</Text>
     </TouchableOpacity>
 </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#014aa4',
    alignContent: 'center',
    // alignItems: 'center',
  },
  textoHola: {
    fontSize: 48,
    color: '#ffff',
    padding: 5,
    marginTop: '50%',
    left: 20,
    fontWeight: 'bold',
    bottom: 15,
  },
  textoIngresa: {
    fontSize: 18,
    color: 'gray',
    left: 38,
    bottom: 10,
  },
  cuadroEmail: {
    width: '80%',
    borderWidth: 1,
    padding: 15,
    alignSelf: 'center',
    top: 20,
    borderRadius: 30,
    backgroundColor: 'white',
    elevation: 16,
  },
  cuadroPass: {
    width: '80%',
    borderWidth: 1,
    padding: 15,
    alignSelf: 'center',
    top: 37,
    borderRadius: 30,
    backgroundColor: 'white',
    elevation: 16,
  },
  textoO: {
    fontSize: 15,
    color: 'blue',
    alignSelf: 'center',
    top: 70,
  },
  boton: {
    width: 100,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'black',
    fontWeight: 'bold',
    alignItems: 'center',
    backgroundColor: '#1d2e68',
    padding: 10,
    top: 95,
    left: '38%',
  },
  textoBtn: {
    color: 'white',
    fontWeight: 'bold',
  },
  textoCrear: {
    color: '#ffff',
    alignSelf: 'center',
    top: 150,
    fontSize:15

  },
});
