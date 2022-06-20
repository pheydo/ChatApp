import * as React from 'react';
import { Text, View ,StyleSheet,FlatList} from 'react-native';
import { DATA } from "../../src/Component/HistoryData";
import Item from "../../src/Component/HistoryItem";



export default function Notification() {

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
      <View style={Styles.v1}>
        <Text>Home</Text>

           <View style={Styles.v2}>
           <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                // ItemSeparatorComponent={() => (
                //   <View style={{ height: 1,   width:width*0.90 ,alignSelf:"center"  }} />
                // )}
                ListFooterComponent={<View style={{ marginTop: 480 }} />}
              />
           </View>
      
      </View>
    );
  }

const Styles=StyleSheet.create({

v1:{
    flex:1,
     flexdirection: "row", 
},
v2:{
  marginTop:70,


}

})
