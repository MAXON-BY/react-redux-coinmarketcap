import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import {useDispatch, useSelector} from "react-redux";
import {fetchInfoAction} from "../../../redux/actions/infoAction";
import {congeckoGetGlobalInfo} from "../../../helpers/data/apiCoins";

const Top = () => {

    const {info} = useSelector(state => state.info)
    const dispatch = useDispatch()

    useEffect(() => {
        congeckoGetGlobalInfo()
            .then(res => {
                dispatch(fetchInfoAction(res.data.data));
            })
            .catch(err => {
                new Error(err)
            })
    }, [dispatch]);

    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <ul className="top-info">
                    <li>Монеты: <span>{info.active_cryptocurrencies}</span></li>
                    <li>Биржевые площадки: <span>{info.markets}</span></li>
                </ul>
            </Grid>
        </Grid>
    );
};

export default Top;
