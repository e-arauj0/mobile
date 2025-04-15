import React, {useEffect} from 'react';
import {View, ActivityIndicator, Image, StyleSheet} from 'react-native';

const SplashScreen = ({navigation}) => {
    useEffect(() => {
    //Define duração do splash (4 segundos)
    const timer = setTimeout(() => {
        navigation.replace('Login'); // Após o tempo, navega para a tela de login
    }, 4000);

    return () => clearTimeout(timer); //Limpa o timer quando o componente for desmontado
    }, [navigation]);

    return (
        <View style={StyleSheet.splashContainer}>
            <Image source={{uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fletsenhance.io%2Fpt&psig=AOvVaw2O-zTs_JwW_L19j1Hl0ZPy&ust=1744763774154000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjDu7nm2IwDFQAAAAAdAAAAABAE'}}/>

            <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
        </View>
    )
};

const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    splashImage: {
        width:150,
        height: 150,
        marginBottom: 20,
    },
    loader: {
        marginTop: 20,
    },
});

export default SplashScreen;