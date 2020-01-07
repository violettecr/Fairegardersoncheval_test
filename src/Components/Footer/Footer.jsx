import React from 'react';
import { Link } from "react-router-dom";
import '../css/Footer.css';

const Footer = () => {

  let now = new Date();
  let year = now.getFullYear();

	return (
		<div id="footer">
			<div id="left">
        <h1>
          <img 
            id ="instagram" 
            src={`${process.env.PUBLIC_URL}/Pictures/logo.png`} 
            alt='logo'
          />  Faire garder son cheval
        </h1>
        <a href="mailto:fairegardersoncheval@gmail.com">fairegardersoncheval@gmail.com</a>
        <p><Link to="/download">Liens téléchargeables</Link></p>
        <p>© {year} Faire garder son cheval - Tous droits réservés - <Link to="/legalNotices">Mentions Légales</Link></p>
			</div>
			<div id="right">
        <p> Suivez nous sur les réseaux sociaux </p>
        <div id="icons">
          <a href="https://www.facebook.com/FaireGarderSonCheval/">
            <img id ="facebook" src={`${process.env.PUBLIC_URL}/Pictures/facebook.png`} alt='facebook'/>
          </a>
          <a href="https://www.instagram.com/">
            <img id ="instagram" src={`${process.env.PUBLIC_URL}/Pictures/instagram.png`} alt='instagram'/>
          </a> 
        </div>
			</div>
		</div>
	);
}

export default Footer;