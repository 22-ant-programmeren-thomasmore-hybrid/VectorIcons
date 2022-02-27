import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import tw from "twrnc";
import {ColorImage} from "../components/ColorImage";
import {NAV_PLACES} from "../navigation_constants";
import {useNavigation} from "@react-navigation/native";

function Banner() {
    return (
        <View style={styles.banner}>
            <Text style={styles.bannerText}>My favourite places</Text>
        </View>
    );
}

function HomeScreenButton() {
    const navigation = useNavigation();

    return (
        <View style={[styles.buttonView, styles.buttonViewBare]}>
            <TouchableOpacity style={styles.buttonOpacity}
                              onPress={() => navigation.navigate(NAV_PLACES)}>
                <Text style={styles.buttonText}>
                    Let's go</Text>
            </TouchableOpacity>
        </View>
    );
}

export function HomeScreen() {
    return (
        <>
            <Banner/>
            <ColorImage/>
            <HomeScreenButton/>
        </>
    );
}

const styles = StyleSheet.create(
    {
        banner: tw`bg-purple-700 p-5`,
        bannerText: tw`text-white text-center text-lg`,
        buttonView: tw`absolute top-1/2 w-full mt-4`,
        buttonViewBare: {alignItems: "center"},
        buttonOpacity: tw`p-5 bg-purple-700 rounded-full w-60`,
        buttonText: tw`text-lg text-center text-white`,
    }
)