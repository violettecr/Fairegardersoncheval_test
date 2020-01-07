import '../css/PrevAdvert.css';
import React from 'react';
import { Link } from "react-router-dom";


function PrevAdvert(props) {
  return (
    <Link style={{ textDecoration: 'inherit' }} to={{
      pathname: `/advert/${props.id}`,
      state: {
        title: props.title,
        describ: props.describ,
        id: props.id,
        types: props.types,
        location: props.location,
        price: props.price,
        name: props.name,
        image: props.image,
      }
    }}>
      <div id="prev-advert">
        <div className="card mt-3">
          <div className="card-body">
            {props.image != 'undefined' ? <img class="card-img-top" src={props.image} alt="Image advert" /> : null}
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.describ.substring(0, 100)}...</p>
            {props.price > 0 ? <p className="card-text">{props.price} Euros</p> : null}
            <p className="card-text">{props.location}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PrevAdvert;
