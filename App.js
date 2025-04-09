import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Estoque from './Screens/Estoque.js';
import FaleConosco from './Screens/FaleConosco.js';
import Login from './Screens/login.js'

const Stack = createStackNavigator();
export default function App() {
   
   return(
    Login()
   )
 
}
function StackNavigation(){
  <Stack.Navigator>
    <Stack.Screen name="login"  />
  </Stack.Navigator>
}


