import React from "react";
import {View ,StyleSheet} from "react-native";


interface IChildren {
    children : any
}


export default function AppLayout ({children} : IChildren){
    return <View style={styles.container}>{children}</View>
}


const styles = StyleSheet.create({
    container : {
        justifyContent : "center",
        paddingLeft : 8,
        paddingHorizontal: 8,
        paddingTop : 10
    }
});

