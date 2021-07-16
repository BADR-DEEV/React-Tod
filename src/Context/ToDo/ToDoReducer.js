import {
    GET_TASK,
    //LOAD_FAIL
    SEND_DATE

} from '../types';
export default (state, action) => {
    switch (action.type) {
        
        case GET_TASK:
            return   {...state,
                 todo: action.payLoad}
           // case LOAD_FAIL:
           // return   ([...state, null],
            //alert(action.payLoad)
            //)
            case SEND_DATE:
            return   {
                //making sure if the id that was sent in the put req
                //is the same 
                ...state,
                todo:state.todo.map(todo =>
                    todo.id===action.payLoad.id?
                    action.payLoad : todo)
            }

            

    default:
            return state;
    }
}