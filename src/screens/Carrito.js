import React from "react";
import { View, Text } from "react-native";

const Carrito = (props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f9ed69",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 42, fontWeight: "bold" }}>Carrito</Text>
    </View>
  );
};

export default Carrito;
