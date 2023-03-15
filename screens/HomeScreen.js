import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import tw from "twrnc";
import {ColorImage} from "../components/ColorImage";
import {NAV_IMAGES, NAV_PLACES} from "../navigation_constants";
import {useNavigation} from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {Icon} from "react-native-elements";

function Banner() {

    return (
        <View >
            <Text>My favourite places</Text>
            <View>
                <Icon name="play" size={30} color="#900" />
                <Icon name="pause" size={30} color="#900" />
            </View>
        </View>
    );
}

function HomeNavButton({navLink, text}) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity  onPress={() => navigation.navigate(navLink)}>
            {text ? (
                <Text >{text}</Text>
            ) : (
                navLink === NAV_IMAGES && <Ionicons name="ios-images-outline" size={32} color="white" />
            )}
            {navLink === NAV_PLACES && <FontAwesome name="map-marker" size={32} color="white" />}
        </TouchableOpacity>
    );
}

function HomeScreenButtons() {
    return (
        <View >
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