import React, { useReducer } from 'react'
import ToDoContext from './ToDoContext';
import ToDoReducer from './ToDoReducer';


import {
	ADD_TODO,
	REMOVE_TODO

} from '../types';

const ToDoState = props => {
	const initialState = []


	const [state, dispatch] = useReducer(ToDoReducer, initialState);

	//ADD_TODO
	const ADDToDO = list => {

		dispatch({ type: ADD_TODO, payLoad: list })
	}

	return (
		<ToDoContext.Provider value={{
			ADDToDO,
			ItemToDo:state
		}}>
			{props.children}
		</ToDoContext.Provider>
	)
}
export default ToDoState;
