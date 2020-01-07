import React, {useState} from 'react';
import {Link} from "react-router-dom";
import '../css/Navbar.css';


const HomeNavbar = () => {

  const [bcolor, setBcolor] = useState("transparent");
  const [tcolor, setTcolor] = useState("white");

  const scrollFunction = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
     return setBcolor("WhiteSmoke ") & setTcolor("inherit")
    } else {
      return setBcolor("transparent") & setTcolor("white")
    }
  };   

  window.onscroll = () => { scrollFunction()};

  return (
    <nav id="homeNavbar" 
    className="navbar navbar-expand-md navbar-custom  sticky-top scrolling-navbar" 
    style={{backgroundColor : bcolor, transitionDuration: "1.5s"}}>
      <div id="navLogo">
        <a className="nav-item nav-link active" href="#" >
          <Link to="/" style={{color: tcolor, transitionDuration: "1s"}}>
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
              <Link to="/advertsPage" style={{color: tcolor, transitionDuration: "1s"}}>
                Annonces 
              </Link>
            </a>
            <a className="nav-item nav-link" href="#">
              <Link to="/registerAdverts" style={{color: tcolor, transitionDuration: "1s"}}>
                Déposer une annonce 
              </Link>
            </a>
            <a className="nav-item nav-link" href="#">
              <Link to="/contact" style={{color: tcolor, transitionDuration: "1s"}}>
                Contact 
              </Link>
            </a>
            <a className="nav-item nav-link" href="#">
              <Link to="/adminLogin" style={{color: tcolor, transitionDuration: "1s"}}>
                Admin
              </Link>
            </a>
          </div>
        </div>
      </div>
        

      </nav>
  );
}


export default HomeNavbar;
