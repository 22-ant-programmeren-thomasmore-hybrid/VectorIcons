import {HomeScreen} from "./screens/HomeScreen";
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NAV_HOME, NAV_PLACES} from "./navigation_constants";
import {PlacesScreen} from "./screens/PlacesScreen";

function ProvidedApp() {
    const Stack = createNativeStackNavigator();
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name={NAV_HOME} component={HomeScreen}/>
                <Stack.Screen name={NAV_PLACES} component={PlacesScreen}/>
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
