// Reste à faire :
// - configurer CORS pour autoriser juste "fairegardersoncheval.fr"
// - ajouter URL_image
// - rendre obligatoire l'acceptation des mentions legales
// - toaster status 400

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Recaptcha from 'react-google-recaptcha';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import { apiKeyGeo } from '../Conf';
import 'react-toastify/dist/ReactToastify.css';
import './css/RegisterAdverts.css';
import Navbar from './Navbar/Navbar';

const RegisterAdverts = () => {
  // --------POST vers API--------- //
  const [services, setServices] = useState([]);
  const [pensions, setPensions] = useState([]);
  const [activ, setActiv] = useState([]);
  const [ventes, setVentes] = useState([]);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: null,
    title: '',
    location: '',
    price: null,
    description: '',
    types: 1,
    category: '',
  });

  useEffect(() => {
    axios.get('http://localhost:8000/category/echanges')
      .then((result) => {
        setServices(result.data);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8000/category/pensions')
      .then((result) => {
        setPensions(result.data);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8000/category/activites')
      .then((result) => {
        setActiv(result.data);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8000/category/ventes')
      .then((result) => {
        setVentes(result.data);
      });
  }, []);

  const submitForm = () => {
    axios.post('http://localhost:8000/advert', {
      types: form.types,
      name: form.name,
      email: form.email,
      phone: form.phone,
      location: form.location,
      title: form.title,
      price: form.price,
      description: form.description,
      category_id: form.category,
    }).then((result) => {
      console.log(result);
    });
  };

  // ---------------TOASTER SUCCESS/FAIL------------------//

  const toasterSuccess = () => toast.success('Annonce postée avec succès !', {
    position: 'top-center',
    autoClose: 7000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

  const toasterFail = () => toast.error("Avez-vous rempli tous les champs et coché 'Je ne suis pas un robot ?'", {
    position: 'top-center',
    autoClose: 7000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

  // ----------------LABELS OBLIGATOIRES------------------//

  const isEnabled = form.category !== 'Choisir une catégorie *'
    && form.category !== ''
    && form.title.length > 0
    && form.description.length > 0
    && form.location.length > 0
    && form.email.length > 0;

  // ------------RECAPTCHA--------------//

  const [isVerified, setIsVerified] = useState(false);

  const onChange = () => {
    console.log('captcha loaded ok');
    setIsVerified(!isVerified);
  };
  const verifyCallback = (response) => {
    if (response) {
      setIsVerified(!isVerified);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isVerified && isEnabled) {
      submitForm();
      console.log('Annonce postée sur la base de données Advert');
      toasterSuccess();
    } else {
      toasterFail();
    }
  };

  // ---------------BUTTON-LOCALISEZ-MOI----------------//

  const handleButton = (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition((position) => {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${apiKeyGeo}`)
        .then((response) => {
          setForm({ ...form, location: response.data.name });
        });
    });
  };

  return (
    <>
      <Navbar />
      <div id="registerAdverts">
        <div className="form-style-5">
          <h1>Déposer une annonce</h1>
          <form>
            <fieldset>
              <legend>
                <span className="number">1</span>
                Annonce
              </legend>
              <div id="catAnnonce">
                <label htmlFor="offre">
                  Je propose
                  <input onChange={() => setForm({ ...form, types: 1 })} type="radio" name="offre" id="offre" value={form.types} checked={form.types} />
                </label>
                <label htmlFor="demande">
                  Je recherche
                  <input onChange={() => setForm({ ...form, types: 0 })} type="radio" name="demande" id="demande" value={form.types} checked={!form.types} />
                </label>
              </div>
              <select
                required="required"
                name="field4"
                className={!form.category ? 'missing' : 'ok'}
                onChange={(event) => setForm({ ...form, category: event.target.value })}
              >
                <option>Choisir une catégorie</option>
                <optgroup label="Echanges de services">
                  {services.map((category) => <option value={category.id}>{category.name}</option>)}
                </optgroup>
                <optgroup label="Pensions">
                  {pensions.map((category) => <option value={category.id}>{category.name}</option>)}
                </optgroup>
                <optgroup label="Activités et balades">
                  {activ.map((category) => <option value={category.id}>{category.name}</option>)}
                </optgroup>
                <optgroup label="Ventes/Dons/Locations">
                  {ventes.map((category) => <option value={category.id}>{category.name}</option>)}
                </optgroup>
              </select>
              <input
                type="text"
                className={!form.title ? 'missing' : 'ok'}
                onChange={(event) => setForm({ ...form, title: event.target.value })}
                value={form.title}
                placeholder="Titre de l'annonce *"
                name="register"
                required="required"
                maxLength="256"
              />
              <textarea
                className={!form.description ? 'missing' : 'ok'}
                type="text"
                onChange={(event) => setForm({ ...form, description: event.target.value })}
                value={form.description}
                placeholder="Texte de l'annonce *"
                id="zoneTexte"
                required="required"
                maxLength="1200"
              />
              <input
                className={!form.price ? '' : 'ok'}
                type="number"
                onChange={(event) => setForm({ ...form, price: event.target.value })}
                value={form.price}
                placeholder="Prix (€)"
                name="register"
              />
            </fieldset>
            <fieldset>
              <legend>
                <span className="number">2</span>
                Localisation
              </legend>
              <input
                className={!form.location ? 'missing' : 'ok'}
                type="text"
                onChange={(event) => setForm({ ...form, location: event.target.value })}
                value={form.location}
                placeholder="Entrez votre ville ou votre code postal *"
                name="register"
                required="required"
              />
              <button type="submit" onClick={handleButton}>
                <FontAwesomeIcon icon={faCrosshairs} />
                Localisez moi!
              </button>
            </fieldset>
            <fieldset>
              <legend>
                <span className="number">3</span>
                Contact
              </legend>
              <input
                className={!form.name ? '' : 'ok'}
                type="text"
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                value={form.name}
                placeholder="Nom"
                name="register"
                maxLength="30"
              />
              <input
                className={!form.email ? 'missing' : 'ok'}
                type="email"
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                value={form.email}
                placeholder="Email *"
                name="register"
                required="required"
                maxLength="50"
              />
              <input
                className={!form.phone ? '' : 'ok'}
                onChange={(event) => setForm({ ...form, phone: event.target.value })}
                type="number"
                value={form.phone}
                placeholder="Telephone"
                name="register"
                maxLength="12"
              />
            </fieldset>
            <p>* Mentions obligatoires</p>
            <Recaptcha
              sitekey="6LenRsYUAAAAAOj8qWl5Rp66bucQCNtOKczLvviT"
              render="explicit"
              onChange={onChange}
              verifyCallback={verifyCallback}
            />
            <button
              type="submit"
              onClick={handleSubmit}
              className="button_register"
              href="#"
            >
              Déposer
            </button>
            <ToastContainer
              position="top-center"
              autoClose={7000}
              hideProgressBar
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnVisibilityChange
              draggable
              pauseOnHover
            />
          </form>
        </div>
      </div>
    </>
  );
};
export default RegisterAdverts;
