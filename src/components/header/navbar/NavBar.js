import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import BtnAccount from "./btnAccount/BtnAccount";
import SearchForm from "./searchForm/SearchForm";
import Sidebar from "./sidebar/Sidebar";
import Logo from "./logo/Logo";

const NavBar = () => {
    return (
        <div className="navbar">
            <AppBar position="static">
                <Toolbar>
                    <Sidebar/>
                    <Logo/>
                    <SearchForm/>
                    <BtnAccount/>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;
