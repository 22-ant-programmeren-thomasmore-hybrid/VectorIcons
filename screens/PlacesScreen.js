import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Icon} from "react-native-elements";
import tw from "twrnc";
import {usePlacesContext} from "../contexts/PlacesContext";
import {NAV_PLACE_DETAILS} from "../navigation_constants";
import {useNavigation} from "@react-navigation/native";

function PlaceIcon({place}) {
    return (
        <Icon name={place.icon}
              color={place.color}
              type="ionicon"
              size={24}
              style={styles.placeIcon}/>
    );

}

export function Place({place}) {
    const {onToggleIsSelected} = usePlacesContext();
    const navigation = useNavigation();

    return (
        <View style={styles.placeContainer}>
            <View style={styles.hairline}/>
            <TouchableOpacity
                style={styles.touchable(place.isSelected)}
                onPress={() => onToggleIsSelected(place)}
            >
                <PlaceIcon place={place}/>
                <View style={tw`flex-1`}>
                    <Text style={styles.name}>{place.name}</Text>
                    <Text style={styles.description}>{place.description}</Text>
                </View>
                <TouchableOpacity
                    style={styles.detailsButton}
                    onPress={() =>navigation.navigate(NAV_PLACE_DETAILS, {place})}
                >
                    <Icon name={"chevron-right"} style={styles.detailsButtonIcon}/>
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    );
}

export function PlacesScreen() {
    const {places} = usePlacesContext();
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatlist}
                data={places}
                keyExtractor={place => place.id}
                renderItem={({item}) => <Place place={item}/>}
            />
        </View>
    );
}

// noinspection JSSuspiciousNameCombination
const styles = StyleSheet.create(
    {
        container: tw`h-full`,
        flatlist: tw`mb-5`,
        placeContainer: tw`w-full`,
        hairline: {height: StyleSheet.hairlineWidth, backgroundColor: "gray"},
        touchable: (isSelected) => tw`p-3 flex-row items-center ${isSelected ? "bg-orange-100" : ""}`,
        name: tw`font-semibold text-lg`,
        description: tw`text-gray-500`,
        placeIcon: tw`mr-4 bg-pink-100 rounded-full p-3`,
        detailsButton: tw`py-3`,
        detailsButtonIcon: tw`bg-pink-100 rounded-full p-3`,
    }
)