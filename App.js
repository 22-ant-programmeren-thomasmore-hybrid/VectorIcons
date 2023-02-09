import {HomeScreen} from "./screens/HomeScreen";
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function ProvidedApp() {
    const Stack = createNativeStackNavigator();
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
            </Stack.Navigator>
        </>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <SafeAreaProvider>
                <ProvidedApp/>
            </SafeAreaProvider>
        </NavigationContainer>
    );
}
