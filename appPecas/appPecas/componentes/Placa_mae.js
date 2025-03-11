import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native';


export default function Placa_mae() {
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titulo}>O que é uma Placa-Mãe?</Text>

        <Text style={styles.textoPrincipal}>
          Uma placa-mãe é um componente crítico de qualquer sistema de computador. Ele atua como a espinha dorsal da máquina e conecta todos os outros componentes, como CPU, RAM, disco rígido e placa gráfica. Os diferentes componentes estão conectados à placa-mãe por meio de slots ou soquetes para formar uma rede interconectada de hardware. Além disso, as placas-mãe também vêm com recursos integrados, como portas USB, para conectar dispositivos externos, tomadas de áudio para saída de som e portas Ethernet para recursos de rede. Em suma, a placa-mãe serve como base de qualquer sistema de computador e fornece a estrutura para todas as funções que devem ocorrer para que funcione corretamente.
        </Text>

        <Text style={styles.titulo}>Como funciona uma Placa-mãe?</Text>

        <Text style={styles.textoPrincipal}>
        A Placa-mãe é essencialmente responsável por conectar todos os diferentes componentes dentro de um computador.Possui conectores para praticamente todos os tipos de componentes, da RAM às portas USB.Ao conectar esses componentes, isso permite que eles se comuniquem um com o outro para que seu computador possa fazer o que você deseja.
        </Text>
      </View>

      <View style={styles.divImg}>
        <Image source={require('../assets/placa_mae.jpg')} style={styles.img} />
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
