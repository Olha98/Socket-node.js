import { combineReducers } from "redux";
import {socketReducer} from './socketReducer'


const root = combineReducers({
textSockets: socketReducer
});

export default root;
