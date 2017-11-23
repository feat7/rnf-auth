import {
    LOGIN_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    EMAIL_CHANGED,
    PASSWORD_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    fetching: false,
    error: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_REQUEST:
            return {...state, fetching:true};
        case LOGIN_USER_SUCCESS:
            return {...state, ...INITIAL_STATE, user: action.payload};
        case LOGIN_USER_FAIL:
            return {...state, fetching:false, error: 'Invaild credentials', password: ''};
        default:
            return state;
    }
}