import React, { useState } from "react";
import Landing from '../Accueil/Navbar/Landing';
import Navbar from '../Accueil/Navbar/Navbar';
import Promotion from '../Accueil/Promotion/Promotion';
import Service from '../Accueil/Service/Service';
import Footer from '../Footer/Footer';
import accueil from './accueil.css'
import { BiArrowToTop } from 'react-icons/bi'
const Accueil = () => {
    const [scrollDisplay, setscrollDisplay] = useState('none');
    const getDisplay = (display) => {
        setscrollDisplay(display);
    }
    return (
        <div className="accueil">
            <Navbar getDisplay={getDisplay} />
            <Landing />
            <Promotion />
            <Service />
            <Footer />
            <a href="#" style={{ display: scrollDisplay }} className="scroll-to-top"><BiArrowToTop /></a>
        </div>
    )
}
export default Accueil;