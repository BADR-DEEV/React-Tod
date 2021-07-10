import React from 'react';
import { Link } from 'react-router-dom';

import "../Navbar/NavBar.css"


const Navbar=()=> {
    return (
                <nav>
                     <div>
                            <Link id= "link" to="/login">
                            sign in  
                            </Link>
                            </div>
                            <div>
                       
                            <Link id = "link2" to = "/Register">
                                    sign up
                                       
                                    </Link>
                                  
                                    </div>
                </nav>
    );
}
export default Navbar;
