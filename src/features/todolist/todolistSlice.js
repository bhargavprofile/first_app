import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    todolist:['node','react','express','mongodb']
}
export const todolistSlice = createSlice({
      name:'todolist',
      initialState,
      reducers:{
        addTodo:(state,action)=>{
            state.todolist.push(action.payload)
       },
       deleteTodo:(state,action)=>{
        state.todolist.splice(action.payload, 1)
       }
    }
})
export const {addTodo, deleteTodo} = todolistSlice.actions; // import it on store
export default todolistSlice.reducer; 
