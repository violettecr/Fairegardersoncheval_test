import React, { useState, useEffect, Fragment } from 'react';
import PrevAdvert from './PrevAdvert';
import axios from 'axios';
import '../css/AdvertsList.css';

function AdvertsList(props) {
	const [adverts, setAdverts] = useState([]);
	const typesAdvert = props.typesAd;
	const categoryAdvert = props.categoryAd;
	const keyWordAdvert = props.keyWordAd;
	const locationAdvert = props.locationAd;
	const minPriceAdvert = props.minPriceAd;
	const maxPriceAdvert = props.maxPriceAd;


	useEffect(() => {
		axios.get('http://localhost:8000/advert')
			.then(result => {
				setAdverts(result.data)
			})
	}, [])

	return (
    <Fragment>
      <div id="advertList">
        {adverts.filter((advert) => {
          console.log(categoryAdvert)
          if(categoryAdvert){
            return advert.category_id === categoryAdvert
          }else{
            console.log('toto')
            return advert
          }})
          .filter ((advert) => {
            if (advert.price && minPriceAdvert > 0){
              return minPriceAdvert <= advert.price
            }else{
              return advert
          }})
          .filter((advert) => {
            if (advert.price && maxPriceAdvert > 0){
              return advert.price <= maxPriceAdvert
            }else{
              return advert
            }})
          .filter((advert) => {
          return advert.types === typesAdvert})
          .filter((advert) => {
          return advert.title.toLowerCase().includes(keyWordAdvert.toLowerCase())})
          .filter((advert) => {
            return advert.location.toLowerCase().includes(locationAdvert.toLowerCase())})
          .map((advert, index) => {
            return <PrevAdvert 
            key={index} 
            title={advert.title} 
            describ={advert.description}
            id={advert.id} 
            types={advert.types} 
            location={advert.location}
            price={advert.price}
            name={advert.name}
            image={advert.url_image}  />
          })
        }
      </div>
    </Fragment>

  );
}

export default AdvertsList;