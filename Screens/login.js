import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,TextInput } from 'react-native';
import{React} from 'react-native'
import Estoque from './Estoque';
export default function Login() {
  return (
    
    <View style={styles.container}>
   
    <View style={styles.form}>
      

    <Text>Ola</Text>
     <TextInput style={styles.inputs} >
      
      placeholder="email"

    </TextInput>

     {/* <TextInput style={styles.inputs}>
      
      placeholder="senha"
      
    </TextInput> 
    <Button>

      style{{width:20, height: 30}}
       onPress{Estoque} 
    </Button> */} 
    
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
    width:80,
    height:20
  },
  inputs: {
    width:20,
    height:10
  }
});
