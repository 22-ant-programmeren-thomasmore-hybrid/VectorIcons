import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import tw from "twrnc";
import {ColorImage} from "../components/ColorImage";

function Banner() {
    return (
        <View style={styles.banner}>
            <Text style={styles.bannerText}>My favourite places</Text>
        </View>
    );
}

export function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Banner/>
            <ColorImage/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create(
    {
        container: tw`h-full`,
        banner: tw`bg-purple-700 p-5`,
        bannerText: tw`text-white text-center text-lg`,
    }
)