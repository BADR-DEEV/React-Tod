import React , { useContext} from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../Context/Auth/AuthContext'

// import logOut from "../../Context/Auth/AuthState"


import "../Navbar/NavBar.css"



const Navbar=()=> {
  



    const authContext = useContext(AuthContext)
    const { logOut , isAuthenticated } = authContext



   const onLogOut = ()=> {
    logOut()
    window.location.reload();

   }
    return (
                <>
                     {localStorage.isAuthenticated  ?  (<nav>
                     <div> <Link onClick = {onLogOut} id= "link" to="/login">
                            sign out  
                            </Link>
                            </div>
                            <div>
                       
                            <Link id = "link2" to = "/">
                                  
                                       
                                    </Link>
                                  
                                    </div> 
                                    </nav>
                         
                     ): (<nav>
                        <div>  <Link id= "link" to="/login">
                            sign in  
                            </Link>
                            </div>
                            <div>
                       
                            <Link id = "link2" to = "/Register">
                                    sign up
                                       
                                    </Link>
                                  
                                    </div>
                                    </nav>)}
                                    </>
                         
                
    );
}
export default Navbar;
