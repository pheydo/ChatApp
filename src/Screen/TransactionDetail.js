import * as React from 'react';
import { Text, View ,StyleSheet} from 'react-native';

export default function Details(){

    return(

        <View style={Styles.v1}>
        <Text>Home</Text>
      </View>





    );
}
const Styles=StyleSheet.create({

    v1:{
        flex:1,
    backgroundColor:"red",
         flexdirection: "row", 
    }
    
    
    })
    