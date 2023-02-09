import {StatusBar} from 'expo-status-bar';
import {HomeScreen} from "./screens/HomeScreen";
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";

function ProvidedApp() {
    return (
        <>
            <StatusBar/>
            <HomeScreen/>
        </>
    );
}

export default function App() {
    return (
        <SafeAreaProvider>
            <ProvidedApp/>
        </SafeAreaProvider>
    );
}
