import {StyleSheet} from "react-native";
import tw from "twrnc";
import {Icon} from "react-native-elements";

export function PlaceIcon({place}) {
    return (
        <Icon name={place.icon}
              color={place.color}
              type="ionicon"
              size={24}
              style={styles.placeIcon}/>
    );

}

const styles = StyleSheet.create(
    {
        placeIcon: tw`mr-4 bg-pink-100 rounded-full p-3`,
    }
)