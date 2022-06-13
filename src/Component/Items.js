import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

const { width, height } = Dimensions.get("window");

const Item = ({ title, title1, title2, title3, image }) => {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });


  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  }

  return (
    <TouchableOpacity style={Styles.item}>
      <Image style={Styles.image3} source={image} />

      <View style={{ left: 5, justifyContent: "space-between", width: "60%" }}>
        <Text ellipsizeMode="middle" numberOfLines={1} style={Styles.title1}>
          {title1}
        </Text>
        <Text style={Styles.title2}>{title2}</Text>
      </View>

      <View style={{ justifyContent: "space-between" }}>
        <Text style={Styles.title}>{title}</Text>
        <Text style={Styles.title3}>{title3}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  item: {
    // overflow:"hidden",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#ffff",
    padding: 10,
    height: 60,
    marginVertical: 2,
    // marginHorizontal:16,
    borderRadius: 13,
    width: width * 0.9,
    alignSelf: "center",
  },
  title1: {
    fontSize: 13,
    fontFamily: 'Inter_900Black'
  },
  title2: {
    fontSize: 12,
    padding: 5,
    fontFamily: 'Inter_900Black'

  },

  title3: {
    fontSize: 12,
    padding: 5,
  },

  title: {
    fontSize: 12,
    fontWeight: "bold",
    padding: 5,
  },

  image3: {
    borderRadius: 4,
    height: 40,
    width: 40,
    alignSelf: "center",
  },
});

export default Item;
