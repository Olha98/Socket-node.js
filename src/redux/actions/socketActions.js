import {ADD_NEW_SOCKET} from '../constants/socketConstants';

export const getNewSocket = (socket) => {
return{
	type: ADD_NEW_SOCKET,
	payload: socket,
}
};

