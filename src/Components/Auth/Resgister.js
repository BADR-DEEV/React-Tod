import React from "react"


import "./signin"


export const Resgister = ()=> {


return(
    <div id="container">
    <form className = "form">
        <h1 id = "signH1">Enter Your Account</h1>
<br/>
<div>
        
         <input id = "input2" type = "email" placeholder = "Email address"  required/>
         </div>
         
        


         

<div>
        
         <input id = "input2"  type = "password" placeholder = "password"required/>
         </div>

         <div>
        
         <input id = "input2"  type = "password" placeholder = "Confirm password"required/>
         </div>

         <button>Sign up      
                </button>

         

    </form>
    </div>
)


}