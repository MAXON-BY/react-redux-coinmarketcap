import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import BtnAccount from "../btnAccount/BtnAccount";
import SearchForm from "../searchForm/SearchForm";
import Sidebar from "../sidebar/Sidebar";

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    }
}));

const NavBar = () => {
    const classes = useStyles();

    return (
        <div className="navbar">
            <AppBar position="static">
                <Toolbar>

                    <Sidebar/>

                    <Typography className={classes.title} noWrap>
                        <img className="logoimg"
                             src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg?_=e73cacf"
                             alt="logo"/>
                    </Typography>

                    <SearchForm/>

                    <BtnAccount/>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;