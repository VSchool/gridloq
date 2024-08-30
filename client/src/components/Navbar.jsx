import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import logo from './Images/Gridloq_Logo.png';
import heart from './Images/icons/heart.png'
import cart from './Images/icons/cart.png';

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

  const links =
   isAuthenticated ?
    <div className="navContainer">
      <div className="logoContainer">
        <img src={logo} className="logoImage" alt="Gridloq Logo"/>
        <p className="logoText">tic-tac-toe challenge</p>
      </div>
      <div className="linksContainer">
        <Link to='/' className="navLinks">Home</Link>
        <Link to='/howtoplay' className="navLinks">How to Play</Link>
        <Link to='/' className="navLinks">Leaderboard</Link>
        <Link to='/profile' className="navLinks">Friends</Link>
        <span className="navIcon">
            <img src={heart} alt="heart"/>
        </span>
        <span className="navIcon">
            <img src={cart} alt="cart"/>
        </span>
        <button className="logoutButton" onClick={handleLogout}> <img src={user.picture} alt="avatar" className="avatar" /><span>Hello, {user.name}</span></button>
      </div>
    </div>
     :
    <div className="navContainer">
      <div className="logoContainer">
        <img src={logo} className="logoImage" alt="Gridloq Logo"/>
        <p className="logoText">tic-tac-toe challenge</p>
      </div>
      <div className="linksContainer">
        <Link to='/' className="navLinks">Home</Link>
        <Link to='/howtoplay' className="navLinks">How to Play</Link>
        <Link to='/' className="navLinks">Leaderboard</Link>
        <span className="navIcon">
            <img src={heart} alt="heart"/>
        </span>
        <button className="loginButton" onClick={handleLogin}> <FontAwesomeIcon icon={faUserCircle} /> Login</button>
      </div>
    </div>;

  return (
    <nav className="navbar">
      <div className="nav-links">
        {links}
      </div>
    </nav>
  );
};
