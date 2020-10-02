import {ADD_NEW_SOCKER} from '../constants/sockerConstants';

export const getNewSocker = (socker) => {
return{
	type: ADD_NEW_SOCKER,
	payload: socker,
}
};

