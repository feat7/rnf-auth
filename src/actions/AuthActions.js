import firebase from 'firebase';
import {
    LOGIN_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    EMAIL_CHANGED,
    PASSWORD_CHANGED
} from './types';
import { Actions } from 'react-native-router-flux';

export const emailChanged = email => {
    return {
        type: EMAIL_CHANGED,
        payload: email
    };
}

export const passwordChanged = password => {
    return {
        type: PASSWORD_CHANGED,
        payload: password
    };
}

export const loginRequest = ({ email, password }) => {
    return dispatch => {
        dispatch({type: LOGIN_REQUEST});
        console.log(email, password);
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch((error) => { console.log(error); loginUserFail(dispatch) });
    }
}

export const loginUserFail = dispatch => {
    dispatch({ 
        type: LOGIN_USER_FAIL
    });
    console.log("Login failed");
}

export const loginUserSuccess = (dispatch, user) => {
    dispatch({ 
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    console.log("Login successful");
    
    //Change Page
    Actions.home();
}