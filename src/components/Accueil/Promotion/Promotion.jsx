import React, { useEffect, useState } from "react";
import promotion from './promotion.css'
import IMG1 from '../../../images/polo.jpg'
import IMG2 from '../../../images/skoda.jpg'
import IMG3 from '../../../images/polo-sedan.jpg'
import IMG4 from '../../../images/skoda-octavia.jpg'
import axios from "axios";
import { GiConfirmed } from 'react-icons/gi'

const Promotion = () => {
    const [cars, setCars] = useState([]);
    const [promotions, setPromotions] = useState([]);
    useEffect(() => {
        axios.get('/inputs.json').then(res => setCars(res.data.cars)).catch(err => console.log(err.message));
        axios.get('/inputs.json').then(res => setPromotions(res.data.promotion)).catch(err => console.log(err.message));
    }, []);

    const images = [IMG1, IMG2, IMG3, IMG4];

    const car = cars.map((item, index) => {
        return (
            <div className="car box" key={index}>
                <div className="car-image">
                    <img src={images[index]} />
                </div>
                <div className="car-model">
                    {item.model}
                </div>
                <div className="car-price">
                    Prix à partir de <span>{item.price}</span>jour
                </div>
                <button className="submit-btn btn">Devis et reservation</button>
            </div >
        )
    })
    const promotion = promotions.map((item, index) => {
        return (
            <div className="content" key={index}>
                <div className="icon"><GiConfirmed /></div>
                <p>{item.content}</p>
            </div>
        )
    })
    return (
        <>
            <section id="#promotion" className="promotion">
                <h5>Promotion</h5>
                <h2>Promotion location de voiture en Tunisie</h2>
                <div className="container">
                    <p className="intro">Avec <span>TUNISIA RENT CAR</span>, effectuez une location voiture tunisie pas cher. Les meilleures promos de location auto tunisie.
                        Réservez votre voiture à l'aéroport en 3 clics.</p>
                    <div className="car-models">
                        {car}
                    </div>
                </div>
            </section>
            <div className="promotion-content">
                <div className="google-rate">
                    <h2>Pourquoi louer avec TUNISIA RENT CAR ?</h2>
                    <p>Google <span>★★★★★</span> 4,8</p>
                </div>
                <div className="contents">
                    {promotion}
                </div>
            </div>
        </>
    )
}
export default Promotion;