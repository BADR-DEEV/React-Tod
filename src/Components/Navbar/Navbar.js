import React , { useContext} from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../Context/Auth/AuthContext'

// import logOut from "../../Context/Auth/AuthState"


import "../Navbar/NavBar.css"



const Navbar=()=> {
  



    const authContext = useContext(AuthContext)
    const { logOut} = authContext



   const onLogOut = ()=> {
    logOut()
    window.location.reload();

   }
    return (
                <>
                     {localStorage.isAuthenticated  ?  (<nav>
                     <div> <Link onClick = {onLogOut} id= "signout" to="/login">
                            sign out  
                            </Link>
                            </div>
                            <div>
                       
                           
                                  
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
