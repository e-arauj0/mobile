import { StatusBar } from "expo-status-bar";
import { SafeAreaView,View,Text, StyleSheet,TouchableOpacity} from "react-native";

export default function Home() {
    return(
        <SafeAreaView styles={styles.container}>
            <View style={styles.principal}>
                <Text style={styles.titulo}>Mundo Programador</Text>
                <Text style={styles.subtilulo}>Dicas do Mercado de Trabalho</Text>
            </View>

            <View>
                <TouchableOpacity style={styles.button} onPress={() => {ProgressBarAndroidComponent.navigation.navigate('dica1')}}>
                    <Text>Repertório de conhecimento sobre o assunto</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => {ProgressBarAndroidComponent.navigation.navigate('dica2')}}>
                    <Text>dica 2</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#A8A8A8',
      alignItems: 'center',
      justifyContent: 'center',
    },

    button:{
        margin: 10, 
        padding: 5,
        backgroundColor: 'grey',
        boderRadius: 5,
        alignItems: 'center',
    },

    titulo: {

    },

    subtitulo: {

    
    },

    textButton: {
        fontSize: 20,
    },

    principal:{
        alignItems: 'center',
        marginBottom: 50,
        borderWidth: 2, 
        padding: 10,
        backgroundColor: '#4f5a'
    },

  });