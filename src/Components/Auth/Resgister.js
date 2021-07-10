import React, { useState, useContext,useEffect }from "react"
import AuthContext from "../../Context/Auth/AuthContext";


import "./signin.css"


const Resgister = (props) => {
    const authState = useContext(AuthContext)
    const { Register, isAuthenticated} = authState

     const [auth, setAuth] = useState({
         email: '',
         password: "",
         password2: ""
     })

    const { email, password, password2 } = auth;
    useEffect(() => {
        if (localStorage.isAuthenticated) {
            //redirect to the main page if logged in 
            props.history.push('/')
        }
    }, [ isAuthenticated, props.history])

     const onChange = e =>
         setAuth({ ...auth, [e.target.name]: e.target.value })

   


     const onSubmit = e => {
         e.preventDefault();
         Register({
             email,
             password,
             password2
         });

     };

return(
    <div id="container">
        <form className="form" onSubmit={onSubmit}>
        <h1 id = "signH1">Enter Your Account</h1>
<br/>
<div>
        
                <input id="input2" type="email" placeholder="Email address" name="email" value={email} required
                    onChange={onChange}/>
         </div>


<div>
        
                <input id="input2" type="password" placeholder="password" name="password" value={password} required
                    onChange={onChange}/>
         </div>
         <div>
       
                <input id="input2" type="password" placeholder="Confirm password" name="password2" value={password2}
                    onChange={onChange}
                    required />
         </div>

            <button type='submit' > Sign up   </button>

         

    </form>
    </div>
)


}
export default Resgister;