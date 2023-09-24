// NavBar.js
import React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <h1 className="navbar-brand" href="#">CHAT APP</h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="/home">Chat</a>
                    <a className="nav-item nav-link" href="/history">History</a>
                    <a className="nav-item nav-link" id="login" href="/login">Login</a>
                    <a className="nav-item nav-link" id="logout" href="/logout">Logout</a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;