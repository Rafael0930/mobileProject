import React from "react";
import { View, Image, Text, StyleSheet, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      products: [
        {
          Key:1,
          title:'title',
          description:'description',
          price:'$'+12.58,
          image:''
        },
        {
          Key:2,
          title:'title',
          description:'description',
          price:'$'+12.58,
        },
        {
          Key:3,
          title:'title',
          description:'description',
          price:'$'+12.58,
          image:''
        },
        {
          Key:4,
          title:'title',
          description:'description',
          price:'$'+12.58,
          image:''
        },
      ],
    };
    card =() =>{
      return this.state.products.map((element) =>{
        return(
          <ScrollView
>
          <View style={styles.container}>
            <Image source={require("../images/5.png")} style={styles.img} />
            <AntDesign style={styles.icon} name="heart" size={20} color="red" />
            <Text style={styles.title}>{element.title}</Text>
            <Text style={styles.subtitle}>{element.description}</Text>
            <Text style={styles.price}>{element.price}</Text>
            <AntDesign
             onPress={() => Alert.alert('Eliminado')}
              style={styles.iconn}
              name="rightcircleo"
              size={24}
              color="#153E73"
            />
          </View>
          </ScrollView>
  
        )
      })
    }
  }

 
  render() {
    return <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 25 }}
      >
       {card()}
      </ScrollView>
    
  }
}
const styles = StyleSheet.create({
  container: {
    width: 174,
    height: 214,
    flexDirection: "row",
    backgroundColor: "#FBFBFB",
    marginHorizontal: 15,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginTop: 2,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  img: {
    top: 50,
    bottom: 50,
    left: 35,
    height: 80,
    width: 80,
    borderColor: "#ffffff",
    borderWidth: 3,
    borderRadius: 50,
  },
  title: {
    fontWeight: "bold",
    fontSize: 12,
    marginTop: 130,
    marginLeft: -145,
    color: "#515F65",
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 10,
    marginTop: 150,
    marginLeft: -20,
    color: "#515F65",
  },
  price: {
    fontWeight: "bold",
    fontSize: 12,
    marginTop: 170,
    marginLeft: -50,
    color: "#4A69FF",
  },
  icon: {
    marginTop: 1,
    marginLeft: 50,
  },
  iconn: {
    marginTop: 160,
    marginLeft: 80,
  },
});
