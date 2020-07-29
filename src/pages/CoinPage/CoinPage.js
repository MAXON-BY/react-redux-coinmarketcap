import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
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
import {useSelector} from "react-redux";
import * as axios from "axios";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const URL = "https://api.coingecko.com/api/v3";
export const MONEY = "usd";
export const SORT = "market_cap_desc";

const CoinPage = () => {


    const {coins} = useSelector(state => state.coins)

    const [expand, setExpand] = useState(true);

    useEffect(async () => {
        const result = await axios(
            `${URL}/coins/markets?vs_currency=${MONEY}&order=${SORT}&per_page=30&page=1&sparkline=true&price_change_percentage=1h`,
        );

        setExpand(result.data);
        console.log('data', result.data)
    });

    const tableCoin = [
        'Rank',
        'Наименование',
        'Рыночная капитализация',
        'Цена',
        'Объем (за 24 часа)',
        'Циркулирующее предложение',
        'Изменение (за 24 часа)'
    ]

    const handleClickExpand = () => {
        setExpand(!expand)
        console.log('сортировка таблицы', expand)
    };

    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            <div>
                <h1>Криптовалюты по рыночной капитализации</h1>
            </div>

            <div className="coin-block-wrap">
                <div className="coin-block-nav">

                </div>

                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                {tableCoin.map(coin => (
                                    <TableCell key={coin} align={"right"} onClick={handleClickExpand}>
                                        {coin}
                                        <IconButton aria-label="expand row" size="small">
                                            {expand ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                                        </IconButton>
                                    </TableCell>
                                ))}

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {coins.map(({rank, name, capital, price, summ, total, change}) => (
                                <TableRow key={rank}>
                                    <TableCell component="th" scope="row">{rank}</TableCell>
                                    <TableCell align="right">{name}</TableCell>
                                    <TableCell align="right">{capital}</TableCell>
                                    <TableCell align="right">{price}</TableCell>
                                    <TableCell align="right">{summ}</TableCell>
                                    <TableCell align="right">{total}</TableCell>
                                    <TableCell align="right">{change}%</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </Container>

    );
};

export default CoinPage;