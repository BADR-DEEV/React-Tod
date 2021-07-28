import React, { useState, useContext, useEffect} from "react"
import AuthContext from "../../Context/Auth/AuthContext";

import "./SigninStyles.css"
//import LoginFail from "../../Context/Auth/AuthState"






const Login = (props) => {


    const authState = useContext(AuthContext)
    const { Login, isAuthenticated} = authState




    const [button , setButton] = useState("Sign in")
    

     const [auth, setAuth] = useState({
        
        identifier:"" ,
        password: ""
      
         
     })

    const { identifier, password} = auth;

    useEffect(() => {
        //if true
        if (localStorage.isAuthenticated) {
            //redirect to the main page if logged in 
            props.history.push('/')
        }
    }, [isAuthenticated, props.history])


     const onChange = e =>{
         setAuth({ ...auth, [e.target.name]: e.target.value })
   
     }
    const onSubmit = e => {
         e.preventDefault();
         
         setButton("signing in....")
         setTimeout(()=> {
            setButton("sign in")

         }, 2500);
         
         Login({
       
            identifier,
             password
         }
         );
        //  console.log(identifier)
        //  console.log(password)

     };

return(
    <div id="container">
        <form id="form" onSubmit={onSubmit} method = "post">
       
        <h1 id = "signH1">Enter Your Account</h1>
       
     

                <input name="identifier" type="email" placeholder="Email address" 
                onChange={onChange} value={identifier} required/>
    
    
                <input name="password" type="password" placeholder="password" 
                onChange={onChange} value={password} required/>

   <button type = "submit">{button}      
                </button>
    </form>
   
    </div>
)
}
export default Login;

//helllloooo