import React, {useState} from 'react';
import {fade, makeStyles} from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {AccountCircle} from "@material-ui/icons";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import ClearAllIcon from '@material-ui/icons/ClearAll';
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import ListSubheader from "@material-ui/core/ListSubheader";

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    list: {
        width: 300,
    },
    fullList: {
        width: 'auto',
    },
    sectionNav: {
        textAlign: 'center'
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

const NavBar = () => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null)
    const [state, setState] = useState({left: false});

    const open = Boolean(anchorEl);
    const sidebarPosition = 'left'
    const navbarNav = ['Криптовалюты', 'Биржи', 'Products', 'Инструменты', 'Learn']

    const toggleDrawer = (anchor = 'left', open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const list = () => (
        <div
            role="presentation"
        >
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Разделы
                    </ListSubheader>
                }
                className={classes.list}
            >
                <Divider/>
                {navbarNav.map((text) => (
                    <ListItem button key={text} onClick={toggleDrawer(sidebarPosition, false)}>
                        <ListItemIcon>
                            <ClearAllIcon/>
                        </ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div className="navbar">
            <AppBar position="static">
                <Toolbar>
                    <>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer(sidebarPosition, true)}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Drawer open={state[sidebarPosition]} onClose={toggleDrawer(sidebarPosition, false)}>
                            {list()}
                        </Drawer>
                    </>
                    <Typography className={classes.title} noWrap>
                        <img className="logoimg"
                             src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg?_=e73cacf"
                             alt="logo"/>
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase
                            placeholder="Search coin…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{'aria-label': 'search'}}
                        />
                    </div>

                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Log In</MenuItem>
                            <MenuItem onClick={handleClose}>Sign up</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;