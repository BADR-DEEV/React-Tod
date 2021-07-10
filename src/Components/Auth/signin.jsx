import React from "react"

import "./signin.css";


export const signin = ()=> {


return(
    <div id="container">
    <form id = "form">
        <h1 id = "signH1">Enter Your Account</h1>
<br/>
    <div>    
         <input type = "email" placeholder = "Email address"  required/>
    </div>
<div>      
         <input type = "password" placeholder = "password" required/>
   </div>
         <button>Sign in      
                </button>
    </form>
    </div>
)
}