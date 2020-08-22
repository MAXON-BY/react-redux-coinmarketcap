import React from 'react';
import Header from "./header/Header";
import FooterComp from "./footer/Footer";
import {renderRoutes} from "react-router-config";
import {routes} from "../helpers/constants/routes";

const App = () => {
    return (
        <div className="App">
            <Header/>
            {renderRoutes(routes)}
            <FooterComp/>
        </div>
    );
}

export default App;
