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

function PlaceProperty({value, title}) {
    return (
        <View style={stylesPlaceProp.container}>
            <Text style={stylesPlaceProp.title}>{title}</Text>
            <Text style={stylesPlaceProp.value}>{value}</Text>
            <View style={[stylesPlaceProp.hairline, stylesPlaceProp.hairlineBare]}/>
        </View>
    );
}

// noinspection JSSuspiciousNameCombination
const stylesPlaceProp = StyleSheet.create(
    {
        container: tw`bg-gray-100 m-2 pb-4 rounded-xl`,
        title: tw`px-8 font-semibold text-gray-400 text-lg`,
        value: tw`px-8`,
        hairline: tw`mx-8`,
        hairlineBare: {height: StyleSheet.hairlineWidth, backgroundColor: "gray"},
    }
)

export function PlaceDetailsScreen({route}) {
    const {place} = route.params;
    return (
        <View style={styles.container}>
            <Banner place={place}/>
            <PlaceProperty value={place.id} title="id"/>
            <PlaceProperty value={place.name} title="name"/>
            <PlaceProperty value={place.description} title="description"/>
            <PlaceProperty value={place.info} title="info"/>
            <PlaceProperty value={place.icon} title="icon"/>
            <PlaceProperty value={place.color} title="color"/>
            <PlaceProperty value={place.location.lat} title="latitude"/>
            <PlaceProperty value={place.location.lng} title="longitude"/>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: tw`h-full`,
        banner: tw`p-5 flex-row bg-orange-200 `,
        bannerText: tw`text-purple-900 font-bold text-6xl text-center text-lg`,
    }
)