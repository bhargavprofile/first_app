import {combineReducers, createStore} from 'redux';
import counterReducer from './reducers/counter.reducer';
import count100Reducer from './reducers/count100reducer';
import todolistReducer from './reducers/todolist.reducer';

const store = createStore(combineReducers({a:counterReducer,b:count100Reducer,c:todolistReducer}))

export default store;