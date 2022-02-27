import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import tw from "twrnc";
import {usePlacesContext} from "../contexts/PlacesContext";


export function Place({place}) {
    const {onToggleIsSelected} = usePlacesContext();

    return (
        <View style={styles.placeContainer}>
            <View style={styles.hairline}/>
            <TouchableOpacity
                style={styles.button(place.isSelected)}
                onPress={() => onToggleIsSelected(place)}
            >
                <Text style={styles.name}>{place.name}</Text>
                <Text style={styles.description}>{place.description}</Text>
            </TouchableOpacity>
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
        hairline: {height: StyleSheet.hairlineWidth, backgroundColor: "gray"},
        button: (isSelected) =>  tw`p-3 ${isSelected ? "bg-orange-100" : ""}`,
        name: tw`font-semibold text-lg`,
        description: tw`text-gray-500`,
    }
)