import {Text, View} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";

export function HomeScreen() {
    return (
        <SafeAreaView>
            <View>
                <Text>My favourite places</Text>
            </View>
        </SafeAreaView>
    );
}