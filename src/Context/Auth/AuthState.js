import React, { useReducer } from 'react'
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';

import {
	LOGIN_USER,
	REGISTER_USER

} from '../types';

const AuthState = props => {
	const initialState = {
		isAuthenticated: localStorage.getItem('isAuthenticated')
	}

}