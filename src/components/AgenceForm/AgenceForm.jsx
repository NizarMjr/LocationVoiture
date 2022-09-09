import React, { useState, useEffect } from "react";
import axios from "axios";
import agenceForm from './agenceForm.css'
const AgenceForm = () => {
    const [dataOne, setDataOne] = useState([]);
    const [dataTwo, setDataTwo] = useState([]);
    const [time, setTime] = useState([]);
    const [display, setDisplay] = useState('none') // to hide and show the second select when click on checkbox

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
        <form className="agence-form">
            <div className="select">
                <p>Agence de prise en charge</p>
                <select className="agence-select" value="Airoport Tunis Carthage">
                    <optgroup label="Aeroport">
                        {airoport}
                    </optgroup>
                    <optgroup label="Centre Ville">
                        {centreVille}
                    </optgroup>
                </select>
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
                <div className="checkbox">
                    <input type="checkbox" onClick={() => { setDisplay(display === 'none' ? 'block' : 'none') }} />
                    <label>Agence de restitution différente</label>
                </div>
            </div>
            <div className="agence-dates-times">
                <div className="agence-date-time">
                    <div className="agence-date">
                        <p>Date de retrait</p>
                        <input type="date" value="2022-09-05" />
                    </div>
                    <div className="agence-heure">
                        <p>Heure</p>
                        <select>
                            {heure}
                        </select>
                    </div>
                </div>
                <div className="agence-date-time">
                    <div className="agence-date">
                        <p>Date de retour</p>
                        <input type="date" value="2022-09-06" />
                    </div>
                    <div className="agence-heure">
                        <p>Heure</p>
                        <select>
                            {heure}
                        </select>
                    </div>
                </div>
            </div>
            <button className="btn btn-primary">RECHERCHER</button>
        </form>
    )
}
export default AgenceForm;