import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Swiper from "react-native-swiper";
import Item from "../../src/Component/Items";
import Icon from "@expo/vector-icons/Entypo";
import { DATA } from "../../src/Component/Constdata";

const { width, height } = Dimensions.get("window");

export default function Home() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    let today = new Date();
    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    setDate(date);
  }, []);

  const renderItem = ({ item }) => (
    <Item
      image={item.image}
      title1={item.title1}
      title2={item.title2}
      title3={item.title3}
      title={item.title}
    />
  );

  return (
    <View style={{}}>
      <View style={Styles.v1}>
        <View>
          <Text>Welcome back</Text>
          <Text>Idowu Ibukun Femi</Text>
        </View>
        {/* <Image style={Styles.imag1} source={require("../../assets/Group5.png")}/> */}
        <Image
          resizeMode={"stretch"}
          style={Styles.imag2}
          source={require("../../assets/MaskGroup.png")}
        />
      </View>

      <View style={Styles.v3}>
        <Swiper loop={false}>
          <View style={{ height: 700 }}>
            <View>
              <View style={Styles.v31}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flexDirection: "column" }}>
                    <Text
                      style={{
                        color: "#ffff",
                        fontWeight: "bold",
                        fontSize: 15,
                      }}
                    >
                      Balance{" "}
                    </Text>
                    <Text style={{ color: "#ffff", fontWeight: "bold" }}>
                      {"Today"} - {date}
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 30,
                    top: 14,
                    color: "#ffff",
                    fontWeight: "bold",
                  }}
                >
                  #400,000,000.567
                </Text>
                <Text style={{ color: "#fff", alignSelf: "center", top: 15 }}>
                  up by 2% from last month
                </Text>
                <TouchableOpacity>
                  <Icon
                    // onPress={() => navigation.navigate("Details")}
                    name="plus"
                    size={34}
                    color="#4169E1"
                    style={{
                      alignSelf: "center",
                      top: 50,
                      backgroundColor: "#fff",
                      borderRadius: 50,
                    }}
                  ></Icon>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ height: 340, top: 60 }}>
              <View style={{ flexDirection: "row" }}>
                <Text> Recent Transaction</Text>
                <Text> see all</Text>
              </View>
              <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>

          <View>
            {/* CARD */}

            <View>
              <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => (
                  <View style={{ height: 12, backgroundColor: "red", width }} />
                )}
                ListHeaderComponent={
                  <View>
                    <View style={Styles.v311}>
                      <View style={{ flexDirection: "row" }}>
                        <View>
                          <Text
                            style={{
                              color: "#ffff",
                              fontWeight: "bold",
                              fontSize: 15,
                            }}
                          >
                            Savings{" "}
                          </Text>
                          <Text style={{ color: "#ffff", fontWeight: "bold" }}>
                            {"Today"} - {date}
                          </Text>
                        </View>
                      </View>
                      <Text
                        style={{
                          alignSelf: "center",
                          fontSize: 30,
                          top: 14,
                          color: "#ffff",
                          fontWeight: "bold",
                        }}
                      >
                        #400,000.567
                      </Text>
                      <Text
                        style={{ color: "#fff", alignSelf: "center", top: 15 }}
                      >
                        up by 2% from last month
                      </Text>
                      <TouchableOpacity>
                        <Icon
                          // onPress={() => navigation.navigate("Details")}
                          name="plus"
                          size={34}
                          color="#4169E1"
                          style={{
                            alignSelf: "center",
                            top: 50,
                            backgroundColor: "#fff",
                            borderRadius: 50,
                          }}
                        ></Icon>
                      </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Text> Recent Transaction</Text>
                      <Text> see all</Text>
                    </View>
                  </View>
                }
                ListFooterComponent={<View style={{ marginTop: 350 }} />}
              />
            </View>
          </View>
          <View style={Styles.v31}>
            <Text>mumu</Text>
          </View>
        </Swiper>
      </View>

      <View style={{ flexDirection: "row" }}></View>
    </View>
  );
}

const Styles = StyleSheet.create({
  v1: {
    // top: 50,
    paddingTop: 20,
    flexDirection: "row",
    backgroundColor: "cyan",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  v2: {
    // left: 130,
    // flexDirection: "row",
  },
  v3: {
    height,
  },

  v31: {
    padding: 10,
    top: 30,
    height: 200,
    width: 310,
    backgroundColor: "#4169E1",
    borderRadius: 20,
    alignSelf: "center",
  },

  v311: {
    padding: 10,
    // top: 30,
    height: 200,
    width: 310,
    backgroundColor: "blue",
    borderRadius: 20,
    alignSelf: "center",
  },
  imag1: {
    top: 10,
    height: 25,
    width: 24,
  },
  imag2: {
    height: 70,
    width: 70,
    backgroundColor: "red",
  },
});
