import React, { useReducer } from 'react'
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import axios from 'axios';

import {
	LOGIN_USER,
	REGISTER_USER,
	LOGIN_FAIL

} from '../types';

const AuthState = props => {
	const initialState = {
		isAuthenticated: localStorage.getItem('isAuthenticated'),
		token: localStorage.getItem('token')
	}

	const [state, dispatch] = useReducer(AuthReducer, initialState);



	//loginuser-user
	const Login = async form => {
		const config = {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		}
			try {
				const res = await axios.post('localhost:3000/auth/local/', form, config);

				dispatch({
					type: LOGIN_USER,
					payLoad: form
				})
		}

			//LoadUser();
		catch (err) {
			//console.log(err.response.data.error)
			dispatch({
				type: LOGIN_FAIL,
				payLoad: err.response.data.message //to understand this just console.log one object at the time ok
			})
		}
		}

		
	


	//Register-user
	const Register = form => {

		dispatch({ type: REGISTER_USER, payLoad: form })
	}

return (
	<AuthContext.Provider value={{
		isAuthenticated: state,
		Register,
		Login

	}}>
		{props.children}

	</AuthContext.Provider>
)
}
export default AuthState;
