import React,{useState,useEffect,useRef} from 'react';
import { View,Text,TextInput,TouchableOpacity,StyleSheet,SafeAreaView, Alert,Keyboard,Image } from 'react-native';
import TouchID from 'react-native-touch-id'; 'react-native-touch-id'
// import { Container } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Principal(){
  const navigation = useNavigation()
  function deslogar(){
    
      // navigation.navigate('Login')
      navigation.reset({
        index:0,
        routes:[{name:'Login'}]
      })
      
  }
  const alertWithoutButtons = () => {
    const title = 'Sucesso';
    const message = 'filial desnvinculada com sucesso...';
    const emptyArrayButtons = [];
    const alertOptions = {
      cancelable: true,
    };
    Alert.alert(title, message, emptyArrayButtons, alertOptions);
    
};
  
  return(
    <View style={styles.container}>
      <Text style={styles.texto}> Seja Bem vindo... </Text>
      <Image
      source={require('../src/img/image1.png')}
      style={{width:150,height:150}}
      />
      <TouchableOpacity style={{backgroundColor:'purple',height:40,width:110,borderRadius:10, marginTop:10}}
      onPress={deslogar}>
        <Text style={styles.textoBTN}>Sair</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:'purple',height:40,width:110,borderRadius:10, marginTop:10}}
      onPress={alertWithoutButtons}>
        <Text style={styles.textoBTN}>teste</Text>
      </TouchableOpacity>
    </View>
  
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'grey',
  
  },
  textoBTN:{
    fontSize:15,
    fontWeight:'bold',
    textAlign:'center',
    color:'white',
    alignItems:'center',
    justifyContent:'center',
    paddingTop:6,
    

  },
  texto:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
  },
  

})
 