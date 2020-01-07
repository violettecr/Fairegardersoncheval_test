import React, { useState, useEffect, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs, faSearch } from '@fortawesome/free-solid-svg-icons';
import AdvertsList from './AdvertsList';
import { apiKeyGeo} from '../../Conf';
import axios from 'axios';
import '../css/AdvertsPage.css';
import Navbar from '../Navbar/Navbar';

const AdvertsPage = () => {
  
  const [services, setServices] = useState([]);
  const [pensions, setPensions] = useState([]);
  const [activites, setActivites] = useState([]);
  const [ventes, setVentes] = useState([]);
  const [types, setTypes] = useState(1);
	const [category, setCategory] = useState(null);
	const [keyWord, setKeyWord] = useState("");
	const [location, setLocation] = useState("");
	const [minPrice, setMinPrice] = useState(0);
	const [maxPrice, setMaxPrice] = useState(0);

  useEffect(() => {
		axios.get('http://localhost:8000/category/echanges')
			.then(result => {
				setServices(result.data)
			})
  }, [])
  
  useEffect(() => {
		axios.get('http://localhost:8000/category/pensions')
			.then(result => {
				setPensions(result.data)
			})
  }, [])
  
  useEffect(() => {
		axios.get('http://localhost:8000/category/activites')
			.then(result => {
				setActivites(result.data)
			})
  }, [])
  
  useEffect(() => {
		axios.get('http://localhost:8000/category/ventes')
			.then(result => {
				setVentes(result.data)
			})
	}, [])


	const handleType = () => {
		if (types === 1) {
			setTypes(0)
		} else {
			setTypes(1)
		}
	}
	const handleCategory = (e) => {
		setCategory(Number(e.target.value));
	}
	const handleKeyWord = (e) => {
		setKeyWord(e.target.value);
	}

	const handleLocation = (e) => {
		setLocation(e.target.value);
	}
	const handleMinPrice = (e) => {
		setMinPrice(e.target.value);
	}
	const handleMaxPrice = (e) => {
		setMaxPrice(e.target.value);
	}

	const handleButton = (e) => {
		e.preventDefault();
		navigator.geolocation.getCurrentPosition((position) => {
			axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${apiKeyGeo}`)
				.then((response) => {
					setLocation(response.data.name);
				});
		});
	};

	useEffect(() => {
		axios.get(`https://geo.api.gouv.fr/communes?nom=${location}&fields=departement&boost=population&limit=5`)
			.then((response) => {
			});
	}, [location]);

	return (
    <Fragment>
      <Navbar/>
      <div id="advertsPage">
        <form>
          <div>
            <label>
              <input onChange={handleType} type="radio" className="option-input radio" value="offre" name="register" checked={types} />
              Offre
            </label>
            <label>
              <input onChange={handleType} type="radio" className="option-input radio" value="demande" name="register" checked={!types} />
              Demande
            </label>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect01">Categorie</label>
            </div>
            <select onChange={handleCategory} className="custom-select" id="inputGroupSelect01">
            <option>Choisir une catégorie</option>
            <optgroup label="Echanges de services">
            {services.map((category, index) => {
            return <option value={category.id}>{category.name}</option>
            })}
            </optgroup>
            <optgroup label="Pensions">
              {pensions.map((category, index) => {
              return <option value={category.id}>{category.name}</option>
            })}
            </optgroup>          
            <optgroup label="Activités et balades">
              {activites.map((category, index) => {
                return <option value={category.id}>{category.name}</option>
              })}
            </optgroup>
            <optgroup label="Ventes/Dons/Locations">
              {ventes.map((category, index) => {
                return <option value={category.id}>{category.name}</option>
              })}
            </optgroup>
            </select>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default"><FontAwesomeIcon icon={faSearch} /> Rechercher par Mots Clés</span>
            </div>
            <input onChange={handleKeyWord} type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">Localisation</span>
            </div>
            <button onClick={handleButton}><FontAwesomeIcon icon={faCrosshairs} /> Localisez moi!</button>
            <input
            onChange={handleLocation} 
            value={location} 
            type="text" 
            className="form-control" 
            aria-label="Default" 
            aria-describedby="inputGroup-sizing-default" />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">Prix minimum</span>
            </div>
            <input onChange={handleMinPrice} type="number" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">Prix maximum</span>
            </div>
            <input onChange={handleMaxPrice} type="number" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
          </div>
        </form>
        <AdvertsList 
        typesAd={types} 
        categoryAd={category} 
        keyWordAd={keyWord} 
        locationAd={location} 
        minPriceAd={minPrice} 
        maxPriceAd={maxPrice} />
      </div>
    </Fragment>
  );
}

export default AdvertsPage;
