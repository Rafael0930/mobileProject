import React from "react";
import { View, Text,ScrollView } from "react-native";
import CardProduct from '../components/CardProduct'
import Contador from "../components/Contador"

const Carrito = () => {
  return (
    <View>
    <View style={{
      height:125,
      alignItems: "center",
      shadowColor: "#000",
      borderWidth:1,
      borderColor: "#fff",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
          }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", color :'#4A69FF', top:65,}}>Carrito</Text>
    </View>
    <ScrollView>
        <CardProduct></CardProduct>
      </ScrollView>
    </View>
    
  );
};

export default Carrito;