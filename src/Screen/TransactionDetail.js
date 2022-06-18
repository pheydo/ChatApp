import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
    FlatList,
    ScrollView,
    TextInput
  } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../../src/Component/Input'

const { width, height } = Dimensions.get("window");

export default function TransactionDetail(){

    const [text,  onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);

    return(
        <SafeAreaView>
 
 <View   style={Styles.v2}>
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
<View style={Styles.inputV}>

<Input value={text}  onChangeText={onChangeNumber}  placeholder="Enter full name"  />

{/* <TextInput
        style={Styles.input}
        onChangeText={onChangeText}
        placeholder=" #0.00"
        value={text}
      />  */}

{/* <TextInput
        style={Styles.input}
        onChangeText={onChangeText}
        placeholder=" select bank"
        value={text}
      />


<TextInput
        style={Styles.input}
        onChangeNumber={onChangeNumber}
        placeholder="  07033585868"
        value={number}
        keyboardType="numeric"
      />

<TextInput
        style={Styles.input}
        onChangeText={onChangeText}
        placeholder=" what's is this for"
        value={text}
      /> */}
</View>

        </SafeAreaView>
       




    );
}
const Styles=StyleSheet.create({

    v1:{
        // flex:1,
    backgroundColor:"green",
         flexdirection: "row", 
    },
    image2: {
        height: 60,
        width: 60,
        borderRadius: 50,
        // backgroundColor: "red",
        marginLeft: 10,
      },
      v2: {
        marginTop:50,
        flexDirection:"row",
        // backgroundColor:'green'
      },

    //   input: {
    //  width:width*0.9,
    //     height:60,
    //     margin: 15,
    //     borderWidth: 1,
    //     width:320,
       
    
        
    //   },
    //   inputV:{
    //     // marginTop:80,
    //     height:height*0.9
    //   }
    
    })
    