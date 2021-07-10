import {
    REGISTER_USER,
    LOGIN_USER,
    LOGIN_FAIL

} from '../types';
export default (state, action) => {
    switch (action.type) {
        case LOGIN_USER:
        case REGISTER_USER:
            localStorage.setItem("isAuthenticated", "true");
            return {
                ...state,
                isAuthenticated: localStorage.getItem("isAuthenticated")
            };
        case LOGIN_FAIL:
            localStorage.removeItem("isAuthenticated");
            return {
                ...state,
                isAuthenticated: localStorage.getItem("isAuthenticated")
            };


        default:
            return state;
    }
}