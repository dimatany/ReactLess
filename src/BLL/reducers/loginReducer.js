const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
	email: null,
	token: null,
	id: null,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.data
			}
		default:
			return state;
	}
}


export const setUser = (email, token, id) => ({type: SET_USER_DATA, data: {id, email, token} });

export default authReducer;