import React ,{useState,useEffect}from 'react'
import {View,StyleSheet,TextInput} from 'react-native'
import {Text,FAB,IconButton} from 'react-native-paper'
import Header from '../component/Header'

function EditNotes({navigation}){
    const [noteTitle,setNoteTitle] = useState('');
    const [id,setId] = useState(0);
    const [noteDescription,setNoteDescription] = useState('');
    useEffect(() => {
      const item = navigation.state.params;

      console.log(JSON.stringify(item)+'-------')
      setNoteTitle(item.item.note.noteTitle);
      setNoteDescription(item.item.note.noteDescription)
      setId(item.item.id)
    }, []);



    function onSaveButton(){
//
        navigation.state.params.editNote({id,note:{noteTitle,noteDescription}})
        navigation.goBack();
    }
    const onBack=()=>{
        navigation.goBack();
    }
        return(
        <>
        <Header onPress={onBack} titleText = 'Edit Notes'/>
        <View style = {styles.container}>
            <TextInput
                label = 'Add Note Title Here'
                value = {noteTitle}
                mode = 'outlined'
                maxLength={50}
                onChangeText = {setNoteTitle}
                style = {styles.title}
            />
            <TextInput
                label = 'Add Note Description'
                value = {noteDescription}
                mode = 'flat'
                multiline = {true}
                onChangeText = {setNoteDescription}
                style = {styles.text}
                maxLength={50}
                returnKeyLabel = 'done'
                blurOnSubmit = {true}
            />
            <FAB
                style = {styles.fab}
                small
                icon='check'
                disable = {noteTitle==''?true:false}
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
        height:200,
        fontSize:16,
        backgroundColor:'#d3d3d3'
    },
    iconButton:{
        backgroundColor:'#219653',
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
export default EditNotes;
