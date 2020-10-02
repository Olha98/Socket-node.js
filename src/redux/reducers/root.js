import { combineReducers } from "redux";
import {sockerReducer} from './sockerReducer'

const sockerMiddlewares = store => next => action => {
	console.log(store, "storestorestore")
	console.log(action, "action")
	return next(action)
	
	}
	
	sockerMiddlewares()
  
  

const root = combineReducers({
textSockers: sockerReducer
});

export default root;
