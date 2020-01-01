import * as Types from '../constants/Types';

const accountDemo = {
    email: "hoangpersievn@gmail.com",
    password: "123"
};

const fakeLogin = (userCredentials) => {
    const { email, password } = userCredentials;

    return new Promise((resolve, reject) => {
        if(email === accountDemo.email && password === accountDemo.password)
            resolve(userCredentials);
        else
            reject("not True");
    });
};

export const logIn = (userCredentials) => {

    return dispatch => {
        dispatch({ type: Types.START_PROCESSING });
        fakeLogin(userCredentials).then( user => {
            dispatch({ type: Types.LOGIN_IN_SUCCESS, user });
            localStorage.setItem('user',JSON.stringify(user));
            dispatch({ type: Types.FINISH_PROCESSING });
        }).catch( err => {
            console.log(err);
            dispatch({ type: Types.FINISH_PROCESSING });
        });
    };
};

export const logOut = () => {
    
    return dispatch => {
        dispatch({ type: Types.LOG_OUT });
        localStorage.removeItem('user');
    };
};