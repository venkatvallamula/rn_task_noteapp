import remove from 'lodash.remove'
export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
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
    console.log('----------'+JSON.stringify(action))
    switch(action.type){
        case ADD_NOTE:
            return [
                ...state,
                {
                    id:action.id,
                    note:action.note,
                }
            ]
        case DELETE_NOTE:
            const deletedNewArray = remove(state,obj=>{
                return obj.id != action.payload
            })
            return deletedNewArray
        case EDIT_NOTE:
        const updateArray = state.map(item => (item.id === action.note.id) ? action.note : item)
        return updateArray
        default :
            return state;
    }
 }
 export default notesReducer
