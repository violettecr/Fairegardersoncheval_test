import React, {Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../css/Advert.css';
import Navbar from '../Navbar/Navbar';

const Advert = (props) => {
	return (
    <Fragment>
      <Navbar/>
      <div id="advert">
        <div className="card mt-3">
          <p>Annonce n°{props.location.state.id}</p>
          <div className="card-body">
            <h5 className="card-title">{props.location.state.title}</h5>
            <p className="card-text">{props.location.state.describ}</p>
            {props.location.state.price > 0 ? <p className="card-text">{props.location.state.price} Euros</p> : null}
            <p className="card-text">{props.location.state.location}</p>
            <div>
              <a href="mailto:toto@gmail.com"> <button className="btn btn-success m-1">Contacter {props.location.state.name} <FontAwesomeIcon icon={faEnvelope} /></button></a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Advert;
