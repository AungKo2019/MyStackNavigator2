import React,{useState} from "react";
import {StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback,Keyboard } from 'react-native';
import Card from '../shared/card';
import {MaterialIcons} from '@expo/vector-icons';
import ReviewForm from "./reviewForm";
export default function HOME({navigation}){
    const [modalOpen,setModalOpen]=useState(false);
    const [reviews,setReviews]= useState([
        {title:'ဘကြီးတော် မင်း နန်းတက် သောအခါ',
         rating:'5',
         body: 'lorem ipsum',
         key:1,
        },
        {title:'ဤ သို့ တိုက်ခိုက် နေ ကြ စဉ် အတွင်း',
         rating:'4',
         body: 'lorem ipsum',
         key:2,
        },
        {title:'ငြိမ်းချမ်း မှု ကို လိုလား သဖြင့်',
         rating:'3',
         body: 'lorem ipsum',
         key:3,
        },  

    ]);

    const addReview=(review)=>{
        review.key=Math.random().toString();
        setReviews((currentReviews)=>{
            return [review,...currentReviews];
        });
        //setModalOpen(false);
    }

    return (
        <View style={styles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
                    <View style={styles.modalcontent}>
                        <MaterialIcons style={{...styles.modalToggle,...styles.modalclose}} name="close" size={24} onPress={()=>setModalOpen(false)}/>
                        <ReviewForm addReview={addReview}/>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons style={styles.modalToggle} name="add" size={24} onPress={()=>setModalOpen(true)}/>

            <FlatList
                data={reviews}
                renderItem={({item})=>(
                     <View>
                        <TouchableOpacity onPress={()=>navigation.navigate('Review',item)}>
                            <Card>
                                <Text style={styles.item}>
                                    {item.title}
                                </Text>
                            </Card>
                           
                        </TouchableOpacity>
                     </View>       
                )}
            />
        </View>
    )

};

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'#FFF5E4'
    },
    titletext: {
        // fontFamily:'Nunito-Black',
        // fontSize:18,
        // color:'#8BBCCC',
        // justifyContent: 'center',
        // textAlign:"center",
    },
    buttonStyle:{
        textAlign:"right",
    },
    item: {
        justifyContent:'center',
        textAlign:"justify",
        margin:15

    },
    modalToggle:{
        margin:10,
        borderWidth:1,
        //borderColor:'#f2f2f2',
        padding:10,
        borderRadius:10,
        alignSelf:'center'
    },
    modalclose:{
        marginTop:20,
        marginBottom:0,
    },
    modalcontent:{
        flex:1,
    }
});