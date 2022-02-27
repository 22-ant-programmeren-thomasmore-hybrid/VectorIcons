import {StyleSheet, Text, View} from "react-native";
import tw from "twrnc";
import {usePlacesContext} from "../contexts/PlacesContext";


export function PlacesScreen() {
    const {places} = usePlacesContext();
    return (
        <View style={styles.container}>
            <Text >Places screen</Text>
            {places.map(place => <Text key={place.id}>{place.name}</Text>)}
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: tw`h-full bg-yellow-100`,
    }
)