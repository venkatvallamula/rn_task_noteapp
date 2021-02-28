import React,{useState} from 'react'
import {View,StyleSheet,FlatList,TouchableOpacity,Animated,Dimensions} from 'react-native'
import {Text,FAB,IconButton,List} from 'react-native-paper'
import Header from '../component/Header'
import {useSelector,useDispatch} from 'react-redux'
import {addnote,deletenote,editnote} from '../reducer/notesApp'
import CardView from 'react-native-cardview'
import { SwipeListView } from 'react-native-swipe-list-view';


function ViewNotes({navigation}){

    const notes = useSelector(state=>state);
    const dispatch = useDispatch();
     console.log('11111111111111'+JSON.stringify(notes))
    const addNote  = note =>{
//        console.log(note)
        dispatch(addnote(note))
    }
    const editNote  = note =>{

            dispatch(editnote(note))
    }
    const deleteNote = id =>dispatch(deletenote(id))
    const editNotes=item=>{
        navigation.navigate('EditNotes',{editNote,item})
    }
    const renderHiddenItem = () => (
        <View style={styles.rowBack}>
            <View style={[styles.backRightBtn, styles.backRightBtnRight]}>
                <Text style={styles.backTextWhite}>Delete</Text>
            </View>
        </View>
    );
    const onSwipeValueChange = swipeData => {
console.log(JSON.stringify(swipeData))
        console.log('--------------'+JSON.stringify(notes[swipeData.key]))
        const note = notes[swipeData.key];
        if(swipeData.isOpen){
        dispatch(deletenote(note.id))
        }
//            this.animationIsRunning = true;
//            Animated.timing(rowTranslateAnimatedValues[key], {
//                toValue: 0,
//                duration: 200,
//            }).start(() => {
//                dispatch(deletenote(notesswipeData.key))
//                this.animationIsRunning = false;
//            });
//        }
    };

    return(
    <>
        <Header titleText = 'Note App'/>

        <View style = {styles.container}>
            {notes.length==0 ? (
                <View style = {styles.titleContainer}>
                    <Text style = {styles.title}>You do not have any notes</Text>
                </View>
            ):(
                <SwipeListView
                    data = {notes}
                    renderItem={({item})=>(
                        <CardView
                          cardElevation={10}
                          cardMaxElevation={10}
                          cornerRadius={5}
                          style={{margin:5}}>
                            <TouchableOpacity style={styles.item} onPress={()=>{editNotes(item)}}>
                                <View style={{flexDirection:'column'}}>
                                    <Text numberOfLines={1} style={styles.listTitle}>{item.note.noteTitle}</Text>
                                    <Text numberOfLines={1} >{item.note.noteDescription}</Text>
                                </View>
                            </TouchableOpacity>
                          </CardView>

                    )}
                    renderHiddenItem={renderHiddenItem}
                    keyExtractor={(item, index) => ""+index}

                    leftOpenValue={Dimensions.get('window').width}
                    previewRowKey={'0'}
                    previewOpenValue={-40}
                    previewOpenDelay={3000}
                    onSwipeValueChange={onSwipeValueChange}

                />
            )}

            <FAB
                style = {styles.fab}
                small
                icon='plus'
                label='Add a New Note'
                onPress = {()=>navigation.navigate('AddNotes',{addNote})}
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
        fontSize:20
    },
    fab:{
        position:'absolute',
        margin:20,
        right:0,
        bottom:10,
        backgroundColor:'#219653'
    },
    listTitle:{
    fontSize:20
    },
    item:{
        borderColor: "transparent",
        flexDirection:'row',
        margin:10,

      },
    rowBack: {
            alignItems: 'center',
            backgroundColor: 'red',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 15,
        },
        backRightBtn: {
            alignItems: 'center',
            bottom: 0,
            justifyContent: 'center',
            position: 'absolute',
            top: 0,
            width: 75,
        },
        backRightBtnRight: {
            backgroundColor: 'red',
            right: 0,
        },
    backTextWhite: {
        color: '#FFF',
    },
});
export default ViewNotes;
