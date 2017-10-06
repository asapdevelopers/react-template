import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import * as authActions from '../../constants/actions/authActions';

const initialState = {
    token: localStorage.getItem('token'),
    error: null
};

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case authActions.AUTH_SUCCESS:
            {
                return { ...state, token: payload, error: null };
            }
        case authActions.AUTH_FAILURE:
            {
                alert(payload);
                return { ...state, error: payload }
            }
        case authActions.AUTH_FAILURE:
            {
                return { ...state, token: null, error: "" }
            }
        default:
            return state;
    }
};

export default authReducer;