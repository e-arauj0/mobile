import { ImageBackground, SafeAreaView, View, Image, StyleSheet, Text} from "react-native";

// import 'ImageBackfround' from './assets/background-dica1'

export default function dica1(){
    return(
        // <ImageBackground source={require('../assets/background-dica1.jpg')}>
            <SafeAreaView style={styles.container}>
                <View style={styles.principal}>
                    <Text style={styles.titulo}> Dica 2:</Text>
                    <Text style={styles.subtitulo}>Conhecimento sobre a empresa</Text>
                </View>

                <View>
                    <Text style={styles.textoPrincipal}>Uma dica fundamental ao buscar um emprego é conhecer profundamente a empresa onde você está se candidatando. Antes de enviar seu currículo ou ir para uma entrevista, pesquise sobre a missão, valores, produtos ou serviços e cultura organizacional da empresa. Isso demonstra interesse genuíno e ajuda a alinhar suas respostas com os objetivos da empresa. Além disso, saber sobre os projetos atuais e os desafios enfrentados pela empresa pode te ajudar a destacar suas habilidades de forma mais relevante. Mostrar que você entende o que a empresa busca e como pode contribuir para o seu sucesso aumenta suas chances de se destacar entre os candidatos.</Text>

                    <View style={styles.divImg}>
                        <Image source={require('../assets/dica1.jpg')} style={styles.img}></Image>
                    </View>
                </View>
            </SafeAreaView>
        // </ImageBackground>

    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        ImageBackground: '#f6f6',
    },

    principal: {
        marginTop: 40,
        alignItems: 'center',
        backgroundColor: '#abcd',
        padding: 10,
        marginBottom: 20,

    },

    titulo: {
        fontSize: 25,
        fontStyle: 'bold',
        margin: 10,
        alignItems: 'center',
    },
    
    subtitulo: {
        fontSize: 15,
    },

    textoPrincipal: {
        fontSize: 16,
        alignItems: 'center',
        margin: 15,
        fontStyle: 'justfy',
    },

    img: {
        width: 300,
        height: 300,
    },

    divImg: {
        alignItems: 'center',
        marginTop: '10'
    }
}
)