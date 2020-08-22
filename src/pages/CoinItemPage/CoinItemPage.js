import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Container from "@material-ui/core/Container";
import {useDispatch, useSelector} from "react-redux";
import {congeckoGetCoinId} from "../../helpers/data/apiCoins";
import {getCoin} from "../../redux/reducers/coinReducer/coinReducer";
import _ from "lodash";
import Spinner from "../../components/spinner/Spinner";
import TableIdCoin from "../../components/tableIdCoin/TableIdCoin";
import BreadScrum from "../../components/breadScrum/BreadScrum";

const CoinItemPage = () => {

    const {id} = useParams();
    const dispatch = useDispatch()

    const {coins} = useSelector(state => state.coins)

    useEffect(() => {
        congeckoGetCoinId(id)
            .then(res => {
                dispatch(getCoin(res.data));
            })
            .catch(err => {
                throw new Error(err)
            })
    }, [dispatch]);

    return (
        <Container maxWidth="lg">
            <BreadScrum id={id}/>
            {_.isNil(coins) && <Spinner/>}
            {coins && <TableIdCoin coin={coins}/>}
        </Container>
    );
};

export default CoinItemPage;