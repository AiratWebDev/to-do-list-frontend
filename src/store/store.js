import {createStore, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {taskReducer} from './taskReducer'


const rootReducer = combineReducers({
    taskReducer,
    linksReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())