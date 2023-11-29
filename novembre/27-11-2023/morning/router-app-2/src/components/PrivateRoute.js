import React from 'react';
//import Redirect from 'react-router-dom';

//PrivateRoute
const PrivateRoute = (Component) => {
    const AuthRoute = () => {
        const isAuth = !!localStorage.getItem("token");
        if (isAuth) {
            return <Component />;
        } /* else {
            return <Redirect to="/" />;
        } */
    };

    return AuthRoute;
};

export default PrivateRoute;