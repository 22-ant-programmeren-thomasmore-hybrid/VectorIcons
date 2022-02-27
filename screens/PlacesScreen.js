import {StyleSheet, Text, View} from "react-native";
import tw from "twrnc";
import {usePlacesContext} from "../contexts/PlacesContext";


export function Place({place}) {
    return (
        <View style={styles.placeContainer}>
            <View style={styles.hairline}/>
            <View style={tw`p-3`}>
                <Text style={tw`font-semibold text-lg`}>{place.name}</Text>
                <Text style={tw`text-gray-500`}>{place.description}</Text>
            </View>
        </View>
    );
}

export function PlacesScreen() {
    const {places} = usePlacesContext();
    return (
        <View style={styles.container}>
            {places.map(place =>
                <Place key={place.id} place={place}/>)}
        </View>
    );
}

// noinspection JSSuspiciousNameCombination
const styles = StyleSheet.create(
    {
        container: tw`h-full bg-yellow-100`,
        placeContainer: tw`w-full`,
        hairline: {height: StyleSheet.hairlineWidth, backgroundColor: "gray"}

    }
)