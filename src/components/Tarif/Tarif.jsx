import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Accueil/Navbar/Navbar";
import AgenceForm from "../AgenceForm/AgenceForm";
import Footer from "../Footer/Footer";
import tarif from './tarif.css'

const Tarif = () => {
    const [tarifs, setTarif] = useState([]);
    useEffect(() => {
        axios.get('/inputs.json').then(res => setTarif(res.data.tarif))
    }, []);
    const tarif = tarifs.map((item, index) => {
        return (
            <div className="list" key={index}>
                <div className="classe">{item.classe}</div>
                <div className="voitures">{item.voiture}</div>
                <div className="jours-prix">{item.jours}</div>
                <div className="semaine-prix">{item.semaine}</div>
            </div>
        )
    })
    return (
        <section className="tarif">
            <div className="container">
                <h2 className="tarif-title">Tarifs / Prix location voiture en Tunisie</h2>
                <p className="tarif-intro">Tunisia Rent Car est un acteur incontournable de la location de voitures en Tunisie via le site de réservation www.tunisia-rent-car.com.
                    Loueur de véhicules de proximité, Tunisia Rent Car possède un large choix de véhicules, répartis dans un réseau de plusieurs agences de location et points relais. Notre agence de location de voiture en Tunisie et à travers son réseaux peut vous assurer le meilleur service dans le domaine de location de voitures longue et courtes durée, avec ou sans chauffeur.
                </p>
                <div className="tarif-prix">
                    <h2 className="prix-title">
                        Prix / tarifs pas chers location voitures en Tunisie
                    </h2>
                    <div className="tarif-list">
                        <div className="list-title">
                            <h3>Classe</h3>
                            <h3>Voitures</h3>
                            <h3>3 Jours prix jour</h3>
                            <h3>1 Semaine prix jour</h3>
                        </div>
                        {tarif}
                    </div>
                </div>
                <p className="tarif-note">Prix /<span>tarifs</span> hors période de fête et haute saison. Pour avoir le prix exact il faut faire une demande de réservation.</p>
                <AgenceForm />
            </div>
        </section>
    )
}
export default Tarif;