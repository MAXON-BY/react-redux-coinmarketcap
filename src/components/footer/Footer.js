import React from 'react';
import LogoFooter from '../../common/images/logoFooter.svg'
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="logo-footer">
                <img src={LogoFooter}
                     alt="logo"/>
                <div className="author">© 2020 CoinMarketCap by
                    <Link to="https://jobs.tut.by/resume/d311210eff028da1ec0039ed1f63496a624537" target="_blank"> Max Nyrkov</Link>
                </div>
                <div className="author">
                    <Link to="https://github.com/MAXON-BY/react-redux-coinmarketcap" target="_blank">Github project go!</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;