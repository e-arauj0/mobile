import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './home';
import Dica1 from './dica1';
import Dica2 from './dica2';

const Stack = createStackNavigator();

export default function rotasBotao() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" conponent={Home}/>
                <Stack.Screen name="Dica1" conponent={Dica1}/>
                <Stack.Screen name="Dica2" conponent={Dica2}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}