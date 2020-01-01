import * as Types from '../constants/Types';

const initialSate = {

    isAuthenticated: false,
    user: {},
    errors: {},
    isProcessing: false
};

export default (state=initialSate, action) => {

    switch(action.type){

        case Types.LOGIN_IN_SUCCESS: 
            const { user } = action;
            return { ...state, user: user, isAuthenticated: true };
        case Types.START_PROCESSING:
            return { ...state, isProcessing: true };
        case Types.FINISH_PROCESSING:
            return { ...state, isProcessing: false };
        case Types.LOG_OUT:
            return { ...state, isAuthenticated: false };
        default: 
            return state;
    };
};