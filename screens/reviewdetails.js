import React from "react";
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Card from '../shared/card'
import {images} from '../shared/globalStyles'

export default function REVIEW ({navigation}){
const rating=navigation.getParam('rating');
    return (
        <View style={styles.container}>
            <View style={styles.textView}>
                <Card>
                    <Text style={styles.item}>{navigation.getParam('title')}</Text>
                    <Text style={styles.item}>{navigation.getParam('body')}</Text>
                    <Text style={styles.item}>{navigation.getParam('key')}</Text>
                    <View style={styles.rating}>
                        <Text> Rating:</Text>
                        <Image source={images.rating[rating]}></Image>
                    </View>
                </Card>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    textView:{
        marginLeft: 10,
    },
    titletext: {
        fontFamily: 'Nunito-Black',
        fontSize: 18,
        color: '#8BBCCC',
        textAlign: "left",
    }, 
    buttonStyle: {
        textAlign: "right",
    }, 
    item:{
        justifyContent: 'center',
        textAlign: 'justify',
        padding: 5
    },
    rating:{
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:16,
        marginTop:16,
        borderTopWidth:1,
        //borderTopColor:'#eee'
    }


});