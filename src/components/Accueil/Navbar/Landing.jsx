import axios from "axios";
import React, { useEffect, useState } from "react";
import { CgCalculator } from 'react-icons/cg'
import landing from './landing.css'

const Landing = () => {
    const [dataOne, setDataOne] = useState([]);
    const [dataTwo, setDataTwo] = useState([]);
    const [time, setTime] = useState([]);
    const [display, setDisplay] = useState('none') // to hide and show the second select when click on checkbox
    const [height, setHeight] = useState(''); // set 100 vh height of background image when click on checkbox
    useEffect(() => {
        axios.get("/inputs.json").then((res) => setDataOne(res.data.aeroport)).catch(err => console.log(err.message))
        axios.get("/inputs.json").then((res) => setDataTwo(res.data.centreVille)).catch(err => console.log(err.message))
        axios.get("/inputs.json").then((res) => setTime(res.data.heure)).catch(err => console.log(err.message))

    }, []);
    const airoport = dataOne.map((item, index) => {
        return (
            <option key={index}>{item.name}</option>
        )
    })
    const centreVille = dataTwo.map((item, index) => {
        return (
            <option key={index}>{item.name}</option>
        )
    })
    const heure = time.map((item, index) => {
        return (
            <option key={index} value={index}>{item.time}</option>
        )
    })
    return (
        <div className="container">
            <div className="landing" style={{ height: height }}>
                <div className="form">
                    <h3>Location voiture Tunisie</h3>
                    <small>Agence de prise en charge</small>
                    <select className="primary-select" value="Airoport Tunis Carthage">
                        <optgroup label="Aeroport">
                            {airoport}
                        </optgroup>
                        <optgroup label="Centre Ville">
                            {centreVille}
                        </optgroup>
                    </select>
                    <div className="checkbox">
                        <input type="checkbox" onClick={() => { setDisplay(display === 'none' ? 'block' : 'none'); setHeight(!height ? '120vh' : '') }} />
                        <label>Agence de restitution différente</label>
                    </div>
                    <div className="selectTwo" style={{ display: display }}>
                        <small>Agence de prise en charge</small>
                        <select className="primary-select" value="Airoport Tunis Carthage" >
                            <optgroup label="Aeroport">
                                {airoport}
                            </optgroup>
                            <optgroup label="Centre Ville">
                                {centreVille}
                            </optgroup>
                        </select>
                    </div>
                    <div className="dates-times">
                        <div className="date-time">
                            <div className="date">
                                <label>Date de retrait</label>
                                <input type="date" value="2022-09-05" />
                            </div>
                            <div className="heure">
                                <label>Heure</label>
                                <select>
                                    {heure}
                                </select>
                            </div>
                        </div>
                        <div className="date-time">
                            <div className="date">
                                <label>Date de retour</label>
                                <input type="date" value="2022-09-06" />
                            </div>
                            <div className="heure">
                                <label>Heure</label>
                                <select>
                                    {heure}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="reservation btn btn-primary">
                        <CgCalculator />
                        <input type="submit" value="Devis et reservation" />
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Landing;
