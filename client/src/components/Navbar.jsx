import React from "react";
import { useAuth0 } from "@auth0/auth0-react"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './styles.css'

export const Navbar = () => {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    const handleLogin = () => loginWithRedirect({
        authorizationParams: {
            redirect_uri: location.origin + '/profile'
        }
    })

    const handleLogout = () => {
        logout();
    }

    const links = isAuthenticated ?
        <>
            <Link to='/'>Home</Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/socket'>Socket</Link>
            <button className="logoutButton" onClick={handleLogout}> <FontAwesomeIcon icon={faSignOutAlt} /> Logout</button>
        </> :
        <>
            <Link to='/'>Home</Link>
            <button className="loginButton" onClick={handleLogin}> <FontAwesomeIcon icon={faUserCircle} /> Login</button>
        </>
    return (
        <>
            <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                    {links}
                </div>
                {isAuthenticated && <img src={user.picture} alt="avatar" width={32} height={32} />}
            </nav>
        </>
    )
}
