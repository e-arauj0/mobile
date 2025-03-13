import { StatusBar } from 'expo-status-bar';

import { SafeAreaView, View, Image, StyleSheet, Text} from "react-native";


export default function Dicas1(){
    return(
            <SafeAreaView style={styles.container}>
                <View style={styles.principal}>
                    <Text style={styles.titulo}> Dica 1:</Text>
                    <Text style={styles.subtitulo}>Repertório de Conhecimento</Text>
                </View>

                <View>
                    <Text style={styles.textoPrincipal}>Uma dica importante para qualquer desenvolvedor é investir constantemente no seu repertório de conhecimento. Além de dominar linguagens de programação, é essencial ter uma compreensão sólida de estruturas de dados, algoritmos e princípios de design de software. Ter familiaridade com frameworks e ferramentas amplamente utilizados na indústria pode acelerar o desenvolvimento e melhorar a qualidade do seu código. Não se esqueça também de estudar práticas de versionamento, como Git, e metodologias ágeis, como Scrum ou Kanban. Ao construir uma base sólida e diversificada de conhecimentos, você se torna mais preparado para enfrentar desafios e se destacar na área.</Text>

                    <View style={styles.divImg}>
                        <Image source={require('../assets/dica1.jpg')} style={styles.img}></Image>
                    </View>
                
                </View>

                <StatusBar style="auto" />
                
            </SafeAreaView>
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