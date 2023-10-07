import { createSlice } from "@reduxjs/toolkit";
const initialState={
    count: 0
}

export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        inc:(state,action)=>{
            state.count++ //direct modifying count - in redux-toolkit(erase immutability by immer)
        },
        dec:(state,action)=>{
            state.count--
        }
    }
})

export var {inc, dec}= counterSlice.actions; //inc and dec are functions
export default counterSlice.reducer; // import it on store
// In Redux, state is immutable - we can't modify directly