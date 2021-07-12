import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';


import AuthContext from '../Context/Auth/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated } = authContext;
    return (
        <Route
            {...rest}
            render={props =>
                !localStorage.isAuthenticated ? (
                    <Redirect to={{
                        pathname: '/login',
                    }}/>
                ) : (
                        <Component {...props} />
                    )
            }
        />
    );
};

export default PrivateRoute;
