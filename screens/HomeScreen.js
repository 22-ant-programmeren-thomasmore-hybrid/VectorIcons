import {Text, View, StyleSheet} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import tw from "twrnc";

function Banner() {
    return (
        <View style={styles.banner}>
            <Text style={styles.bannerText}>My favourite places</Text>
        </View>
    );
}

export function HomeScreen() {
    return (
        <SafeAreaView>
            <Banner/>
            <View style={tw`h-full bg-yellow-300`}>
                <View style={tw`w-20 h-30 bg-red-400 border-2 border-red-800 m-3`}/>
                <View style={tw`w-20 h-30 bg-green-400 border-2 border-green-800 m-3`}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create(
    {
        banner: tw`bg-purple-700 p-5`,
        bannerText: tw`text-white text-center text-lg`,
    }
)