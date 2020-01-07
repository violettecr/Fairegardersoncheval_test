import React from 'react';
import { Link } from "react-router-dom";
import '../css/Navbar.css';


const Navbar = () => {

  return (
    <nav id="navbar" className="navbar navbar-expand-md navbar-custom bg-light sticky-top scrolling-navbar">
      <div id="navLogo">
        <a className="nav-item nav-link active" href="#" >
          <Link to="/">
            <img id ="logo" src={`${process.env.PUBLIC_URL}/Pictures/logo.png`} alt='logo'/>
            Faire Garder son cheval 
          </Link> <span className="sr-only">(current)</span>
        </a>
      </div>
      <div id="navMenu">
        <button 
        className="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarNavAltMarkup" 
        aria-controls="navbarNavAltMarkup" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="#">
              <Link to="/advertsPage">
                Annonces 
              </Link>
            </a>
            <a className="nav-item nav-link" href="#">
              <Link to="/registerAdverts">
                Déposer une annonce 
              </Link>
            </a>
            <a className="nav-item nav-link" href="#">
              <Link to="/contact">
                Contact 
              </Link>
            </a>
            <a className="nav-item nav-link" href="#">
              <Link to="/adminLogin">
                Admin
              </Link>
            </a>
          </div>
        </div>
      </div>
    </nav>
)};



export default Navbar;
