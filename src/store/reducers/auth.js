import * as authActions from '../../constants/actions/authActions';

const initialState = {
    token: localStorage.getItem('token'),
    error: null
};

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case authActions.AUTH_REQUEST_SUCCESS:
            {
                return { ...state, token: payload.token, email: payload.email, first_name: payload.first_name, last_name:payload.last_name, error: null };
            }
        case authActions.AUTH_REQUEST_FAILURE:
            {
                alert(payload);
                return { ...state, error: payload }
            }
        case authActions.AUTH_LOGOUT:
            {
                localStorage.removeItem("auth");
                return { ...state, token: null, error: "" }
            }
        case authActions.AUTH_REGISTER_SUCCESS:
            {
                return { ...state, registration:true }
            }
        case authActions.AUTH_REGISTER_FAILURE:
            {
                return { ...state }
            }
        default:
            return state;
    }
};

export default authReducer;