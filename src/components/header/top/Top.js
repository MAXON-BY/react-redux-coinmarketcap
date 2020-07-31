import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import * as axios from "axios";
import {URL} from "../../../helpers/constants/fetch";
import {useDispatch, useSelector} from "react-redux";
import {fetchInfoAction} from "../../../redux/actions/infoAction";

const Top = () => {

    const {info} = useSelector(state => state.info)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchInfo = async () => {
            const result = await axios(
                `${URL}/global`,
            );

            dispatch(fetchInfoAction(result.data.data));
        };

        fetchInfo();
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