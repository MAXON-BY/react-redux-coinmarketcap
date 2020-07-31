import React, {useState} from 'react';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import ListItemText from "@material-ui/core/ListItemText";
import {Link} from "react-router-dom";
import {EXCHANGE_PAGE, HOME_PAGE, LEARN_PAGE, PRODUCTS_PAGE, TOOLS_PAGE} from "../../../helpers/constants/routes";

const sidebarPosition = 'left'

export const navbarNav = [
    {name:'Криптовалюты', link: HOME_PAGE},
    {name:'Биржи', link: EXCHANGE_PAGE},
    {name:'Products', link: PRODUCTS_PAGE},
    {name:'Инструменты', link: TOOLS_PAGE},
    {name:'Learn', link: LEARN_PAGE},
]

const Sidebar = () => {

    const [state, setState] = useState({left: false});

    const toggleDrawer = (anchor = 'left', open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const list = () => (
        <div role="presentation">
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Разделы
                    </ListSubheader>
                }
                className="makeStyles-list"
            >
                <Divider/>
                {navbarNav.map(({name, link}) => (
                    <ListItem button key={name} onClick={toggleDrawer(sidebarPosition, false)}>
                        <ListItemIcon>
                            <ClearAllIcon/>
                        </ListItemIcon>
                        <Link to={link}>
                            <ListItemText primary={name}/>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </div>
    )

    return (
        <div className="menuButton">
            <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer(sidebarPosition, true)}
            >
                <MenuIcon/>
            </IconButton>
            <Drawer open={state[sidebarPosition]} onClose={toggleDrawer(sidebarPosition, false)}>
                {list()}
            </Drawer>
        </div>
    );
};

export default Sidebar;