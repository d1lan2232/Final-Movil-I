import { createStackNavigator } from '@react-navigation/stack';
import { InicioScreen } from '../Screens/InicioScreen';
import { OlvidasteContra } from '../Screens/OlvidasteContra';
import { CrearCuentaScreen } from '../Screens/CrearCuentaScreen';
import { CompraScreen } from '../Screens/CompraScreen';

export const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="InicioScreen" component={InicioScreen} />
      <Stack.Screen name="OlvidasteContra" component={OlvidasteContra} />
      <Stack.Screen name="CrearCuentaScreen" component={CrearCuentaScreen} />
      <Stack.Screen name="CompraScreen" component={CompraScreen} />
    </Stack.Navigator>
  );
}