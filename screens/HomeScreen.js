import {Text, View, StyleSheet} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";

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
        </SafeAreaView>
    );
}

const styles = StyleSheet.create(
    {
        banner: {
            backgroundColor: "purple",
            padding: 25,
        },
        bannerText: {
            color: "white",
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold"
        }
    }
)