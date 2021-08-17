import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Restaurants from "../screens/Restaurants";
import Carrito from "../screens/Carrito";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Restaurants" component={Restaurants} />
      <Tab.Screen name="Carrito" component={Carrito} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
