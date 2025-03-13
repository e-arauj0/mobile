import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Home';
import Dicas1 from './Dicas1';
import Dicas2 from './Dicas2';

const Stack = createStackNavigator();

export default function rotasBotao() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" conponent={Home}/>
                <Stack.Screen name="Dicas1" conponent={Dicas1}/>
                <Stack.Screen name="Dicas2" conponent={Dicas2}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}