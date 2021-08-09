import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
export default class CardCategorie extends React.Component {
    render(){
        return ( <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginTop:25}}
           >
               <View style={styles.container}>
                   <Image
                    source={require('../images/5.png')}
                    style={styles.img}
                   />
                   <Text style={styles.title}>
                       Burger
                   </Text>
               </View>

               <View style={styles.container}>
                   <Image
                    source={require('../images/10.png')}
                    style={styles.img}
                   />
                   <Text style={styles.title}>
                       Burrito
                   </Text>
               </View>

               <View style={styles.container}>
                   <Image
                    source={require('../images/7.png')}
                    style={styles.img}
                   />
                   <Text style={styles.title}>
                       Salads
                   </Text>
               </View>

               <View style={styles.container}>
                   <Image
                    source={require('../images/6.png')}
                    style={styles.img}
                   />
                   <Text style={styles.title}>
                       Pizza
                   </Text>
               </View>
        </ScrollView>)
        
    }

    
}
const styles = StyleSheet.create({
   container: {
    alignItems:"center",
    flexDirection:"row",
    backgroundColor:"#86E3CE",
    marginHorizontal:15,
    borderRadius:10,
    paddingVertical:5,
    paddingHorizontal:15
   },
   img:{
    height:20,width:20
   },
   title:{
    fontWeight:"bold",
    fontSize:12,
    paddingLeft:10,
    color:'#4A69FF'
   }

    
})