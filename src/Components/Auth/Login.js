import React, { useState } from 'react';


const Login = () => {   
    const [auth, setAuth] = useState({
        email: '',
        password: ""
    })
    const { email, password } = auth;

    const onChange = e =>
        setAuth({ ...auth, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault();
            Login({
                email,
                password
            });
        
    };


    return (
   

            <form onSubmit={onSubmit}>

                <h1>
                    Account <span >Login </span>
                </h1>
                <div >
                    <label  htmlFor='email'>Email Address</label>
                    <input 
                        type="text"
                        name="email"
                        value={email}
                    onChange={onChange}
                    required
                    />
                </div>

                <div >
                    <label  htmlFor='password'>password</label>
                    <input 
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    minLength='6'
                    required

                    />
                </div>
                <div>
                    <input type="submit"
                        value={"login"} />
                </div>
            </form>

           
            )
}

export default Login;