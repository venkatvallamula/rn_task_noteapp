import remove from 'lodash.remove'
import AsyncStorage from '@react-native-community/async-storage'
export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const SAVE_NOTE = 'SAVE_NOTE';
let noteID = 0;

 export function addnote(note){
    return{
        type:ADD_NOTE,
        id:noteID++,
        note
    }
 }
 export function deletenote(id){
    return{
        type:DELETE_NOTE,
        payload:id
    }
 }
 export function editnote(note){
     return{
         type:EDIT_NOTE,
         note
     }
  }


 const initialState = [];
 function notesReducer(state = initialState,action){
    console.log(state+'----------'+JSON.stringify(action))
    switch(action.type){
        case ADD_NOTE:
            //saveNote()
            const insertArray = [...state,{
                                            id:action.id,
                                            note:action.note,
                                        }
                                     ]
            AsyncStorage.setItem('notesValues', JSON.stringify(insertArray))
            return insertArray
        case DELETE_NOTE:
            const deletedNewArray = remove(state,obj=>{
                return obj.id != action.payload
            })
            AsyncStorage.setItem('notesValues', JSON.stringify(deletedNewArray))
            return deletedNewArray
        case EDIT_NOTE:
        const updateArray = state.map(item => (item.id === action.note.id) ? action.note : item)
            AsyncStorage.setItem('notesValues', JSON.stringify(updateArray))
        return updateArray

        default :
            return state;
    }
 }
 export default notesReducer
