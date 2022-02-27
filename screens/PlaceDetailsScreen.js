import {StyleSheet, Text, View} from "react-native";
import tw from "twrnc";

export function PlaceDetailsScreen({route}) {
    const {place} = route.params;
    return (
        <View style={styles.container}>
            <Text >Place details screen {place.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: tw`h-full`,
    }
)