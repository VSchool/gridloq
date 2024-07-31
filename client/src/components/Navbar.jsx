import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './styles.css';
import logo from './Images/Gridloq_Logo.png';

export const Navbar = () => {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    const handleLogin = () => loginWithRedirect({
        authorizationParams: {
            redirect_uri: window.location.origin + '/profile'
        }
    });

    const handleLogout = () => {
        logout();
    };

    const links = isAuthenticated ?
        <>
            <img src={logo} className="gridlog_logo" alt="Gridloq Logo"/>
            <Link to='/'>Home</Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/socket'>Socket</Link>
            <span className="heart-emoji">💙</span>
            <button className="logoutButton" onClick={handleLogout}> <FontAwesomeIcon icon={faSignOutAlt} /> Logout</button>
        </> :
        <>
            <img src={logo} className="gridlog_logo" alt="Gridloq Logo"/>
            <Link to='/' className="nav-link">Home</Link>
            <Link to='/' className="nav-link">How to Play</Link>
            <Link to='/' className="nav-link">Leaderboard</Link>
            <span className="heart-emoji">💙</span>
            <button className="loginButton" onClick={handleLogin}> <FontAwesomeIcon icon={faUserCircle} /> Login</button>
        </>;

    return (
        <nav className="navbar">
            <div className="nav-links">
                {links}
            </div>
            {isAuthenticated && <img src={user.picture} alt="avatar" width={32} height={32} />}
        </nav>
    );
};
