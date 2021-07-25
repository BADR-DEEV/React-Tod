import React, { useState, useContext,useEffect }from "react"
import AuthContext from "../../Context/Auth/AuthContext";


import "./SigninStyles.css"


const Resgister = (props) => {
    const authState = useContext(AuthContext)
    const { Register, isAuthenticated} = authState

    const [button , setButton] = useState("Sign up")

     const [auth, setAuth] = useState({
        username:"",
        email: '',
         password: ""
         
     })

    const {username, email, password } = auth;
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
         setButton("signing up....")
         setTimeout(()=> {
            setButton("sign up")

         }, 2000);
         Register({
            username,
            email,
             password
             
             
         });

     };

return(
    <div id="container">
        <form id="form" method = "POST" onSubmit={onSubmit}>
        <h1 id = "signH1">Enter Your Account</h1>
<br/>
<div>
       
       {/* <
           required /> */}
</div>
<div>
        
        <input id="input2" type="text" placeholder="Username" name="username" value={username} required
            onChange={onChange}/>
 </div>

<div>
  
                <input id="input2" type="email" placeholder="Email address" name="email" value={email} required
                    onChange={onChange}/>
         </div>


<div>
        
                <input id="input2" type="password" placeholder="password" name="password" value={password} required
                    onChange={onChange}/>
         </div>
         
       

            <button type='submit' > {button}  </button>

         

    </form>
    </div>
)


}
export default Resgister;