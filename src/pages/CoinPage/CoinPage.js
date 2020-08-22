import React, {useEffect} from 'react';
import Container from "@material-ui/core/Container";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";

import {useDispatch, useSelector} from "react-redux";
import TablePag from "../../components/tablePag/TablePag";
import {congeckoGetCoins} from "../../helpers/data/apiCoins";
import Spinner from "../../components/spinner/Spinner";
import {getCoin} from "../../redux/reducers/coinReducer/coinReducer";
import _ from 'lodash'
import TableHeader from "../../components/tableHeader/TableHeader";
import TableContent from "../../components/tableContent/TableContent";

const tableCoin = [
    'Rank',
    'Наименование',
    'Рыночная капитализация',
    'Цена',
    'Циркулирующее предложение',
    'Изменение (за 24 часа)'
]

const CoinPage = () => {

    const {coins} = useSelector(state => state.coins)
    const dispatch = useDispatch()

    useEffect(() => {
        congeckoGetCoins()
            .then(res => {
                dispatch(getCoin(res.data));
            })
            .catch(err => {
                throw new Error(err)
            })
    }, [dispatch]);

    return (
        <Container maxWidth="lg">
            <div>
                <h1>Криптовалюты по рыночной капитализации</h1>
            </div>

            <div className="coin-block-wrap">
                <TableContainer component={Paper}>
                    <Table className="tableCoin" aria-label="coins table">
                        <TableHeader tableCoin={tableCoin}/>
                        <TableContent coins={coins}/>
                    </Table>
                    {_.isNil(coins) && <Spinner/>}
                </TableContainer>
                <TablePag/>
            </div>
        </Container>

    );
};

export default CoinPage;
