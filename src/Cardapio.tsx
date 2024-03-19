import React from 'react';
import {  FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface MenuItem {
    id: string,
    nome: string,
    valor: string,
    ingredientes: string;
    image: any;
}

const dados: MenuItem[] = [
    { id: "1", nome: "Macarrão Carbonara", valor: "25,00", ingredientes: "macarrão espaguete,bacon em cubos,vinho branco,ovos,gemas,queijo parmasao", image: require('./assets/images/carbonara.jpg') },
    { id: "2", nome: "Macarrão Bolonhesa", valor: "25,00", ingredientes: "macarrão espaguete,bacon em cubos,vinho branco,ovos,gemas,queijo parmasao", image: require('./assets/images/carbonara.jpg') },
    { id: "3", nome: "Macarrão molho branco", valor: "25,00", ingredientes: "macarrão espaguete,bacon em cubos,vinho branco,ovos,gemas,queijo parmasao", image: require('./assets/images/carbonara.jpg') },
    { id: "4", nome: "Espaguete com camarões", valor: "35,00", ingredientes: " camarões com espaguete italiano, ervilhas, presunto e molho branco.",image: require('./assets/images/carbonara.jpg') },
    { id: "5", nome: "Picanha Black Angus", valor: "40,00", ingredientes: "Picanha Black Angus (300g) Picanha da raça Angus, acompanhada de vinagrete, chimichurri, farofa amarela, mandioca cozida ze arroz biro biro.",image: require('./assets/images/picanha.jpeg') },
    { id: "6", nome: "Bacalhau à Lagareiro", valor: "50,00", ingredientes: "Lombo de bacalhau assado no forno com azeite, alho confitado, cebola, ovos, tomate, azeitona azapa, batata, abóbora e brócolis. Acompanha arroz com brócolis.",image: require('./assets/images/bacalhau.jpeg') },
    { id: "7", nome: "Paella Caldosa", valor: "55,00", ingredientes: "Arroz caldoso com camarão, lula, polvo, peixe e mexilhão, refogado com pimentões, ervilha, especiarias e um leve toque de açafrão. Servidos na paellera. Rico em sabor e apresentação.",image: require('./assets/images/paella.jpeg') },
    { id: "8", nome: "Camarão Brasileirinho", valor: "17", ingredientes: "Camarões empanados em farinha panko sobre delicioso arroz cremoso de moqueca. Acompanha batata palha.",image: require('./assets/images/camaraobrasileiro.jpeg')},
    { id: "9", nome: "Carne de Sol Aruba", valor: "25", ingredientes: "Acompanhada de Baião de Dois, Bacon, Cebola Roxa, Queijo Coalho, Pimenta Biquinho, Abóbora e Nata Fresca.",image: require('./assets/images/carbonara.jpg') },
    { id: "10", nome: "Frango Crispy ", valor: "16", ingredientes: "Acompanhado de Arroz Branco, Feijão Fradinho, Batata Chips e Vinagrete.",image: require('./assets/images/frangocrispy.jpeg') },
    { id: "11", nome: "Tilápia Aruba", valor: "17", ingredientes: "Isca de tilápia empanada em farinha Panko e arroz Aruba (baião de dois com carne seca,bacon, cebola roxa, queijo coalho, pimenta biquinho e nata fresca)",image: require('./assets/images/tilapia.jpeg') },
    { id: "12", nome: "Batata Frita Especial", valor: "25", ingredientes: "Batatas fritas cobertas com queijo muçarela derretido e bacon crocante.",image: require('./assets/images/batata.jpeg') },
    { id: "13", nome: "Caldo de Camarão", valor: "16", ingredientes: "Caldo com camarões, alho, cebola, coentro, pimentões, pimenta de cheiro mandioquinha e leite de coco. Acompanha 4 pãezinhos.",image: require('./assets/images/caldocamarao.jpeg') },
    { id: "14", nome: "Cestinha de Pão de Queijo", valor: "17", ingredientes: "Cestinha de Pão de Queijo (10 unidades)", image: require('./assets/images/paodequeijo.jpeg') },
    { id: "15", nome: "Ceviche de Salmão", valor: "25", ingredientes: "160g de Ceviche de Salmão. Acompanha cesta de torradas temperadas.", image: require('./assets/images/ceviche.jpeg') },



];

const renderItem = ({ item }: { item: MenuItem }) => (
    <TouchableOpacity style={styles.item}>
        <Text>{item.nome}</Text>
        <Text>{item.valor}</Text>
        <Text>{item.ingredientes}</Text>
        <Image source={item.image}/>
        
    </TouchableOpacity>
);

function Cardapio(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#FF1493" barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.headerText}>Aromas e Sabores</Text>
                <Text style={styles.headerText}>Cardapio</Text>
            </View>
            <FlatList
                data={dados}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />

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
        backgroundColor: '#FF1493',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16

    },
    header: {
        backgroundColor: '#C71585',
        alignItems: 'center',
        paddingVertical: 10

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

    }
})

export default Cardapio;