import {
    ADD_TODO

} from '../types';
export default (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return   [...state, action.payLoad]
            

    default:
            return state;
    }
}