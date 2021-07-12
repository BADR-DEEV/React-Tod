import {
    REGISTER_USER,
    LOGIN_USER,
    LOGIN_FAIL,
    LOG_OUT

} from '../types';
export default (state, action) => {
    switch (action.type) {
        case LOGIN_USER:
        case REGISTER_USER:
            localStorage.setItem("isAuthenticated", "true");
            localStorage.setItem("token", action.payLoad.jwt);
            return {
                ...state,
                isAuthenticated: localStorage.getItem("isAuthenticated"),
                token:localStorage.getItem("token")
            };
            case LOG_OUT:
        
            localStorage.removeItem("isAuthenticated");
            localStorage.removeItem("token");
            
            return {
                ...state,
                isAuthenticated: localStorage.getItem("isAuthenticated"),
                isAuthenticated: localStorage.getItem("token")
            };

            case LOGIN_FAIL:
                localStorage.removeItem("isAuthenticated");
                localStorage.removeItem("token");
                alert("invalid Email or password")
                
                
                return {
                    ...state,
                    isAuthenticated: localStorage.getItem("isAuthenticated"),
                    isAuthenticated: localStorage.getItem("token")
                }
            



        default:
            return state;
    }
}