import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import tw from "twrnc";
import {ColorImage} from "../components/ColorImage";
import {NAV_IMAGES, NAV_PLACES} from "../navigation_constants";
import {useNavigation} from "@react-navigation/native";

function Banner() {
    return (
        <View style={styles.banner}>
            <Text style={styles.bannerText}>My favourite places</Text>
        </View>
    );
}

function HomeNavButton({navLink, text}) {
    const navigation = useNavigation();
    return (<TouchableOpacity style={styles.buttonOpacity}
                              onPress={() => navigation.navigate(navLink)}>
            <Text style={styles.buttonText}>{text || navLink}</Text>
        </TouchableOpacity>
    );
}

function HomeScreenButtons() {
    return (
        <View style={[styles.buttonView, styles.buttonViewBare]}>
            <HomeNavButton navLink={NAV_PLACES} text="Let's go"/>
            <HomeNavButton navLink={NAV_IMAGES}/>
        </View>
    );
}

export function HomeScreen() {
    return (
        <>
            <Banner/>
            <ColorImage/>
            <HomeScreenButtons/>
        </>
    );
}

const styles = StyleSheet.create(
    {
        banner: tw`bg-purple-700 p-5`,
        bannerText: tw`text-white text-center text-lg`,
        buttonView: tw`absolute top-1/4 w-full mt-4`,
        buttonViewBare: {alignItems: "center"},
        buttonOpacity: tw`p-5 bg-purple-700 rounded-full w-60 m-2`,
        buttonText: tw`text-lg text-center text-white`,
    }
)