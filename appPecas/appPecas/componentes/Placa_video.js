import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native';

export default function Placa_video() {
  return (
     <ScrollView>
     <SafeAreaView style={styles.container}>
       <View>
         <Text style={styles.titulo}>O que é uma Placa de Video?</Text>
 
         <Text style={styles.textoPrincipal}>
         O processamento de áudio e gráfico é necessário para muitos aplicativos populares, como videogames modernos, serviços de streaming e animação em 3D.Uma placa de vídeo, também conhecida como placa gráfica ou unidade de processamento de gráficos (GPU), é um componente essencial de um computador que permite ao usuário visualizar informações visuais no monitor.Ele processa dados na forma de pixels, que compõem imagens.Isso torna possível transmitir vídeos, jogar jogos em alta resolução e criar animações complexas.
         </Text>
 
         <Text style={styles.titulo}>Como funciona uma Placa de Video?</Text>
 
         <Text style={styles.textoPrincipal}>
         Para entender como as placas de vídeo funcionam, é preciso primeiro entender o que acontece dentro de todos os computadores quando desenham formas na tela: eles executam algoritmos que transformam grandes quantidades e zeros em visuais úteis, como desenhos ou animações.O algoritmo começa com os simples e zeros que são transmitidos ao núcleo do processador GPU através das linhas de barramento de dados localizadas dentro da placa -mãe do computador.Aqui está dividido em pequenos pedaços para que possam ser digeridos por núcleos especializados mais rapidamente do que os núcleos de uso geral poderiam fazer essa tarefa sozinha.Em seguida, esses pixels são enviados de volta por outra linha de ônibus em direção a um dispositivo de saída como um monitor, onde são montados novamente em uma imagem que reconhecemos como algo útil.
         </Text>
       </View>
 
       <View style={styles.divImg}>
         <Image source={require('../assets/placa_video.jpg')} style={styles.img} />
       </View>
 
       <StatusBar style="auto" />
     </SafeAreaView>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#E1E3EA',
        justifyContent:'center'
        },
        titulo: {
            fontSize: 25,
            fontWeight: 'bold',
            margin: 10,
            alignItems: 'center',
            textAlign: 'center'
            
        },
        textoPrincipal: {
            fontSize: 16,
            alignItems: 'center',
            margin: 15,
            textAlign: 'justify',
        },
        img: {
            width:300,
            height:300,
        }, 
        divImg: {
            alignItems:'center',
    
            padding:40
        }
});
