import Snackbar from "react-native-snackbar";
import { User } from "../navigator/StackNavigator";
import { LoginForm } from "../screens/LoginScreen";
import { CrearCuentaScreen } from '../screens/CrearCuentaScreen';



//Función para verificar si existe campos vacios
export const hasErrorFormLogin=(form: LoginForm)=>{
    return form.email == '' || form.password == '';
}

//Función para verificar si existe el usuario registrado
export const verifyExistUser=(users: User[], form: LoginForm)=>{
    return users.filter(user=>user.email == form.email)[0];
}

//Función para que el snackbar sea reutilizable
export const showSnackBar =(message: string, background: string)=>{
    Snackbar.show({
        text: message,
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor:background,
        textColor:'white'
    });
}

//Función para generar los ids de los nuevos usuarios
export const getIdNewUser=(users: User[])=>{
    const getIdUSer=users.map(user=>user.id);
    return Math.max(...getIdUSer)+1;
}