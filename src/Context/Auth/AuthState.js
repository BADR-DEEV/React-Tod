import React, { useReducer } from 'react'
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import axios from 'axios';
import qs from 'qs';

import {
	LOGIN_USER,
	REGISTER_USER,
	LOGIN_FAIL,
	LOG_OUT
	

} from '../types';

const AuthState = props => {
	const initialState = {
		isAuthenticated: localStorage.getItem('isAuthenticated'),
		token: localStorage.getItem('token')
	}

	const [state, dispatch] = useReducer(AuthReducer, initialState);



//logoutuser-user
const logOut = ()=> {
	dispatch({ type: LOG_OUT, payLoad: null })
	

}
	//loginuser-user
	const Login = async form => {
		const data=qs.stringify(form)
		console.log(data)
		const config = {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
			}
		}
			try {
				const res = await axios.post('http://localhost:3000/auth/local/', data, config);
				
				dispatch({
					type: LOGIN_USER,
					payLoad: res.data
				})
		}

			//LoadUser();
		catch (err) {
			console.log(err.response.data.message)
			
			dispatch({
				type: LOGIN_FAIL,
				payLoad: err.response.data.message //to understand this just console.log one object at the time
				
			})
			 }
		

		}

		
	//Register-user
		const Register = async form => {
			
			const config = {
				headers: {
					'Content-Type': 'application/json'
				}
			}
				try {
					const res = await axios.post('http://localhost:3000/auth/local/register', form, config);
					
					dispatch({ 
						type: REGISTER_USER,
						 payLoad: res.data 
						})
					}
				//LoadUser();
			catch (err) {
				
			console.log(err.response.data.message)
				
				dispatch({
					type: LOGIN_FAIL,
					payLoad: err.response.data.message //to understand this just console.log one object at the time
					
				})
				 }
			
	
			}

	
	

		
	

return (
	<AuthContext.Provider value={{
		isAuthenticated: state,
		Register,
		Login,
		logOut
		

	}}>
		{props.children}

	</AuthContext.Provider>
)
}
export default AuthState;
