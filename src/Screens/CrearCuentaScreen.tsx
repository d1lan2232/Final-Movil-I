import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { ERROR_COLOR, PRIMARY_COLOR } from '../commons/color';
import { ButtonComponent } from '../components/ButtonComponent';
import { TitleComponent } from '../components/TitleComponent';
import { User } from '../Navigator/StackNavigator';
import { useNavigation } from '@react-navigation/native';
import { getIdNewUser, hasErrorFormRegister, showSnackBar, verifyExistUser } from '../commons/authValidations';
import { InputComponent } from '../components/InputComponent';


export interface RegisterForm{
    username: string;
    email: string;
    password: string;
    hasError: boolean;
}

interface RegisterProps{
    usersLogin:User[];
    setUsersLogin:(user:User)=>void;
}

export const CrearCuentaScreen = ({usersLogin, setUsersLogin}:RegisterProps) => {
    //Hook de navegación
    const navigation=useNavigation();

    //Hook - desencriptar el password
    const [hiddenPassword, setHiddenPassword] = useState(true);

    //Hook - control de los datos en el form
    const[form, setForm]=useState<RegisterForm>({
        username:'',
        email:'',
        password:'',
        hasError: false,
    });
    
    //Función para guardar los usuarios
    const handlerSaveUser=()=>{
        //Validar formulario
        if(hasErrorFormRegister(form)){ 
            setForm(prevState=>({
                ...prevState,
                hasError:true
            }))
            return;  
        }
        setForm(prevState=>({
            ...prevState,
            hasError:false
        }))

        const existUser=verifyExistUser(usersLogin, form);
        if(existUser){
            showSnackBar("El usuario ya se encuentra registrado", ERROR_COLOR)
            return;
        }

        //Usuario nuevo
        const newUser:User={
            id: getIdNewUser(usersLogin),
            ...form
        }

        //agregar el nuevo usario en el arreglo de usersLogin
        setUsersLogin(newUser)
        showSnackBar("Usuario registrado con éxito!", PRIMARY_COLOR)
        
        // Mostrar alerta de registro exitoso
        Alert.alert("Registro exitoso", "¡Usuario registrado con éxito!");

        //volver inicio sesión
        navigation.goBack();
    }

    //Función que cambie el valor del useState (form)
    const handlerChangeText=(name: string, value:string)=>{
        setForm(prevState=>({
            ...prevState,
            [name]:value,
        }))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textoCrear}>Crear una cuenta</Text>
            <Text style={styles.textoSolicitar}>Solicitaremos datos importantes para la creacion</Text>
            <View style={styles.container2}>

                <Text style={styles.textoEmail}>Email</Text>
                <InputComponent 
                    placeholder='Correo electrónico'
                    onChangeText={handlerChangeText}
                    name={'email'}
                    hasError={form.hasError}/>
                <Text style={styles.textoEmail}>Usuario</Text>
                <InputComponent 
                    placeholder='Usuario'
                    onChangeText={handlerChangeText}
                    name={'username'}
                    hasError={form.hasError}/>
                <Text style={styles.textoEmail}>Contraseña</Text>
                <InputComponent
                    placeholder='Password'
                    onChangeText={handlerChangeText}
                    name={'password'}
                    isPassword={hiddenPassword}
                    hasIcon={true}
                    accionIcon={()=>setHiddenPassword(!hiddenPassword)}
                    hasError={form.hasError}
                />
                <ButtonComponent title='Registrarse' onPress={handlerSaveUser} />
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:PRIMARY_COLOR,
        alignContent: 'center',
        padding: 10,
    },
    textoCrear:{
        color: '#FFF',
        fontSize: 30,
        padding: 10,
        left: 5,
        fontWeight: 'bold',
        top: 10,
    },
    textoSolicitar:{
        color: 'grey',
        left: 30,
        top: 15,
        fontStyle: 'italic'
    },
    container2:{
        backgroundColor: '#5a7ca7',
        width: '95%',
        height: '60%',
        borderWidth: 2,
        borderColor: 'black', 
        padding: 15,
        left: 10,
        top: 60,
        right: 10,
        bottom: 15,
        borderRadius: 25,
        elevation: 16, 

    },
    textoEmail:{
        color: 'black',
        top: 30,
        fontSize: 20,
        height:50
    },
})

export default CrearCuentaScreen;
