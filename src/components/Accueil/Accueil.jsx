import React, { useState } from "react";
import Landing from '../Accueil/Navbar/Landing';
import Navbar from '../Accueil/Navbar/Navbar';
import Promotion from '../Accueil/Promotion/Promotion';
import Service from '../Accueil/Service/Service';
import Footer from '../Footer/Footer';
import accueil from './accueil.css'
import { BiArrowToTop } from 'react-icons/bi'
const Accueil = () => {

    return (
        <div className="accueil">
            <Landing />
            <Promotion />
            <Service />
        </div>
    )
}
export default Accueil;