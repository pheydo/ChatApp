import * as React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

const Item = ({ title1, title2, whenIpress }) => (
  <TouchableOpacity onPress={whenIpress} style={Styles.item}>
    <View style={{ flexDirection: "column", left: 5 }}>
      <Text style={Styles.title1}>{title1}</Text>
      <Text style={Styles.title2}>{title2}</Text>
    </View>
    <View style={{ justifyContent: "space-between" }}></View>
  </TouchableOpacity>
);

const Styles = StyleSheet.create({
  item: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    flexDirection: "row",
    backgroundColor: "#ffff",
    padding: 10,
    height: 60,
    marginVertical: 2,
    marginHorizontal: 16,
    borderRadius: 13,
  },

  title1: {
    fontSize: 19,
    fontWeight: "bold",
    color: "green",
  },
  title2: {
    fontSize: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Item;
