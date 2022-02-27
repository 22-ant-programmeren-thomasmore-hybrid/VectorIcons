import {StyleSheet, Text, View} from "react-native";
import tw from "twrnc";

export function ImagesScreen() {
    return (
        <View style={styles.container}>
            <Text >Images screen</Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: tw`h-full bg-pink-200`,
    }
)