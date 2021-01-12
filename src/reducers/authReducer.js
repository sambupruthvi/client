const INITIAL_STATE = {
    isSignedIn : null
}

export const authReducer = (state = INITIAL_STATE, actions) => {
    switch(actions.type) {
        case 'SIGN_IN': {
            return { ...state, isSignedIn: true};
        }
        case 'SIGN_OUT': {
            return { ...state, isSignedIn: false};
        }
        default: {
            return state;
        }
    }
}