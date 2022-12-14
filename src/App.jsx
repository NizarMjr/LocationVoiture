import React, { useState, useEffect } from 'react';
import './App.css';
import Accueil from './components/Accueil/Accueil';
import { BiArrowToTop } from 'react-icons/bi'
import { CgPushChevronRight } from 'react-icons/cg'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import Tarif from './components/Tarif/Tarif';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Accueil/Navbar/Navbar';
import Footer from './components/Footer/Footer';


function App() {
  const [listPos, setlistPos] = useState('-300px');
  const [btnPos, setbtnPos] = useState('0');
  const [mode, setMode] = useState('light')
  const [lang, setLang] = useState('fr');
  const [curr, setCurrency] = useState('eur');

  const updatePos = () => {
    setlistPos(listPos === '-300px' ? '0' : '-300px');
    setbtnPos(btnPos === '0' ? '300px' : '0');
  }
  const [scroll, setScroll] = useState(0);
  const [scrollDisplay, setDisplay] = useState('');

  const currentpos = () => {
    setScroll(window.pageYOffset);
  }
  useEffect(() => {
    window.addEventListener("scroll", currentpos);
    if (scroll > 1000)
      setDisplay('flex');
    if (scroll <= 1000) setDisplay('none');
  })

  return (
    <div className="App" style={mode === 'light' ? { backgroundColor: '#eee', color: 'black' } : { backgroundColor: 'black', color: 'white' }}>
      <div className='option' style={{ left: btnPos }} onClick={() => updatePos()}><CgPushChevronRight /></div>
      <div className='option-list' style={{ left: listPos }}>
        <div className="mode">
          <div className="night" onClick={() => setMode('night')}><MdDarkMode /></div>
          <div className="light" onClick={() => setMode('light')}><MdLightMode /></div>
        </div>
        <div className="lang">
          <span style={lang === 'fr' ? { color: "red" } : { color: "black" }} onClick={() => setLang('fr')}>FR</span> |
          <span style={lang === 'en' ? { color: "red" } : { color: "black" }} onClick={() => setLang('en')}> EN</span>
        </div>
        <div className="currency">
          <span style={curr === 'eur' ? { color: "red" } : { color: "black" }} onClick={() => setCurrency('eur')}>EUR</span> |
          <span style={curr === 'tnd' ? { color: "red" } : { color: "black" }} onClick={() => setCurrency('tnd')}> TND</span>
        </div>
        <div className="btn-list">
          <button>NOUS CONTACTER</button>
          <button>BESOIN AIDE</button>

        </div>
      </div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Accueil />} />
          <Route path='/tarif' exact element={<Tarif />} />
        </Routes>
      </BrowserRouter>
      <a href="#" style={{ display: scrollDisplay }} className="scroll-to-top"><BiArrowToTop /></a>
      <Footer />
    </div>
  );
}

export default App;
