import React from "react";
import { StyleSheet, Text, View } from 'react-native';



export default function ABOUT(){
    return(
        <View style={styles.container}> 
            <Text> About Screen</Text> 
            <Text>Hello World</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    
});