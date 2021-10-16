import { useNavigation } from '@react-navigation/native';
import React,{useState,useEffect,useRef,} from 'react';
import { View,Text,TextInput,TouchableOpacity,StyleSheet,SafeAreaView, Alert,Keyboard,Image,AsyncStorage } from 'react-native';
import TouchID from 'react-native-touch-id'; 'react-native-touch-id'
// import { Container } from './styles';
import axios from "axios";
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login(){

const [suportado, setSuportado] = useState(null);
const [autenticado,setAutenticado] = useState(false)
const navigation = useNavigation()
// const [email,setEmail] = useState('')
// const [senha,setSenha] = useState('')


const [conectar, setConectar] = useState({ email: "", senha: "" })

// const usuario = {
//   email:'',
//   senha:''
// }
// console.log(usuario)

useEffect(()=>{
  TouchID.isSupported()
  .then(sucesso =>{
    setSuportado(true);
    console.log('TouchID habilitado')

  })
  .catch((erro)=>{
    Alert.alert("TouchID não habilitado/suportado")
    console.log("aparelho n suporta TouchID ou o mesmo n esta habilitado", erro)
  })
},[]);


async function login(){
  const configs ={
    title:'Autenticação Biométrica',
    color:"purple",
    sensorErrorDescription:"Biometria não autorizada"
  }
  TouchID.authenticate("Login",configs)
  .then(secesso=>{
  //   if(conectar.email =='matheus' && conectar.senha =='123'){
  //     setAutenticado(true)
  //     console.log('bem vindo')
  //     console.log(conectar,"conectar")
  //     navigation.navigate('Principal')
  //     navigation.reset({
  //       index:0,
  //       routes:[{name:'Principal'}]
  //     })
       axios.post('http://ca0b-2804-420c-107a-2000-e9b6-99d7-d141-a267.ngrok.io/api/login',{email:conectar.email,senha:conectar.senha})
      .then((resposta)=>{
        const dados=resposta.data

        // console.log(resposta)
        // console.log(conectar)
        
        if(dados != ''){
          navigation.reset({
            index:0,
            routes:[{name:'Principal'}]
          })
         
          // console.log(dados,'dentro do if')
          const userData = async(dados)=>{
            await AsyncStorage.setItem('usuario',JSON.stringify(dados))
            
        }

        userData(dados)
        // navigation.navigate('Principal')
        
         
        }else{
          Alert.alert('login ou senha invalidos')
        }
      })
      .catch((error)=>{
        console.log(error)
      })
  //   }else{
  //     Alert.alert('login ou senha invalidos')
  //   }
  
  })
  .catch((erro)=>{
    setAutenticado(false)
    console.log("falha na autenticação", erro)
    
  })

  

  
} 
  return(
    <>
    <View style={styles.tituloInicial}>
    <Text style={styles.texto}>Projeto APS</Text>
    </View>
    <View style={styles.container}>
      <Text style={styles.texto}>Acessar Plataforma</Text>
      
      <Image
      source={require('../src/img/image1.png')}
      style={{width:150,height:150}}
      />
       <Image
      source={require('../src/img/IMAGE2.png')}
      style={{width:60,height:30}}
      />
      <View>
        <Text>AREA CONFIDENCIAL</Text>
      </View>
      
      <View >
        <TextInput 
        style={styles.inputs}
        placeholder="Digite seu email"
        value={conectar.email}
        onChangeText={(email) => setConectar({ ...conectar, email })}
        >  
        </TextInput>
        <TextInput 
        style={styles.inputs}
        secureTextEntry={true}
        placeholder="Digite sua senha"
        value={conectar.senha}
        onChangeText={(senha) => setConectar({ ...conectar, senha })}
        >
        </TextInput>
      </View>
      <View style={styles.viewButtons}>
        <TouchableOpacity style={{backgroundColor:'purple',height:40,width:110,borderRadius:10, marginTop:10}}
        onPress={login}>
          <Text style={styles.textoBTN} >Utilzar Biometria</Text>
        </TouchableOpacity>
      </View>
      {autenticado == true ? <Text style={styles.texto}> Login Efetuado</Text> : <Text></Text>}
    </View>
  </>
  )
}
const styles = StyleSheet.create({
  tituloInicial:{
    // marginBottom:'15%',
    paddingBottom:'15%',
    backgroundColor:'#fff',
  },
  
  
  container:{
    flex:1,
    // justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
  
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
  inputs:{
    marginTop:10,
    padding:5,
    width:300,
    backgroundColor:'#fff',
    fontSize:16,
    fontWeight:'bold',
    borderRadius:3,
    borderColor:'black',
    borderWidth:2

  }
  

})
 