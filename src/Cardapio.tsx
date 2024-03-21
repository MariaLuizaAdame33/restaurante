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
    { id: "1", nome: "𝑴𝒂𝒄𝒂𝒓𝒓𝒂̃𝒐 𝒄𝒂𝒓𝒃𝒐𝒏𝒂𝒓𝒂", valor: "45,00", ingredientes: "macarrão espaguete,bacon em cubos,vinho branco,ovos,gemas,queijo parmasao.", image: require('./assets/images/carbonara.jpg') },
    { id: "2", nome: "𝑴𝒂𝒄𝒂𝒓𝒓𝒂̃𝒐 𝒃𝒐𝒍𝒐𝒏𝒉𝒆𝒔𝒂", valor: "30,00", ingredientes: "macarrão espaguete,carne moida com molho de tomate,temperos.", image: require('./assets/images/bolonhesa.png') },
    { id: "3", nome: "𝑪𝒂𝒎𝒂𝒓𝒂̃𝒐 𝒂 𝒎𝒊𝒍𝒂𝒏𝒆𝒔𝒂", valor: "68,00", ingredientes: "Camarão à milanesa com gergelim. Acompanha molho tártaro.", image: require('./assets/images/milanesa.jpeg') },
    { id: "4", nome: "𝑬𝒔𝒑𝒂𝒈𝒖𝒆𝒕𝒆 𝒄𝒐𝒎 𝒄𝒂𝒎𝒂𝒓𝒐̃𝒆𝒔", valor: "45,00", ingredientes: " camarões com espaguete italiano, ervilhas, presunto e molho branco.",image: require('./assets/images/camaraomacarrao.jpeg') },
    { id: "5", nome: "𝑷𝒊𝒄𝒂𝒏𝒉𝒂 𝒃𝒍𝒂𝒄𝒌 𝒂𝒏𝒈𝒖𝒔", valor: "95,00", ingredientes: "Picanha Black Angus (300g) Picanha da raça Angus, acompanhada de vinagrete, chimichurri, farofa amarela, mandioca cozida ze arroz biro biro.",image: require('./assets/images/picanha.jpeg') },
    { id: "6", nome: "𝑩𝒂𝒄𝒂𝒍𝒉𝒂𝒖 𝒂 𝒍𝒂𝒈𝒂𝒓𝒆𝒊𝒓𝒐", valor: "65,00", ingredientes: "Lombo de bacalhau assado no forno com azeite, alho confitado, cebola, ovos, tomate, azeitona azapa, batata, abóbora e brócolis. Acompanha arroz com brócolis.",image: require('./assets/images/bacalhau.jpeg') },
    { id: "7", nome: "𝑷𝒂𝒆𝒍𝒍𝒂 𝑪𝒂𝒍𝒅𝒐𝒔𝒂", valor: "70,00", ingredientes: "Arroz caldoso com camarão, lula, polvo, peixe e mexilhão, refogado com pimentões, ervilha, especiarias e um leve toque de açafrão. Servidos na paellera. Rico em sabor e apresentação.",image: require('./assets/images/paella.jpeg') },
    { id: "8", nome: "𝑪𝒂𝒎𝒂𝒓𝒂̃𝒐 𝑩𝒓𝒂𝒔𝒊𝒍𝒆𝒊𝒓𝒊𝒏𝒉𝒐", valor: "R$80,00", ingredientes: "Camarões empanados em farinha panko sobre delicioso arroz cremoso de moqueca. Acompanha batata palha.",image: require('./assets/images/camaraobrasileiro.jpeg')},
    { id: "9", nome: "𝑭𝒊𝒍𝒆 𝒄𝒐𝒎 𝒇𝒓𝒊𝒕𝒂𝒔", valor: "R$65,00", ingredientes: "Cubos de filé, refogado com cebola roxa e molho barbecue. Acompanha batata frita.",image: require('./assets/images/file.jpeg') },
    { id: "10", nome: "𝑭𝒓𝒂𝒏𝒈𝒐 𝑪𝒓𝒊𝒔𝒑𝒚", valor: "R$35,00", ingredientes: "Acompanhado de Arroz Branco, Feijão Fradinho, Batata Chips e Vinagrete.",image: require('./assets/images/frangocrispy.jpeg') },
    { id: "11", nome: "𝑻𝒊𝒍𝒂𝒑𝒊𝒂 𝑨𝒓𝒖𝒃𝒂", valor: "R$70,00", ingredientes: "Isca de tilápia empanada em farinha Panko e arroz Aruba (baião de dois com carne seca,bacon, cebola roxa, queijo coalho, pimenta biquinho e nata fresca)",image: require('./assets/images/tilapia.jpeg') },
    { id: "12", nome: "𝑩𝒂𝒕𝒂𝒕𝒂 𝑭𝒓𝒊𝒕𝒂 𝑬𝑺𝒑𝒆𝒄𝒊𝒂𝒍", valor: "R$45,00", ingredientes: "Batatas fritas cobertas com queijo muçarela derretido e bacon crocante.",image: require('./assets/images/batata.jpeg') },
    { id: "13", nome: "𝑪𝒂𝒍𝒅𝒐 𝒅𝒆 𝒄𝒂𝒎𝒂𝒓𝒂̃𝒐", valor: "R$50,00", ingredientes: "Caldo com camarões, alho, cebola, coentro, pimentões, pimenta de cheiro mandioquinha e leite de coco. Acompanha 4 pãezinhos.",image: require('./assets/images/caldocamarao.jpeg') },
    { id: "14", nome: "𝑪𝒆𝒔𝒕𝒊𝒏𝒉𝒂 𝒅𝒆 𝒑𝒂̃𝒐 𝒅𝒆 𝒒𝒖𝒆𝒊𝒋𝒐", valor: "R$25,00", ingredientes: "Cestinha de Pão de Queijo (10 unidades)", image: require('./assets/images/paodequeijo.jpeg') },
    { id: "15", nome: "𝑪𝒆𝒗𝒊𝒄𝒉𝒆 𝒅𝒆 𝑺𝒂𝒍𝒎𝒂̃𝒐", valor: "R$30,00", ingredientes: "160g de Ceviche de Salmão. Acompanha cesta de torradas temperadas.", image: require('./assets/images/ceviche.jpeg') },



];

const renderItem = ({ item }: { item: MenuItem }) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.Texto1}>{item.nome}</Text>
        <Text style={styles.Textovalor}>{item.valor}</Text>
        <Text>{item.ingredientes}</Text>
        <Image source={item.image} style={styles.images}/>
        
    </TouchableOpacity>
);

function Cardapio(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('./assets/images/fundo.jpg')} resizeMode="cover" style={styles.imagebackground}>
            <StatusBar backgroundColor="#00CED1" barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.headerText} >𝓐𝓻𝓸𝓶𝓪 𝓮 𝓼𝓪𝓫𝓸𝓻𝓮𝓼</Text>
                <Text style={styles.headerText}>𝐂𝐀𝐑𝐃𝐀𝐏𝐈𝐎</Text>
            </View>
            <FlatList
                data={dados}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
            </ImageBackground>

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
        marginHorizontal: 16

    },
    header: {
        backgroundColor: '#008B8B',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 107

    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'

    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10
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
        fontSize:20
    },
    Textovalor:{
        fontSize:15
    }
})

export default Cardapio;