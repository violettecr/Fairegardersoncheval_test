/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import ControlledCarousel from './Carousel';
import './css/HomePage.css';
import 'aos/dist/aos.css';
import HomeNavbar from './Navbar/HomeNavbar';

AOS.init();

const HomePage = () => (
  <>
    <HomeNavbar />
    <div id="homePage">
      <header id="carousel">
        <ControlledCarousel />
        <div id="titles">
          <h1 id="mainTitle">Faire garder son cheval entre Particuliers</h1>
          <h4 id="minTitle">Petites annonces gratuites pour le cheval, le poney, et l'âne</h4>
        </div>
        <a id="scrollButton" className="btn btn-primary" href="#section1" role="button">V</a>
      </header>

      <div id="homePageBody">
        <section id="section1">
          <div>
            <h3><strong>Envie de proposer vos services ? Besoin d'un coup de main ?</strong></h3>
            <p>N'attendez plus, déposez un annonce ou recherchez en une</p>
          </div>
          <div id="buttons">
            <button id="propose" type="button" className="btn btn-primary">
              <Link to="/advertsPage">
              Déposer une annonce
              </Link>
            </button>
            <button id="recherche" type="button" className="btn btn-primary">
              <Link to="/registerAdverts">
              Rechercher une annonce
              </Link>
            </button>
          </div>
        </section>
        <section id="section2">
          <div
            id="presentation"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <h2>Qui sommes-nous?</h2>
            <p>
              {' '}
                  Comme vous, nous sommes des passionnés de cheval. Nous sommes
                  des propriétaires heureux.On passe beauc oup de temps avec nos
                  chevaux et ils nous apportent tellement !! Mais, nous avons aussi
                  parfois rencontré des soucis de garde. Comment faire pendant
                  les vacances ? Comment faire les jours d’indisponibilité, de
                  maladie, de blessure, ou bien les périodes trop tendues par le
                  travail ou les études. On ne peut pas laisser son cheval seul
                  pendant cette période, impossible !!! Alors on recherche dans
                  l’entourage ou par petites annonces une personne de confiance
                  autour de chez soi qui pourrait dépanner pendant ce temps. Pas
                  toujours simple …C’est ce qui nous a amené à penser à un plus
                  large média pour trouver la bonne personne que l’on ne connait pas
                  encore mais qui est proche de chez soi et que notre cheval
                  apprécierait. On peut aussi avoir besoin d’un matériel, d’un
                  conseil, d’une aide et autant voir à proximité de chez soi.
            </p>
          </div>
        </section>

        <section
          id="section3"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h2>Concept</h2>
          <p>
            {' '}
                Ce nouveau site s’adresse à tous les amoureux du cheval dans le but de
                faciliter les échange de services et d’infos entre eux. Etre propriétaire
                d’un cheval, d’un poney est un vrai bonheur mais cela ne va pas sans contrainte,
                ni responsabilités. Lorsque l’on est propriétaire, on a tous rencontré
                à un moment ou à un autre un souci d’indisponibilité ou de manque de temps.
                Comment faire dans ces cas là ? Comment trouver la bonne personne, disponible
                et de confiance à côté de chez soi à qui confier son cheval ou seulement
                venir le voir au pré pendant les vacances, vérifier son eau, les clôtures…
                que tout aille bien et aussi, nous donner des nouvelles :).C’est, cette idée
                première qui nous a amené à concevoir ce site. Mais aussi on peut avoir besoin
                de rechercher un nouveau club, une pension, un pré auprès de chez soi.
                Dans ce cas, autant demander les infos et les avis aux utilisateurs eux-mêmes.
                On peut bien sûr élargir à d’autres besoins concernant le cheval, le poney
                et l’âne….. Le fonctionnement est très simple. Il suffit de poster une annonce,
                de préférence avec une photo et un lieu identifiable pour pouvoir matcher
                avec les offres similaires. Nous avons listés quelques catégories d’annonces :
            <br />
                  – « faire garder son cheval »
            <br />
                  – « rechercher une demi-pension »
            <br />
                  – « échanger / proposer des services »
            <br />
                  – « rechercher un matériel »
            <br />
              Cette liste pourra être élargie en fonction de vos demandes. Nous
              restons à l’écoute pour le bien-être du cheval et de son cavalier.
              Le site est gratuit et le restera. Nous attendons uniquement du
              respect l’un envers les autres et le sens du partage.
          </p>
        </section>
      </div>
    </div>
  </>
);

export default HomePage;
