import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

export default function Restaurant({ name, image, price }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image style={styles.image} source={image} />
      </View>
      <Text style={styles.info}>{name}</Text>
      <Text style={styles.prize}>{price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flexDirection: "row",
    // marginVertical:45,
    marginTop: 10,
    backgroundColor: "orange",
  },
  imagebox: {
    flexDirection: "row",
  },

  image: {
    height: 130,
    width: 150,
  },
  info: {
    marginLeft: 50,
    fontSize: 20,
    marginTop: 15,
    textAlign: "center",
  },
  prize: {
    fontWeight: "bold",
    color: "white",
    marginTop: 50,
    alignItems: "center",
    
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
