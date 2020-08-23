import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Container from "@material-ui/core/Container";
import {useDispatch, useSelector} from "react-redux";
import {congeckoGetCoinId} from "../../helpers/data/apiCoins";
import _ from "lodash";
import Spinner from "../../components/spinner/Spinner";
import TableIdCoin from "../../components/tableIdCoin/TableIdCoin";
import BreadScrum from "../../components/breadScrum/BreadScrum";
import {getCoinIdAction} from "../../redux/actions/getCoinId";

const CoinItemPage = () => {

    const {id} = useParams();
    const dispatch = useDispatch()

    const {coin} = useSelector(state => state.coin)

    useEffect(() => {
        congeckoGetCoinId(id)
            .then(res => {
                dispatch(getCoinIdAction(res.data));
            })
            .catch(err => {
                throw new Error(err)
            })
    }, [dispatch]);

    return (
        <Container maxWidth="lg">
            <BreadScrum id={id}/>
            {_.isNil(coin) && <Spinner/>}
            {coin && <TableIdCoin coin={coin}/>}
        </Container>
    );
};

export default CoinItemPage;