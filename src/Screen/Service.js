import * as React from 'react';
import { Text, View ,StyleSheet,Image,Dimensions,TouchableOpacity} from 'react-native';


const { width, height } = Dimensions.get("window");


export default function Service() {
    return (
      <View style={Styles.v1}>
          <Text style={Styles.T1}>Payment</Text>
       <View style={Styles.v2}>
      <TouchableOpacity>

      <Image
          resizeMode={"stretch"}
          style={Styles.image2}
          source={require("../../assets/MaskGroup.png")}
        />
      </TouchableOpacity>
       
      <TouchableOpacity>

<Image
    resizeMode={"stretch"}
    style={Styles.image2}
    source={require("../../assets/MaskGroup.png")}
  />
</TouchableOpacity>
 
<TouchableOpacity>

<Image
    resizeMode={"stretch"}
    style={Styles.image2}
    source={require("../../assets/MaskGroup.png")}
  />
</TouchableOpacity>
 
<TouchableOpacity>

<Image
    resizeMode={"stretch"}
    style={Styles.image2}
    source={require("../../assets/MaskGroup.png")}
  />
</TouchableOpacity>
 
   

       </View>
      </View>
    );
  }

const Styles=StyleSheet.create({

v1:{
    
backgroundColor:"pink",
     height:height*0.1,
},

T1:{
    alignSelf:"center",
  marginTop:40,
       height:height*0.1,
  },
v2:{
  flexDirection:"row",
    padding:10,
    paddingLeft:15
    
     
},
image2:{height:75,
width:75,
borderRadius:50,
backgroundColor:"red",
marginLeft:10
    


}

})
