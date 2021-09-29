// import React,{useState,useEffect,useRef} from 'react';
// import { View,Text,TextInput,TouchableOpacity,StyleSheet,SafeAreaView, Alert,Keyboard,Image } from 'react-native';
// import TouchID from 'react-native-touch-id'; 'react-native-touch-id'
// // import { Container } from './styles';

// export default function App(){

// const [suportado, setSuportado] = useState(null);
// const [autenticado,setAutenticado] = useState(false)
// useEffect(()=>{
//   TouchID.isSupported()
//   .then(sucesso =>{
//     setSuportado(true);
//     console.log('TouchID habilitado')

//   })
//   .catch((erro)=>{
//     Alert.alert("TouchID não habilitado/suportado")
//     console.log("aparelho n suporta TouchID ou o mesmo n esta habilitado", erro)
//   })
// },[]);


// function login(){
//   const configs ={
//     title:'Autenticação Biométrica',
//     color:"purple",
//     sensorErrorDescription:"Biometria não autorizada"
//   }
//   TouchID.authenticate("Login",configs)
//   .then(secesso=>{
//     setAutenticado(true)
//     console.log('bem vindo')
//   })
//   .catch((erro)=>{
//     setAutenticado(false)
//     console.log("falha na autenticação", erro)
//   })
// } 
//   return(
//     <View style={styles.container}>
//       <Text style={styles.texto}>Acessar Plataforma</Text>
      
//       <Image
//       source={require('./src/img/image1.png')}
//       style={{width:150,height:150}}
//       />
//        <Image
//       source={require('./src/img/IMAGE2.png')}
//       style={{width:60,height:30}}
//       />
//       <View style={styles.viewButtons}>
//         <TouchableOpacity style={{backgroundColor:'purple',height:40,width:110,borderRadius:10, marginTop:10}}
//         onPress={login}>
//           <Text style={styles.textoBTN} >Utilzar Biometria</Text>
//         </TouchableOpacity>
//       </View>
//       {autenticado == true ? <Text style={styles.texto}> Login Efetuado</Text> : <Text></Text>}
//     </View>
  
//   )
// }
// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center',
//     backgroundColor:'grey',
  
//   },
//   textoBTN:{
//     fontSize:15,
//     fontWeight:'bold',
//     textAlign:'center',
//     color:'white',
//     alignItems:'center',
//     justifyContent:'center'

//   },
//   texto:{
//     fontSize:30,
//     fontWeight:'bold',
//     textAlign:'center',
//   },
  

// })
import React,{useState,useEffect,useRef} from 'react';
import { View,Text,TextInput,TouchableOpacity,StyleSheet,SafeAreaView, Alert,Keyboard,Image } from 'react-native';
import TouchID from 'react-native-touch-id'; 'react-native-touch-id'
// import { Container } from './styles';
import {AppRoutes} from "./routes/Index"
export default function App(){
  return(
    <AppRoutes></AppRoutes>
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
    justifyContent:'center'

  },
  texto:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
  },
  

})
 
 