import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import Item from "../../src/Component/PaymentItems";
import { DATA } from "../../src/Component/PaymementData";
import TransactionDetail from "./TransactionDetail";

const { width, height } = Dimensions.get("window");

export default function Service({ navigation }) {
  const renderItem = ({ item }) => (
    <Item
      whenIpress={() => navigation.navigate("TransactionDetail")}
      title1={item.title1}
      title2={item.title2}
    />
  );

  return (
    <View style={Styles.v1}>
      <View style={Styles.text1}>
        <Text style={Styles.T1}>Payment</Text>
      </View>

      <View style={Styles.v2}>
        <TouchableOpacity>
          <Image
            // resizeMode={"stretch"}
            style={Styles.image2}
            source={require("../../assets/Rectangle2.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            // resizeMode={"stretch"}
            style={Styles.image2}
            source={require("../../assets/Rectangle2.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            // resizeMode={"stretch"}
            style={Styles.image2}
            source={require("../../assets/Rectangle2.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            // resizeMode={"stretch"}
            style={Styles.image2}
            source={require("../../assets/Rectangle2.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={Styles.v3}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  v1: {
    height: height,
  },

  T1: {
    alignSelf: "center",
    marginTop: 60,
    fontSize: 19,
    color:"white"
  },
  v2: {
    marginTop: 50,
    flexDirection: "row",
    // backgroundColor:'green'
  },

  v3: {
    marginTop: 20,
  },
  image2: {
    height: 60,
    width: 60,
    borderRadius: 50,
    // backgroundColor: "red",
    marginLeft: 10,
  },
  text1: { height: height * 0.15, backgroundColor: "green" },
});
