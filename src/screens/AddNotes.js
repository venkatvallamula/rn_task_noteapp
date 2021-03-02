import React ,{useState}from 'react'
import {View,StyleSheet,TextInput} from 'react-native'
import {Text,FAB,IconButton} from 'react-native-paper'
import Header from '../component/Header'

function AddNotes({navigation}){
    const [noteTitle,setNoteTitle] = useState('');
    const [noteDescription,setNoteDescription] = useState('');


    function onSaveButton(){
//         console.log(noteTitle+'-------'+noteDescription)
        navigation.state.params.addNote({noteTitle,noteDescription})
        navigation.goBack();
    }
    const onBack=()=>{
            navigation.goBack();
        }
    return(
    <>
        <Header onPress={onBack} titleText = 'Add a New Note'/>

        <View style = {styles.container}>
            <TextInput
                label = 'Add Note Title Here'
                value = {noteTitle}
                mode = 'outlined'
                onChangeText = {setNoteTitle}
                maxLength={50}
                style = {styles.title}
            />
            <TextInput
                label = 'Add Note Description'
                value = {noteDescription}
                mode = 'flat'
                multiline = {true}
                onChangeText = {setNoteDescription}
                style = {styles.text}
                returnKeyLabel = 'done'
                maxLength={50}
                blurOnSubmit = {true}
            />
            <FAB
                style = {styles.fab}
                small
                icon='check'
                disable = {noteTitle != '' ? true:false}
                onPress = {()=>onSaveButton()}
            />
        </View>
    </>
    )
}
const styles = StyleSheet.create({
    titleContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    },
    container:{
        flex:1,
        backgroundColor:'#fff',
        paddingVertical:20,
        paddingHorizontal:10,
    },
    title:{
        fontSize:24,
        marginBottom:16,
        backgroundColor:'#d3d3d3'
    },
    text:{
        height:300,
        fontSize:16,
        backgroundColor:'#d3d3d3'
    },
    iconButton:{
        backgroundColor:'#fff',
        position:'absolute',
        margin:10,
        top:40,
        right:0,
    },
    fab:{
        position:'absolute',
        margin:20,
        right:0,
        bottom:0,
        backgroundColor:'#219653'
    }
});
export default AddNotes;
