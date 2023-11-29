import React from 'react';

const Navbar = ({ history }) => {
    const isAuth = !!localStorage.getItem("token");

    const loginUser = () => {
        localStorage.setItem("token", "some-login-token");
        history.push("/profile/Vijit");
    };

    const logoutUser = () => {
        localStorage.removeItem("token");
        history.push("/");
    };
    return (
        <nav
            className="navbar is-primary"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="container">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            {!isAuth ? (
                                <button className="button is-white" onClick={loginUser}>
                                    Log in
                                </button>
                            ) : (
                                <button className="button is-black" onClick={logoutUser}>
                                    Log out
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;