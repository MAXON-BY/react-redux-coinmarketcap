import React from 'react';
import LogoFooter from '../../common/images/logoFooter.svg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="logo-footer">
                <img src={LogoFooter}
                     alt="logo"/>
                <div className="author">© 2020 CoinMarketCap by Max Nyrkov</div>
            </div>
        </div>
    );
};

export default Footer;