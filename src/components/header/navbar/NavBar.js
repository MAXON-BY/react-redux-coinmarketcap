import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import BtnAccount from "../btnAccount/BtnAccount";
import SearchForm from "../searchForm/SearchForm";
import Sidebar from "../sidebar/Sidebar";
import LogoHeader from '../../../common/images/logo-header.svg'

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
                             src={LogoHeader}
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