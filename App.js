import {HomeScreen} from "./screens/HomeScreen";
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import tw from "twrnc";
import {NAV_HOME, NAV_IMAGES, NAV_PLACE_DETAILS, NAV_PLACES} from "./navigation_constants";
import {PlacesScreen} from "./screens/PlacesScreen";
import {ImagesScreen} from "./screens/ImagesScreen";
import {PlacesProvider} from "./contexts/PlacesContext";
import {PlaceDetailsScreen} from "./screens/PlaceDetailsScreen";

function ProvidedApp() {
    const Stack = createNativeStackNavigator();
    return (
        <>
            <Stack.Navigator screenOptions={screenOptions}>
                <Stack.Screen name={NAV_HOME} component={HomeScreen}/>
                <Stack.Screen name={NAV_PLACES} component={PlacesScreen}/>
                <Stack.Screen name={NAV_IMAGES} component={ImagesScreen}/>
                <Stack.Screen name={NAV_PLACE_DETAILS} component={PlaceDetailsScreen}/>
            </Stack.Navigator>
        </>
    );
}

const screenOptions = ({
    headerStyle: tw`bg-orange-300`,
    headerTitleStyle: tw`text-purple-900 text-xl font-bold`,
});

export default function App() {
    return (
        <NavigationContainer>
            <SafeAreaProvider>
                <PlacesProvider>
                    <ProvidedApp/>
                </PlacesProvider>
            </SafeAreaProvider>
        </NavigationContainer>
    );
}
