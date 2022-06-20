import React from "react";
import { View,Text,StyleSheet,TouchableOpacity } from "react-native";




export default function Welcomepage({navigation}) {

   ;

return(


<View style={Styles.v1}>
<View style={Styles.v2}>
<Text style={Styles.t1}>
    Direct Pay$
</Text>

</View>
<View>
    <TouchableOpacity style={Styles.btn1}>
  <Text  onPress={() => navigation.navigate("Signup")} style={Styles.t2}>Signup</Text>
    </TouchableOpacity>
    <Text style={Styles.t3}>Already have an Account? <Text   onPress={() => navigation.navigate("Login")} style={Styles.t4}>Login</Text></Text>
</View>
</View>









);


}

const Styles = StyleSheet.create({
v1:{
    flex:1,
    backgroundColor:"green",
    
},
v2:{
    marginTop:300,


},
t1:{
    justifyContent:"center",
    alignSelf:"center",
    color:"white",
    fontSize:50
},
t2:{
    alignSelf:"center",
    color:"green",
    fontSize:20
    
},

t3:{
    alignSelf:"center",
    color:"#c8b88a",
    fontSize:15
    
},

t4:{
    alignSelf:"center",
    color:"white",
    fontSize:20
    
},
btn1:{
    marginTop:200,
    height:55,
    backgroundColor:"white",
    width:"90%",
    alignSelf:"center",
    borderRadius:12,
    justifyContent:"center"

}

});