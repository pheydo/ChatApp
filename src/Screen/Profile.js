

import Item from '../../src/Component/Itemss';

import {DATA} from '../../src/Component/Profiledata';
import { Text, View ,StyleSheet, FlatList,Image} from 'react-native';



export default function Profile () {

        
    const renderItem = ({ item }) => (
        <Item   icon={item.icon} title1={item.title1} title2={item.title2} title3={item.title3} title={item.title} />
      );
  
        return (
         
    
            <View style={{flex:1}}>

           <View style={{top:120}}>
            <Image style={Styles.imag1} source={require("../../assets/MaskGroup.png")}/>
           </View>
           <View style={{top:100,paddingTop:10,paddingBottom:190}}>
           <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
           </View>
           
            
            
         
          </View>
         
    
        );
      }
      const Styles=StyleSheet.create({

        imag1:{ 
                height:160,
                   width:160,
                   borderRadius:50,
                   alignSelf:"center"
            }



      })