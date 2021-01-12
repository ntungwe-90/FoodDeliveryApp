import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import Restaurant from "./Restaurant";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function RestaurantScreen() {
  const restaurantScreen = [
    { image: require("./assets/fruits2.jpg"), name: "berries", price: "$30" },

    {
      image: require("./assets/rice.jpg"),
      name: "Beef",
      price: "$50",
    },

    { image: require("./assets/fruits.jpg"), name: "salad", price: "$40" },

    {
      image: require("./assets/salad.jpg"),
      name: "mixed",
      price: "$80",
    },
  ];

  return (
    <View>
      <View style={styles.icons}>
        <Feather name="arrow-left" size={24} color="black" />
        <TouchableOpacity>
          <Text style={styles.button}></Text>
        </TouchableOpacity>
        <Ionicons name="menu" size={24} color="black" />
      </View>
      <View>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>
          OTHERS
        </Text>
      </View>
      <FlatList
        data={restaurantScreen}
        renderItem={({ item }) => {
          return (
            <Restaurant
              name={item.name}
              price={item.price}
              image={item.image}
            />
          );
        }}
        keyExtractor={(item) => item.number}
      />
      <View style={styles.button1}>
        <Text style={{alignSelf:"center",fontWeight:"bold",fontSize:15,color:"white",}} >Order</Text>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    flexDirection: "row",
    marginVertical: 45,
  },
  icons: {
    flexDirection: "row",
    marginVertical: 35,
    justifyContent: "space-between",
    marginHorizontal: 15,
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

  image: {
    height: 90,
    width: 40,
  },
  info: {
    marginLeft: 150,
  },
  prize: {
    fontWeight: "bold",
    color: "blue",
  },

  button1:{
    height:30,
    width:250,
    backgroundColor:"orange",
    color:"white",
    alignSelf:"center",
    marginTop:20,
    // marginVertical:80,
    borderRadius:15
  }
});
