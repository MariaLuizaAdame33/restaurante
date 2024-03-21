import React, { useState } from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

function CadastroScreen():JSX.Element{


    const[nome,setNome]=useState("");
    const[email,setEmail]=useState("");
    const[celular,setCelular]=useState("");
    const[rua,setRua]=useState("");
    const[numero,setNumero]=useState("");
    const[bairro,setBairro]=useState("");
    const[complemento,setComplemento]=useState("");
    const[password,setPassword]=useState("");

    function login(){
        const dados ={
            nome:nome,
            celular:celular,
            rua:rua,
            numero:numero,
            bairro:bairro,
            complemento:complemento,
            email:email,
            password:password,
        }

        console.log(dados);
    }

    return (
        <ImageBackground source={require('./assets/images/fundo.jpg')} resizeMode="cover" style={styles.imagebackground}>
        <ScrollView style={{height: '100%', width: 'auto'}}>
        <View style={styles.container}>
            <Image style={{...styles.logo, marginTop:20}} resizeMode="contain" source={require('./assets/images/profile.png')}/>
            <Text style={styles.headerText} >𝓐𝓻𝓸𝓶𝓪 𝓮 𝓼𝓪𝓫𝓸𝓻𝓮𝓼</Text>
            
        

            <View style={styles.card}>
                <Text style={styles.title}>𝑪𝑨𝑫𝑨𝑺𝑻𝑹𝑶</Text>

                <TextInput style={styles.input} placeholder="Nome" placeholderTextColor={"#000000"}
                 onChangeText={(textNome)=> setNome(textNome)}/>

                 <TextInput style={styles.input} placeholder="Email" placeholderTextColor={"#000000"}
                 onChangeText={(textEmail)=> setEmail(textEmail)}/>

                <TextInput style={styles.input} placeholder="Celular" placeholderTextColor={"#000000"}
                 onChangeText={(textCelular)=> setCelular(textCelular)}/>

                 <TextInput style={styles.input} placeholder="Rua" placeholderTextColor={"#000000"}
                 onChangeText={(textRua)=> setRua(textRua)}/>

                 <TextInput style={styles.input} placeholder="Numero" placeholderTextColor={"#000000"}
                 onChangeText={(textNumero)=> setNumero(textNumero)}/>

                 <TextInput style={styles.input} placeholder="Bairro" placeholderTextColor={"#000000"}
                 onChangeText={(textBairro)=> setBairro(textBairro)}/>

                 <TextInput style={styles.input} placeholder="Complemento" placeholderTextColor={"#000000"}
                 onChangeText={(textComplemento)=> setComplemento(textComplemento)}/>
                

                <TouchableOpacity style={styles.button}  onPress={()=>{login()}}>
                
                    <Text style={styles.buttonText}>𝑬𝑵𝑻𝑹𝑨𝑹</Text>
                </TouchableOpacity>


            </View>
             
           
            
            
            

        </View>
        </ScrollView>
        </ImageBackground>
    

    );
}

const styles = StyleSheet.create({
    container:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#00CED1'
    },
    logo:{
        width:80,
        height:80,
        marginBottom:20,
        marginTop:-150

    },
    card:{
        backgroundColor:'#00CED1',
        width:350,
        borderRadius:50,
        padding:30,
        paddingVertical:60,
        elevation:3,
        shadowColor:'rgba(0,0,0,0.3)',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.8,
        shadowRadius:2,
    },
    
    title:{
        fontSize:19,
        fontWeight:'bold',
        color:"black",
        marginBottom:20,
        textAlign:'center'
    },
    input:{
        backgroundColor:"white",
        height:40,
        marginBottom:20,
        paddingHorizontal:10,
        borderRadius:8,
        borderWidth:1,
        borderColor:"black"

    },
    button:{
        backgroundColor:"#B0E0E6",
        height:40,
        borderRadius:8
    },
    buttonText:{
        color:"black",
        textAlign:'center',
        fontSize:20,
        lineHeight:40,

    },

forgotPassword:{
    color:"white",
    textAlign:'center',
    marginTop:10,


},

imagebackground: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
    alignItems: 'center'
},
headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black'

},


});

export default CadastroScreen;