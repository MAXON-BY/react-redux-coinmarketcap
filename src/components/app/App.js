import React from 'react';
import './App.css';
import Header from "../header/Header";
import CoinPage from "../../pages/CoinPage/CoinPage";
import FooterComp from "../footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <CoinPage/>
            <FooterComp/>
        </div>
    );
}

export default App;
