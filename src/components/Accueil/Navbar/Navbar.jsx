import React, { useEffect, useState } from "react";
import navbar from './navbar.css'
import { FaBars } from "react-icons/fa"

const Navbar = (props) => {
    const { getDisplay } = props;
    const [position, setPosition] = useState('')
    const [scroll, setScroll] = useState(0);

    const currentpos = () => {
        setScroll(window.pageYOffset);
    }
    useEffect(() => {
        window.addEventListener("scroll", currentpos);
        if (scroll > 100)
            setPosition('fixed');
        if (scroll <= 100) setPosition('');
        if (scroll > 1000)
            getDisplay('flex')
        if (scroll <= 1000) getDisplay('none');

    })
    return (
        <header className="header" style={{ position: position }}>
            <div className="container">
                <div className="logo">
                    <h2 className="title">TUNISIA RENT CAR&reg;</h2>
                    <p className="under-title">Agence de location voiture en Tunisie</p>
                </div>
                <div className="icon-bar" ><FaBars /></div>
                <div className="navbar">
                    <ul className="lists">
                        <li className="list"><a href="#">Accuel</a></li>
                        <li className="list"><a href="#tarif">Tarif</a></li>
                        <li className="list"><a href="#voiture">Voiture</a></li>
                        <li className="list"><a href="#agence">Agence</a></li>
                        <li className="list"><a href="#promotion">Promotion</a></li>
                        <li className="list"><a href="#taxi-tunisie">Taxi Tunisie</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Navbar;