import {View} from "react-native";
import tw from 'twrnc';

export function ColorImage() {
    return (
        <View style={tw`flex-1 bg-blue-100`}>
            <View style={tw`flex-row flex-1 bg-pink-100`}>
                <View style={{width: 50, height: "100%", backgroundColor: "pink"}}/>
                <View style={{width: 100, height: "100%", backgroundColor: "orange"}}/>
                <View style={{width: 200, height: "100%", backgroundColor: "coral"}}/>
                <View style={{width: 150, height: "100%", backgroundColor: "bisque"}}/>
            </View>
            <View style={{flex: 1, width: 100, height: 50, backgroundColor: "lightsalmon"}}/>
            <View style={{flex: 1, width: 50, height: 50, backgroundColor: "hotpink"}}/>
            <View style={{flex: 1, width: "25%", height: 50, backgroundColor: "moccasin"}}/>
            <View style={{flex: 1, width: "50%", height: 50, backgroundColor: "peachpuff"}}/>
            <View style={{flex: 1, width: 150, height: 50, backgroundColor: "plum"}}/>
            <View style={{flex: 1, width: 200, height: 50, backgroundColor: "tomato"}}/>
            <View style={{flex: 1, width: "100%", height: 50, backgroundColor: "violet"}}/>
        </View>
    );
}