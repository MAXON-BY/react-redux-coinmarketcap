import React from 'react';
import Top from "./top/Top";
import NavBar from "../navbar/NavBar";

const Header = () => {
    return (
        <div className='header'>
            <Top/>
            <NavBar/>
        </div>
    );
};

export default Header;