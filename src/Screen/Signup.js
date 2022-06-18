import React from "react";
import { View,Text, } from "react-native";
import Input from '../../src/Component/Input'


export default function signup(){

    const [text,  onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);

return(



<View>
<Input value={text}  onChangeText={onChangeNumber}  placeholder="Enter full name"  />


</View>






);


}