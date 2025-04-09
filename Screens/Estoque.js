import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import{React} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
export default function Estoque() {
  return (
    
    <View style={styles.container}>
   
    <View style={styles.form}>

    
    <TextInput name="name">
      placeholder="name"

    </TextInput>

    <TextInput>
      placeholder="email"
      
    </TextInput>
    <Button>
      width:
      onPress
    </Button>
    
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
});
