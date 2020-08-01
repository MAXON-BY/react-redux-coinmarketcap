import React, {useEffect, useState} from 'react';
import Container from "@material-ui/core/Container";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import IconButton from "@material-ui/core/IconButton";

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {useDispatch, useSelector} from "react-redux";
import {fetchCoinAction} from "../../redux/actions/coinAction";
import TablePag from "../../components/tablePag/TablePag";
import {congeckoGetCoins} from "../../helpers/data/apiCoins";
import Spinner from "../../components/spinner/Spinner";

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
    const {isLoading} = useSelector(state => state.coins)

    const dispatch = useDispatch()

    const [expand, setExpand] = useState(true);

    useEffect(() => {
        congeckoGetCoins()
            .then(res => {
                dispatch(fetchCoinAction(res.data));
            })
            .catch(err => {
                console.log(err)
            })
    }, [dispatch]);

    const handleClickExpand = () => {
        setExpand(!expand)
        console.log('сортировка таблицы', expand)
    };

    return (
        <Container maxWidth="lg">
            <div>
                <h1>Криптовалюты по рыночной капитализации</h1>
            </div>

            <div className="coin-block-wrap">
                <TableContainer component={Paper}>
                    <Table className="tableCoin" aria-label="coins table">
                        <TableHead>
                            <TableRow>
                                {tableCoin.map(table => (
                                    <TableCell key={table} align={"right"} onClick={handleClickExpand}>
                                        {table}
                                        <IconButton aria-label="expand row" size="small">
                                            {expand ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                                        </IconButton>
                                    </TableCell>
                                ))}

                            </TableRow>
                        </TableHead>

                        <TableBody>

                            {coins.map((
                                {
                                    id,
                                    name,
                                    image,
                                    market_cap_rank,
                                    market_cap,
                                    current_price,
                                    circulating_supply,
                                    price_change_percentage_24h
                                }
                            ) => (
                                <TableRow key={id}>
                                    <TableCell align="center" component="th" scope="row">{market_cap_rank}</TableCell>
                                    <TableCell align="right">
                                        <div className="tableCoinWrap">
                                            <img className="coinLogo" src={image} alt={id}/>
                                            {name}
                                        </div>
                                    </TableCell>
                                    <TableCell align="right">{market_cap}</TableCell>
                                    <TableCell align="right">{current_price}</TableCell>
                                    <TableCell align="right">{circulating_supply}</TableCell>
                                    <TableCell align="right">{price_change_percentage_24h}%</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    {isLoading && <Spinner/>}
                </TableContainer>
                <TablePag/>
            </div>
        </Container>

    );
};

export default CoinPage;