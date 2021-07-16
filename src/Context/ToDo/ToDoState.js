import React, { useReducer } from 'react'
import ToDoContext from './ToDoContext';
import ToDoReducer from './ToDoReducer';
import axios from "axios"


import {
	GET_TASK,
	LOAD_FAIL,
	SEND_DATE
} from '../types';

const ToDoState = props => {
	const initialState = [{
		todo:null
	}]

	const [state, dispatch] = useReducer(ToDoReducer, initialState);

	//GetTask , //completed at
	const GetTask = async () => {

		
		
		try {
			const res = await axios.get('http://localhost:3000/daily-tasks')
			
			
			dispatch({
				type: GET_TASK,
				payLoad: res.data
				
			})
			
		} catch (err) {
			// console.log(err.response.data.message)
			dispatch({
				type: LOAD_FAIL,
				payLoad: err.response

			})
		}
		
	}
 //sending date and id (updating)
	const SendDate =async Date => {
		const config = {
			headers: {
				'Content-Type':"application/json"
			}
		}

		try {
			// console.log(Date.completed_at)
			const res = await axios.put(`http://localhost:3000/daily-tasks/${Date.Id}` ,  Date, config)
			console.log(res.data)

			
			
			dispatch({ 
				type: SEND_DATE,
				payLoad: res.data
			})
			
		}
		catch (err) {
			// console.log(err.response.data.message)
			
			dispatch({
				type: null,
				payLoad: err.response //to understand this just console.log one object at the time
				
			})
			 }
	}
	



	return (
		<ToDoContext.Provider value={{
			GetTask,
			SendDate,
			ItemToDo:state.todo
		}}>
		{props.children}
			
		</ToDoContext.Provider>
	)
	}
export default ToDoState;
