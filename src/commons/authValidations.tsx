import Snackbar from "react-native-snackbar";
import { User } from "../navigator/StackNavigator";
import { LoginForm } from "../screens/LoginScreen";
import { RegisterForm } from "../Screens/CrearCuentaScreen";



//campos vacios
export const hasErrorFormLogin=(form: LoginForm)=>{
    return form.email == '' || form.password == '';
}
export const hasErrorFormRegister=(form: RegisterForm)=>{
    return form.email == ''  || form.username == '' || form.password == '';
}


//Existe el usuario registrado
export const verifyExistUser=(users: User[], form: LoginForm)=>{
    return users.filter(user=>user.email == form.email)[0];
}

//snackbar sea reutilizable
export const showSnackBar =(message: string, background: string)=>{
    Snackbar.show({
        text: message,
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor:background,
        textColor:'white'
    });
}

//Ids de los nuevos usuarios
export const getIdNewUser=(users: User[])=>{
    const getIdUSer=users.map(user=>user.id);
    return Math.max(...getIdUSer)+1;
}