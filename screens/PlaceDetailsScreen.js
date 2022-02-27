import {StyleSheet, Text, View} from "react-native";
import tw from "twrnc";
import {PlaceIcon} from "../components/PlaceIcon";

function Banner({place}) {
    return (
        <View style={styles.banner}>
            <PlaceIcon place={place}/>
            <Text style={styles.bannerText}>{place.name}</Text>
        </View>
    );
}

export function PlaceDetailsScreen({route}) {
    const {place} = route.params;
    return (
        <View style={styles.container}>
            <Banner place={place}/>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: tw`h-full`,
        banner: tw`p-5 flex-row bg-orange-200 `,
        bannerText: tw`text-purple-900 font-bold text-6xl text-center text-lg flex-stretch`,
    }
)