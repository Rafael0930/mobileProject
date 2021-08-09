import React from 'react';
import{View,
    Image,
    TouchableOpacity, 
    Text,
    StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons';

export default class App extends React.Component {
    render(){
        return(
            <ScrollView
             horizontal
             showsHorizontalScrollIndicator={false}
             style={{marginTop:40}}
            >
            <TouchableOpacity>
            <View style={styles.container}>
            <AntDesign name="hearto" size={24} color="black" />
                <Image
                source={this.props.image}
                style={{
                    height:105,
                    alignSelf:"center",
                    width:130,
                    marginTop:15,
                    marginBottom:15
                }}
              />
              <Text style={{
                  fontSize:18,
                  fontWeight:"bold",
                  paddingHorizontal:10
              }}>
                  {this.props.title}
              </Text>
              <Text style={{
                  fontSize:15,
                  fontWeight:"bold",
                  paddingHorizontal:10,
                  color:"#848385"
              }}>
                  Beef burger
              </Text>
               </View>                
            </TouchableOpacity>
            </ScrollView>
        )
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