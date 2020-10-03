import { combineReducers } from "redux";
import {sockerReducer} from './sockerReducer'


const root = combineReducers({
textSockers: sockerReducer
});

export default root;
