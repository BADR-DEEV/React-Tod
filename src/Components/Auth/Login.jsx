import React, { useState, useContext, useEffect} from "react"
import AuthContext from "../../Context/Auth/AuthContext";

import "./signin.css";


const Login = (props) => {


    const authState = useContext(AuthContext)
    const { Login, isAuthenticated } = authState

     const [auth, setAuth] = useState({
         email: '',
         password: ""
     })

    const { email, password } = auth;

    useEffect(() => {
        if (localStorage.isAuthenticated) {
            //redirect to the main page if logged in 
            props.history.push('/')
        }
    }, [isAuthenticated, props.history])


     const onChange = e =>
         setAuth({ ...auth, [e.target.name]: e.target.value })
    const onSubmit = e => {
         e.preventDefault();
         Login({
             email,
             password
         });

     };

return(
    <div id="container">
        <form id="form" onSubmit={onSubmit}>
        <h1 id = "signH1">Enter Your Account</h1>
<br/>
    <div>    
                <input name="email" type="email" placeholder="Email address" onChange={onChange} value={email} required/>
    </div>
<div>      
                <input name="password" type="password" placeholder="password" onChange={onChange} value={password} required/>
   </div>
         <button>Sign in      
                </button>
    </form>
    </div>
)
}
export default Login;