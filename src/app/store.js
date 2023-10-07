import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from '../features/counter/counterSlice'
import todolistReducer from '../features/todolist/todolistSlice'
export const store = configureStore({
  reducer: {
    c:CounterReducer,
    t:todolistReducer,
  },
})

//Difference b/w configuration and creation?
// configure - Just setup which is already available somewhere
// creation - creating everything from scratch