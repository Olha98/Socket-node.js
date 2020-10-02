import {ADD_NEW_SOCKER} from '../constants/sockerConstants';

export const getNewSocker = (socker) => {
	console.log(socker, "hhhhhhhh")
return{
	type: ADD_NEW_SOCKER,
	payload: socker,
}
};

