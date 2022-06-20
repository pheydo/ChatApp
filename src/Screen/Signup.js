import * as React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity
 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

export default function TransactionDetail({navigation}) {
    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);
    const [text1, onChangeText1] = React.useState(null);
    const [text2, onChangeText2] = React.useState(null);

  return (
    <View >
        <View style={Styles.v1}>
          {/* <Text style={Styles.t1}>Direct Pay$..</Text> */}
        </View>
     <View style={Styles.inputV}>
     <Text style={Styles.t2}>FullName</Text>
        <TextInput
        style={Styles.input}
        onChangeText={onChangeNumber}
        value={number}
      />
 <Text style={Styles.t2}>Email</Text>
        <TextInput
        style={Styles.input}
        onChangeText={onChangeText}
        value={text}
       
      />
      <Text style={Styles.t2}>Create password</Text>
     <TextInput
        style={Styles.input}
        onChangeText={onChangeText1}
        value={text1}
        keyboardType="numeric"
      />
       <Text style={Styles.t2}>Confirm password</Text>
      <TextInput
        style={Styles.input}
        onChangeText={onChangeText2}
        value={text2}
        keyboardType="numeric"
      />
     </View>
       
     
     <TouchableOpacity  style={Styles.touch}>
      <Text   style={Styles.t3} onPress={() => navigation.navigate("MyTabs")}>Create Account</Text>
     </TouchableOpacity>

    </View>
  );
}
const Styles = StyleSheet.create({
  inputV: {
   
   marginTop:10
  },
  v1:{
    // backgroundColor:"green" ,
     height: height * 0.18, justifyContent:"center",
  },
  t1:{
    color:"white" , alignSelf:"center" ,fontSize:20
  },
  t2:{ marginBottom:-10, padding:3, left:15, color:"green"
    
  },
  t3:{
    color:"white" , alignSelf:"center" , fontSize:25
  },

  touch:{
    marginTop:50,
    backgroundColor:"green" , alignSelf:"center" ,height:60 ,width:"94%",justifyContent:"center",borderRadius:10
  },
  input: {
    height: 50,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius:10
  },
});
