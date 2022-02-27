import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Icon} from "react-native-elements";
import tw from "twrnc";
import {usePlacesContext} from "../contexts/PlacesContext";

function PlaceIcon({place}) {
    return (
        <Icon name={place.icon}
              type="ionicon"
              size={24}
              style={styles.icon}/>
    );

}

export function Place({place}) {
    const {onToggleIsSelected} = usePlacesContext();

    return (
        <View style={styles.placeContainer}>
            <View style={styles.hairline}/>
            <TouchableOpacity
                style={styles.touchable(place.isSelected)}
                onPress={() => onToggleIsSelected(place)}
            >
                <PlaceIcon place={place}/>
                <View>
                    <Text style={styles.name}>{place.name}</Text>
                    <Text style={styles.description}>{place.description}</Text>
                </View>
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
        touchable: (isSelected) => tw`p-3 flex-row items-center ${isSelected ? "bg-orange-100" : ""}`,
        name: tw`font-semibold text-lg`,
        description: tw`text-gray-500`,
        icon: tw`mr-4 bg-pink-300 rounded-full p-3`,
    }
)