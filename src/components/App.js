import React from 'react';
import Header from "./header/Header";
import CoinPage from "../pages/CoinPage/CoinPage";
import FooterComp from "./footer/Footer";
import Switch from "@material-ui/core/Switch";
import Route from "react-router-dom/es/Route";
import CoinItemPage from "../pages/CoinItemPage/CoinItemPage";
import ExchangesPage from "../pages/ExchangesPage/ExchangesPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ToolsPage from "../pages/ToolsPage/ToolsPage";
import LearnPage from "../pages/LearnPage/LearnPage";

function App() {
    return (
        <div className="App">
            <Header/>

            <Switch>
                <Route path="/" exact component={CoinPage}/>
                <Route path="/coin:id" exact component={CoinItemPage}/>
                <Route path="/exchange" exact component={ExchangesPage}/>
                <Route path="/products" exact component={ProductsPage}/>
                <Route path="/tools" exact component={ToolsPage}/>
                <Route path="/learn" exact component={LearnPage}/>
            </Switch>

            <FooterComp/>
        </div>
    );
}

export default App;
