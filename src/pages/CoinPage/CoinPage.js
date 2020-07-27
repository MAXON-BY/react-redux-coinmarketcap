import React, {useState} from 'react';
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

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const coins = [
    {
        rank: 1,
        name: 'Bitcoin',
        capital: 13473652006867,
        price: 730522,
        summ: 1690308444729,
        total: 18443875,
        change: 2.77
    },
    {
        rank: 2,
        name: 'Bitcoin',
        capital: 13473652006867,
        price: 730522,
        summ: 1690308444729,
        total: 18443875,
        change: 2.77
    },
    {
        rank: 3,
        name: 'Bitcoin',
        capital: 13473652006867,
        price: 730522,
        summ: 1690308444729,
        total: 18443875,
        change: 2.77
    },
    {
        rank: 4,
        name: 'Bitcoin',
        capital: 13473652006867,
        price: 730522,
        summ: 1690308444729,
        total: 18443875,
        change: 2.77
    },
    {
        rank: 5,
        name: 'Bitcoin',
        capital: 13473652006867,
        price: 730522,
        summ: 1690308444729,
        total: 18443875,
        change: 2.77
    },
    {
        rank: 6,
        name: 'Bitcoin',
        capital: 13473652006867,
        price: 730522,
        summ: 1690308444729,
        total: 18443875,
        change: 2.77
    },
    {
        rank: 7,
        name: 'Bitcoin',
        capital: 13473652006867,
        price: 730522,
        summ: 1690308444729,
        total: 18443875,
        change: 2.77
    },
    {
        rank: 8,
        name: 'Bitcoin',
        capital: 13473652006867,
        price: 730522,
        summ: 1690308444729,
        total: 18443875,
        change: 2.77
    },
    {
        rank: 9,
        name: 'Bitcoin',
        capital: 13473652006867,
        price: 730522,
        summ: 1690308444729,
        total: 18443875,
        change: 2.77
    },
    {
        rank: 10,
        name: 'Bitcoin',
        capital: 13473652006867,
        price: 730522,
        summ: 1690308444729,
        total: 18443875,
        change: 2.77
    },
];

const CoinPage = () => {

    const [expand, setExpand] = useState(true);
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
                                    <TableCell align={"right"} onClick={handleClickExpand}>
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