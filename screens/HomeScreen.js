import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
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

function HomeScreenButton() {
    return (
        <View style={[styles.buttonView, styles.buttonViewBare]}>
            <TouchableOpacity style={styles.buttonOpacity}
                              onPress={() => console.log("Hallo")}>
                <Text style={styles.buttonText}>
                    Let's go</Text>
            </TouchableOpacity>
        </View>
    );
}

export function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Banner/>
            <ColorImage/>
            <HomeScreenButton/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create(
    {
        container: tw`h-full`,
        banner: tw`bg-purple-700 p-5`,
        bannerText: tw`text-white text-center text-lg`,
        buttonView: tw`absolute top-1/2 w-full mt-4`,
        buttonViewBare: {alignItems: "center"},
        buttonOpacity: tw`p-5 bg-purple-700 rounded-full w-60`,
        buttonText: tw`text-lg text-center text-white`,
    }
)