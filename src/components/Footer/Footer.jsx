import React from "react";
import { BsTwitter } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import footer from './footer.css'
const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-head">REJOINDRE TUNISIA RENT CAR SUR :</div>
            <div className="social">
                <a href="https://www.twitter.com" target="_blank" className="media"><BsTwitter /></a>
                <a href="https://www.facebook.com" target="_blank" className="media"><FaFacebookF /></a>
            </div>
            <div className="footer-contents">
                <div className="footer-box">
                    <h3 className="footer-box-title">TUNISIA RENT CAR</h3>
                    <div className="footer-content">
                        <a className="footer-link" href="">Contact</a>
                        <a className="footer-link" href="">Assurence</a>
                    </div>
                </div>
                <div className="footer-box">
                    <h3 className="footer-box-title">SERVICES</h3>
                    <div className="footer-content">
                        <a className="footer-link" href="">Location voiture avec GPS</a>
                        <a className="footer-link" href="">Location voiture longue durée</a>
                        <a className="footer-link" href="">Location voiture à domicile</a>
                        <a className="footer-link" href="">Location voiture automatique</a>
                        <a className="footer-link" href="">Location voiture avec chauffeur</a>
                        <a className="footer-link" href="">Location voiture utilitaire</a>
                    </div>
                </div>
                <div className="footer-box">
                    <h3 className="footer-box-title">Agences en villes</h3>
                    <div className="footer-content">
                        <a className="footer-link" href="">Location voiture Tunis</a>
                        <a className="footer-link" href="">Location voiture Hammamet</a>
                        <a className="footer-link" href="">Location voiture Enfidha</a>
                        <a className="footer-link" href="">Location voiture Monastir</a>
                        <a className="footer-link" href="">Location voiture Sousse</a>
                        <a className="footer-link" href="">Location voiture Nabeul</a>
                        <a className="footer-link" href="">Location voiture Bizerte</a>
                        <a className="footer-link" href="">Location voiture La Marsa</a>
                    </div>
                </div>
                <div className="footer-box">
                    <h3 className="footer-box-title">Agences aux aéroports</h3>
                    <div className="footer-content">
                        <a className="footer-link" href="">Location voiture aéroport Tunis</a>
                        <a className="footer-link" href="">Location voiture aéroport Enfidha</a>
                        <a className="footer-link" href="">Location voiture aéroport Djerba</a>
                        <a className="footer-link" href="">Location voiture aéroport Sfax</a>
                        <a className="footer-link" href="">Location voiture aéroport Monastir</a>
                    </div>
                </div>
            </div>
            <div className="copyright">&copy;2020 TUNISIA-RENT-CAR.com - Tous droits réservés - Paiement 100% sécurisé</div>
            <p className="under-footer">TUNISIA RENT CAR dispose d'une large gamme de véhicules climatisés avec boîte manuelle ou automatique, essence ou diesel : citadines, berlines, monospaces, SUV ou minibus, louez à des tarifs imbattables une familiale ou privilégiez le confort et la qualité de véhicules haut de gamme. De nombreuses options accompagnent chaque location de voiture en Tunisie pour un service sur mesure : GPS, siège auto…
            </p>
        </footer>
    )
}
export default Footer; 