import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Restau() {
  return (
    <View style={styles.container}>
      <View style={styles.icons}>
      <Feather name="arrow-left" size={24} color="black" />
        <TouchableOpacity>
          <Text style={styles.button}></Text>
        </TouchableOpacity>
        <Ionicons name="menu" size={24} color="black" />
      </View>
    
 
      <Image
            source={require("./assets/whiteplate.jpg")}
            style={styles.image}
          />
           <View style={styles.addOrderButton}>
        <Text style={styles.addOrder}>+ 1</Text>
       
         
        </View>

        <Text style={styles.textPrice}>Tomato pasta  -$12.35</Text>
        <Text style={styles.textDtails}>Italian paster with tomatoes  provencial </Text>
         <Text style={styles.textDtails}> herbs and basil
        </Text>
        <View style={styles.info}>
        <Fontisto name="fire" size={24} color="orange" />
        <Text style={{marginLeft:15, color:"lightgrey", fontWeight:"bold", fontSize:15}}>456 08</Text>
        </View>
        <Text style={{fontSize:35, alignSelf:"center", color:"orange"}}>  
        .  .  .  .</Text>
        <View style={styles.items}>
          <Text style={{fontSize:20,fontWeight:"bold"}}> 4  Items in Card</Text>
          <Text  style={{fontSize:20,fontWeight:"bold"}}>$46.98</Text>
        </View>
        <View style={styles.items2}>
        <Entypo name="location-pin" size={24} color="orange"  />
        <Text>745 lincolin PI</Text>
        {/* <MaterialCommunityIcons name="gesture-tap-button" size={24} color="orange" />
        <Text >5491</Text> */}
        </View>
        <View style={styles.button1}>
        <Text style={{alignSelf:"center",fontWeight:"bold",fontSize:15,color:"white"}} >Order</Text>
        </View>
          </View>
        
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal:5,
    marginVertical:15,
    // backgroundColor: "#ebdded",
  },
  icons: {
    flexDirection: "row",
    marginVertical: 25,
    justifyContent: "space-between",
  },

  button: {
    height: 35,
    width: 130,
    borderRadius: 25,
    backgroundColor: "#f5f3ed",
    alignContent: "center",
  },
  menuLeft: {
    marginHorizontal: 7,
  },
 
image:{
  height:130,
  width:160,
  alignSelf:"center",
  marginTop:25,
  borderRadius:60
},

addOrderButton: {
  position: "absolute",
  // marginVertical: 100,
  marginHorizontal: 15,
  marginTop: 210,
  alignSelf:"center",
  height: 40,
  width: 100,
  borderRadius: 30,
  backgroundColor: "white",
},
addOrder: {
  fontWeight: "bold",
  alignSelf: "center",
  marginTop: 5,
  fontSize: 20,
},

textPrice:{
  fontSize:20,
  fontWeight:"bold",
  marginTop:40,
  alignSelf:"center",
  marginBottom:10
},
textDtails:{
  fontSize:15,
  alignSelf:"center",
  // marginTop:10
},
info:{
  flexDirection:"row",
  marginVertical:15,
  alignSelf:"center",
 
},

items:{
  flexDirection:"row",
  justifyContent:"space-between",
  marginHorizontal:20,
  marginVertical:30,
  
},

items2:{
  flexDirection:"row",
   marginHorizontal:20,
  // marginVertical:30,
},

button1:{
  height:30,
  width:250,
  backgroundColor:"orange",
  color:"white",
  alignSelf:"center",
  marginVertical:80,
  borderRadius:15
}

 
  
  
});
