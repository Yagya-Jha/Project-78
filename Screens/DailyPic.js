import * as React from 'react';
import{Text, View, StyleSheet} from 'react-native';

export default class DailyPic extends React.Component{
    render(){
        return(
            <View style = {{flex: 1, justifyContent: "center", alignItems:"center", backgroundColor:"black"}}>
                <Text style = {{color: "white"}}>Daily Pictures</Text>
            </View>
        )
    }
}