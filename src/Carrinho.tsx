import React from 'react';
import {  FlatList, Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface MenuItem {
    id: string,
    nome: string,
    valor: string,
    ingredientes: string;
    image: any;
}

const dados: MenuItem[] = [
    { id: "1", nome: "𝑴𝒂𝒄𝒂𝒓𝒓𝒂̃𝒐 𝒄𝒂𝒓𝒃𝒐𝒏𝒂𝒓𝒂", valor: "R$45,00", ingredientes: "macarrão espaguete,bacon em cubos,vinho branco,ovos,gemas,queijo parmasao.", image: require('./assets/images/carbonara.jpg') },
    { id: "2", nome: "𝑻𝒊𝒍𝒂𝒑𝒊𝒂 𝑨𝒓𝒖𝒃𝒂", valor: "R$70,00", ingredientes: "Isca de tilápia empanada em farinha Panko e arroz Aruba (baião de dois com carne seca,bacon, cebola roxa, queijo coalho, pimenta biquinho e nata fresca)",image: require('./assets/images/tilapia.jpeg') },
    { id: "3", nome: "𝑩𝒂𝒕𝒂𝒕𝒂 𝑭𝒓𝒊𝒕𝒂 𝑬𝑺𝒑𝒆𝒄𝒊𝒂𝒍", valor: "R$45,00", ingredientes: "Batatas fritas cobertas com queijo muçarela derretido e bacon crocante.",image: require('./assets/images/batata.jpeg') },
    { id: "4", nome: "𝑪𝒆𝒔𝒕𝒊𝒏𝒉𝒂 𝒅𝒆 𝒑𝒂̃𝒐 𝒅𝒆 𝒒𝒖𝒆𝒊𝒋𝒐", valor: "R$25,00", ingredientes: "Cestinha de Pão de Queijo (10 unidades)", image: require('./assets/images/paodequeijo.jpeg') },
    


];

const renderItem = ({ item }: { item: MenuItem }) => (
    <View style={styles.item}>
        <Text style={styles.Texto1}>{item.nome}</Text>
        <Text style={styles.Textovalor}>{item.valor}</Text>
        <Text>{item.ingredientes}</Text>
        <Image source={item.image} style={styles.images}/>
       <View style={styles.linha}>
       <TouchableOpacity style={styles.button}  onPress={()=>{Carrinho()}}>
                
                <Text style={styles.buttonText}>🛒+</Text>
            </TouchableOpacity>

            <View style={styles.button}>
                
                <Text style={styles.Texto3}>1</Text>
            </View>
           
            <TouchableOpacity style={styles.button}  onPress={()=>{Carrinho()}}>
            
            <Text style={styles.buttonText}>🛒-</Text>
        </TouchableOpacity>
       </View>
        
    </View>
);

function Carrinho(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('./assets/images/fundo.jpg')} resizeMode="cover" style={styles.imagebackground}>
            <StatusBar backgroundColor="#00CED1" barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.headerText} >𝓐𝓻𝓸𝓶𝓪 𝓮 𝓼𝓪𝓫𝓸𝓻𝓮𝓼</Text>
                <Text style={styles.Textocima}>𝑪𝑨𝑹𝑹𝑰𝑵𝑯𝑶 𝑫𝑬 𝑪𝑶𝑴𝑷𝑹𝑨𝑺 🛒</Text>
            </View>
            <FlatList
                data={dados}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
            </ImageBackground>

            <View style={styles.header2}>
                <Text style={styles.Textocima}>TOTAL: R$150,00</Text>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image source={require('./assets/images/home.png')}
                        style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('./assets/images/profile.png')}
                        style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('./assets/images/cardapio.webp')}
                        style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('./assets/images/pedidos.webp')}
                        style={styles.footerIcon} />
                </TouchableOpacity>
            </View>

          

        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    item: {
        backgroundColor: '#00CED1',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:15,
        borderColor:'black',
        borderWidth:4

    },
    header: {
        backgroundColor: '#008B8B',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 107

    },
    header2: {
        backgroundColor: '#008B8B',
        textAlign:'left',
        paddingVertical: 10,
        paddingHorizontal: 10,
      

    },
    headerText: {
        fontSize: 27,
        fontWeight: 'bold',
        color: 'white'

    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    footerIcon: {
        width: 30,
        height: 30

    },
    images:{
        width: 200,
        height: 200 

    },
    imagebackground: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'cover',
        alignItems: 'center'
    },
    Texto1: {
        fontSize:20,
        borderBottomWidth:2,
        borderBottomRightRadius:-200,
        borderBottomColor:'white'
    },
    Textovalor:{
        fontSize:15,
        color:'white'
    },
    Textocima:{
        fontSize:20,
        color: 'white',
        textAlign:'left'
    },
    button:{
        backgroundColor:"#B0E0E6",
        height:40,
        width:80,
        borderRadius:8,
        marginTop:10,
        marginLeft:10
    },
    buttonText:{
        color:"black",
        textAlign:'center',
        fontSize:20,
        lineHeight:40,
       

    },
    linha:{
        flexDirection:'row',
        padding:10
    },
    Texto3:{
        color:"black",
        textAlign:'center',
        fontSize:20,
        lineHeight:40,
    }
   
    
})

export default Carrinho;