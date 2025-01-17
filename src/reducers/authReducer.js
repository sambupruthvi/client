import { SIGN_IN, SIGN_OUT } from '../actions/types';
const INITIAL_STATE = {
    isSignedIn : null,
    userId: null
}

export const authReducer = (state = INITIAL_STATE, actions) => {
    switch(actions.type) {
        case SIGN_IN: {
            return { ...state, isSignedIn: true, userId: actions.payload};
        }
        case SIGN_OUT: {
            return { ...state, isSignedIn: false, userId: null};
        }
        default: {
            return state;
        }
    }
}