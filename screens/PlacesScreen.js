import {StyleSheet, Text, View} from "react-native";
import tw from "twrnc";

export function PlacesScreen() {
    return (
        <View style={styles.container}>
            <Text >Places screen</Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: tw`h-full bg-yellow-200`,
    }
)