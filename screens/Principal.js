import React,{useState,useEffect,useRef} from 'react';
import { View,Text,TextInput,TouchableOpacity,StyleSheet,SafeAreaView, Alert,Keyboard,Image,ScrollView,AsyncStorage } from 'react-native';
import TouchID from 'react-native-touch-id'; 'react-native-touch-id'
// import { Container } from './styles';
import { useNavigation } from '@react-navigation/native';



export default function Principal(){

  
  // FUNÇÃO QUE VAI LÁ NO ASYNC STORAGE PEGAR OS DADOS DE LOGIN
  const  [usuario,setUsuario] = useState()
 
  async function  buscarUsuario(){
    const data = await AsyncStorage.getItem('usuario')
    const dataUser = JSON.parse(data)
    setUsuario(dataUser)
    console.log(dataUser,'qualquer coisa')
  }
  
  useEffect(()=>{
    buscarUsuario()
    
    
  },[])

// console.log(usuario,'Peguei do async')

// console.warn(usuario)

//  console.warn()

const nomeUser = usuario?.classificacao


  const navigation = useNavigation()
  function deslogar(){
     AsyncStorage.removeItem('usuario')

      // navigation.navigate('Login')
      navigation.reset({
        index:0,
        routes:[{name:'Login'}]
      })
      
  }
  const alertWithoutButtons = () => {
    const title = 'Atenção';
    const message = 'agrotoxicos encontrados entre em contato com a produção';
    const emptyArrayButtons = [];
    const alertOptions = {
      cancelable: true,
    };
    Alert.alert(title, message, emptyArrayButtons, alertOptions);
    
};
  
  return(
    <>
    <View style={styles.container}>
      <Text style={styles.texto}> Seja Bem vindo: {usuario?.nome}</Text>
      <Text style={styles.texto}> Cargo: {usuario?.cargo}</Text>
      <Text style={styles.texto}> Nivel de informação: {usuario?.classificacao} </Text>
      
      
      



      {/* <TouchableOpacity style={{backgroundColor:'purple',height:40,width:110,borderRadius:10, marginTop:10}}
      onPress={deslogar}>
        <Text style={styles.textoBTN}>Sair</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:'purple',height:40,width:110,borderRadius:10, marginTop:10}}
      onPress={alertWithoutButtons}>
        <Text style={styles.textoBTN}>teste</Text>
      </TouchableOpacity> */}
    </View>
    
    <View style={styles.Conteudo}>

    {nomeUser === 'junior' ? 
    <>
    <ScrollView>
    <Text style={styles.textoConteudo}>UNIDADE:Agricultura</Text> 
    <Text style={styles.textoConteudo} >ENDEREÇO:Av anonimos,148</Text> 
    <Text style={styles.textoConteudo} >PRODUTOS PRODUZIDOS: Legumes</Text> 
    <Image
      source={require('../src/img/IMAGE2.png')}
      style={{width:60,height:30}}
      />
    <Text style={styles.textoConteudo} >DESTINO DA PRODUÇÃO: Mercados</Text> 
    <Text style={styles.textoConteudo} >TOTAL DE EMPREGADOS: 300</Text> 
    <Text style={styles.textoConteudo}>QUANTIDADE DE MAQUINAS:18</Text> 
    <Text style={styles.textoConteudo}>NIVEL DE AUTOMAÇÃO:80%</Text> 
    <Text style={styles.textoConteudo}>-------------------------------------------------------------------------</Text> 
    <Text style={styles.textoConteudo}>UNIDADE:Agricultura</Text> 
    <Text style={styles.textoConteudo} >ENDEREÇO:Av anonimos,148</Text> 
    <Text style={styles.textoConteudo} >PRODUTOS PRODUZIDOS: Legumes</Text> 
    <Image
      source={require('../src/img/IMAGE2.png')}
      style={{width:60,height:30}}
      />
    <Text style={styles.textoConteudo} >DESTINO DA PRODUÇÃO: Mercados</Text> 
    <Text style={styles.textoConteudo} >TOTAL DE EMPREGADOS: 300</Text> 
    <Text style={styles.textoConteudo}>QUANTIDADE DE MAQUINAS:18</Text> 
    <Text style={styles.textoConteudo}>NIVEL DE AUTOMAÇÃO:80%</Text> 
    <Text style={styles.textoConteudo}>-------------------------------------------------------------------------</Text>
    <Text style={styles.textoConteudo}>UNIDADE:Agricultura</Text> 
    <Text style={styles.textoConteudo} >ENDEREÇO:Av anonimos,148</Text> 
    <Text style={styles.textoConteudo} >PRODUTOS PRODUZIDOS: Legumes</Text> 
    <Image
      source={require('../src/img/IMAGE2.png')}
      style={{width:60,height:30}}
      />
    <Text style={styles.textoConteudo} >DESTINO DA PRODUÇÃO: Mercados</Text> 
    <Text style={styles.textoConteudo} >TOTAL DE EMPREGADOS: 300</Text> 
    <Text style={styles.textoConteudo}>QUANTIDADE DE MAQUINAS:18</Text> 
    <Text style={styles.textoConteudo}>NIVEL DE AUTOMAÇÃO:80%</Text> 
    <Text style={styles.textoConteudo}>-------------------------------------------------------------------------</Text>
    <Text style={styles.textoConteudo}>UNIDADE:Agricultura</Text> 
    <Text style={styles.textoConteudo} >ENDEREÇO:Av anonimos,148</Text> 
    <Text style={styles.textoConteudo} >PRODUTOS PRODUZIDOS: Legumes</Text> 
    <Image
      source={require('../src/img/IMAGE2.png')}
      style={{width:60,height:30}}
      />
    <Text style={styles.textoConteudo} >DESTINO DA PRODUÇÃO: Mercados</Text> 
    <Text style={styles.textoConteudo} >TOTAL DE EMPREGADOS: 300</Text> 
    <Text style={styles.textoConteudo}>QUANTIDADE DE MAQUINAS:18</Text> 
    <Text style={styles.textoConteudo}>NIVEL DE AUTOMAÇÃO:80%</Text> 
    <Text style={styles.textoConteudo}>-------------------------------------------------------------------------</Text>
    <Text style={styles.textoConteudo}>UNIDADE:Agricultura</Text> 
    <Text style={styles.textoConteudo} >ENDEREÇO:Av anonimos,148</Text> 
    <Text style={styles.textoConteudo} >PRODUTOS PRODUZIDOS: Legumes</Text> 
    <Image
      source={require('../src/img/IMAGE2.png')}
      style={{width:60,height:30}}
      />
    <Text style={styles.textoConteudo} >DESTINO DA PRODUÇÃO: Mercados</Text> 
    <Text style={styles.textoConteudo} >TOTAL DE EMPREGADOS: 300</Text> 
    <Text style={styles.textoConteudo}>QUANTIDADE DE MAQUINAS:18</Text> 
    <Text style={styles.textoConteudo}>NIVEL DE AUTOMAÇÃO:80%</Text>
    </ScrollView>
    </>
    
    :
     nomeUser === 'pleno' ?  
     <>
     <Text style={styles.textoConteudo}>INCENTIVOS FISCAIS RECEBIDOS:R$0000 b</Text> 
     <Text style={styles.textoConteudo}>IMPOSTOS MUNICIPAIS PAGOS:R$099 b</Text> 
     <Text style={styles.textoConteudo}>IMPOSTOS ESTADUAIS RECOLHIDOS:R$0909 b</Text> 
     <Text style={styles.textoConteudo}>IMPOSTOS FEDERAIS PAGOS:R$111</Text> 
     <Text style={styles.textoConteudo}>TAXAS FEDERAIS PAGAS:R$123</Text> 
     </>
     : 
     <>
     <Text style={styles.texto}>Area Extritamente retrita</Text> 
     <Text style={styles.textoConteudo}>Agrotoxicos empregados nas produções agricolas</Text> 
     {/* {Alert.alert('agrotoxicos priobudos detectado,contate imediatamente a unidade respoanvel ')} */}
      <TouchableOpacity style={{backgroundColor:'purple',height:40,width:110,borderRadius:10, marginTop:10}}
      onPress={alertWithoutButtons}>
        <Text style={styles.textoBTN}>Verificar</Text>
      </TouchableOpacity> 
     

     </>
     }
    </View>

    <View style={styles.containerFInal}>
    <TouchableOpacity style={{backgroundColor:'purple',height:40,width:110,borderRadius:10, marginTop:10}}
      onPress={deslogar}>
        <Text style={styles.textoBTN}>Sair</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={{backgroundColor:'purple',height:40,width:110,borderRadius:10, marginTop:10}}
      onPress={alertWithoutButtons}>
        <Text style={styles.textoBTN}>teste</Text>
      </TouchableOpacity>  */}
    </View>
    </>
    
  
  )
}
const styles = StyleSheet.create({
  container:{
    //flex:1,
    // justifyContent:'center',
    // alignItems:'center',
    backgroundColor:'#fff',
    paddingBottom:15
  
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
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
  },
  Conteudo:{
    flex:1,
    backgroundColor:'#fff',
    paddingHorizontal:10
  },
  textoConteudo:{
    fontSize:18
  },
  containerFInal:{
    backgroundColor:'#fff',
    paddingBottom:15,
    // flex:1,
    justifyContent:'center',
    alignItems:'center',
    height:70
  
  }
  

})
 {/* <Image
      source={require('../src/img/image1.png')}
      style={{width:150,height:150}}
      /> */}