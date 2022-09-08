import axios from "axios";
import React, { useEffect, useState } from "react";
import service from './service.css'
import IMG1 from '../../../images/service1.jpg'
import IMG2 from '../../../images/service2.jpg'
import IMG3 from '../../../images/service3.jpg'


const Service = () => {
    const [services, setServices] = useState([]);
    const imgs = [IMG1, IMG2, IMG3];

    useEffect(() => {
        axios.get('/inputs.json').then(res => setServices(res.data.service));
    }, [])

    const service = services.map((item, index) => {
        return (
            <div className="serv box" key={index}>
                <div className="image">
                    <img src={imgs[index]} />
                </div>
                <div className="serv-name">{item.name}</div>
                <div className="serv-desc">{item.desc}</div>
                <button className="submit-btn btn">Devis et reservation</button>
            </div>
        )
    })
    return (
        <section className="service">
            <h5>service</h5>
            <h2>Agence de location voiture en Tunisie</h2>
            <div className="container">
                <div className="our-service">
                    {service}
                </div>
                <div className="description">
                    <p className="intro_">Tunisia Rent a car est une agence de location voiture Tunisie agissant dans le domaine de location de véhicules depuis 2006. Nous fournissons à nos clients un service simple, efficace et rapide pour la location de voiture aux aéroports de la Tunisie ainsi que toutes les villes touristiques de la Tunisie.
                        Vous pourriez nous retrouver facilement à l’aéroport de Tunis Carthage, l’aéroport Enfidha, l’aéroport de Monastir et l’aéroport International Djerba Midoun.
                    </p>
                    <div className="desc-content">
                        <div className="content">
                            <h2 className="title">Profiter de votre voiture en Tunisie</h2>
                            <p>La Tunisie est un pays d’Afrique du Nord, petit en termes de surface, mais Grand en termes de fascination de ses monuments historiques.

                                Tunisia Rent Car est toujours présent pour vous faciliter la vie ainsi que la location voiture Tunisie. Pour vos déplacements en Tunisie, vous pouvez compter sur nous, nous vous proposons la location de voitures courte ou longue durée, avec ou sans chauffeur. Notre but c’est de vous assister, lors de vos visites de découverte du pays ou aussi pour vous aider lors de vos déplacements professionnels.
                            </p>
                        </div>
                        <div className="content">
                            <h2 className="title">Louer votre véhicule à des prix pas cher avec notre agence</h2>
                            <p>Tunisia Rent Car fait évoluer ses services d’une façon permanente. Nous offrons à nos clients des véhicules neufs, bien entretenues avec zéro défaut pour que vous n’ayez pas de surprises lors de vos déplacements.

                                En fournissant les meilleurs services de manière transparente, nous limitons l’effet des distances entre les villes, en vous offrant une tranquillité d’esprit lors de vos déplacements. Ce qui vous permettra de profiter de vos visites professionnelles ou de vos vacances en famille en Tunisie.

                                Nous proposons à nos clients des prix intéressants et pas cher pour louer une voiture tout en garantissons une meilleure qualité de services.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Service;