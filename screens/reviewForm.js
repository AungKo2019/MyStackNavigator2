import React from "react";
import { StyleSheet,Button,TextInput,View,Text} from "react-native";
import { Formik } from "formik";
import {globalStyles} from '../shared/globalStyles'

export default function ReviewForm({addReview}){
    return(
        <View style={globalStyles.container}>
            <Formik 
                initialValues={{title:'',body:'',rating:''}}
                // onSubmit={(values,{resetForm})=>{
                //     resetForm({values:''});
                //     addReview(values);  

                onSubmit={(values,actions)=>{
                    addReview(values);
                    console.log(actions);
                    actions.resetForm()
                //console.log(values);
                }}
            >
                {(props)=>(
                    <View>
                        <TextInput
                            style={globalStyles.textinput}
                            placeholder='Review title'
                            onChangeText={props.handleChange('title')}
                            values={props.values.title}
                        />
                        <TextInput
                            multiline
                            style={globalStyles.textinput}
                            placeholder='Review body'
                            onChangeText={props.handleChange('body')}
                            values={props.values.body}
                        />
                        <TextInput
                            style={globalStyles.textinput}
                            placeholder='rating (1-5)   '
                            onChangeText={props.handleChange('rating')}
                            values={props.values.rating}
                            keyboardType='numeric'
                        />
                        <Button title='submit' color='maroon' onPress={props.handleSubmit}/>
                    </View>
                )}    
            </Formik>
        </View>
    )
}

const styles=StyleSheet.create({

})