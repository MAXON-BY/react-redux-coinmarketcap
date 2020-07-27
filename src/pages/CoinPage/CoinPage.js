import React from 'react';
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

function createData(rank, name, capital, price, summ, total, change) {
    return {rank, name, capital, price, summ, total, change};
}

const rows = [
    createData(1, 'Bitcoin', 13473652006867, 730522, 1690308444729, '18443875 BTC', '2.77%'),
    createData(2, 'Bitcoin', 13473652006867, 730522, 1690308444729, '18443875 BTC', '2.77%'),
    createData(3, 'Bitcoin', 13473652006867, 730522, 1690308444729, '18443875 BTC', '2.77%'),
    createData(4, 'Bitcoin', 13473652006867, 730522, 1690308444729, '18443875 BTC', '2.77%'),
    createData(5, 'Bitcoin', 13473652006867, 730522, 1690308444729, '18443875 BTC', '2.77%'),
    createData(6, 'Bitcoin', 13473652006867, 730522, 1690308444729, '18443875 BTC', '2.77%'),
    createData(7, 'Bitcoin', 13473652006867, 730522, 1690308444729, '18443875 BTC', '2.77%'),
    createData(8, 'Bitcoin', 13473652006867, 730522, 1690308444729, '18443875 BTC', '2.77%'),
    createData(9, 'Bitcoin', 13473652006867, 730522, 1690308444729, '18443875 BTC', '2.77%'),
    createData(10, 'Bitcoin', 13473652006867, 730522, 1690308444729, '18443875 BTC', '2.77%'),
    createData(11, 'Bitcoin', 13473652006867, 730522, 1690308444729, '18443875 BTC', '2.77%'),
    createData(12, 'Bitcoin', 13473652006867, 730522, 1690308444729, '18443875 BTC', '2.77%'),
    createData(13, 'Bitcoin', 13473652006867, 730522, 1690308444729, '18443875 BTC', '2.77%'),
    createData(14, 'Bitcoin', 13473652006867, 730522, 1690308444729, '18443875 BTC', '2.77%'),
    createData(15, 'Bitcoin', 13473652006867, 730522, 1690308444729, '18443875 BTC', '2.77%'),
    createData(16, 'Bitcoin', 13473652006867, 730522, 1690308444729, '18443875 BTC', '2.77%'),
    createData(17, 'Bitcoin', 13473652006867, 730522, 1690308444729, '18443875 BTC', '2.77%'),
    createData(18, 'Bitcoin', 13473652006867, 730522, 1690308444729, '18443875 BTC', '2.77%'),
    createData(19, 'Bitcoin', 13473652006867, 730522, 1690308444729, '18443875 BTC', '2.77%'),
    createData(20, 'Bitcoin', 13473652006867, 730522, 1690308444729, '18443875 BTC', '2.77%'),
];

const CoinPage = () => {

    const [expand, setExpand] = React.useState(true);

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
                                <TableCell onClick={handleClickExpand}>
                                    Rank
                                    <IconButton aria-label="expand row" size="small">
                                        {expand ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                    </IconButton>
                                </TableCell>
                                <TableCell align="right" onClick={handleClickExpand}>
                                    Наименование
                                    <IconButton aria-label="expand row" size="small">
                                        {expand ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                    </IconButton>
                                </TableCell>
                                <TableCell align="right" onClick={handleClickExpand}>
                                    Рыночная капитализация
                                    <IconButton aria-label="expand row" size="small">
                                        {expand ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                    </IconButton>
                                </TableCell>
                                <TableCell align="right" onClick={handleClickExpand}>
                                    Цена
                                    <IconButton aria-label="expand row" size="small">
                                        {expand ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                    </IconButton>
                                </TableCell>
                                <TableCell align="right" onClick={handleClickExpand}>
                                    Объем (за 24 часа)
                                    <IconButton aria-label="expand row" size="small">
                                        {expand ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                    </IconButton>
                                </TableCell>
                                <TableCell align="right" onClick={handleClickExpand}>
                                    Циркулирующее предложение
                                    <IconButton aria-label="expand row" size="small">
                                        {expand ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                    </IconButton>
                                </TableCell>
                                <TableCell align="right" onClick={handleClickExpand}>
                                    Изменение (за 24 часа)
                                    <IconButton aria-label="expand row" size="small">
                                        {expand ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.rank}
                                    </TableCell>
                                    <TableCell align="right">{row.name}</TableCell>
                                    <TableCell align="right">{row.capital}</TableCell>
                                    <TableCell align="right">{row.price}</TableCell>
                                    <TableCell align="right">{row.summ}</TableCell>
                                    <TableCell align="right">{row.total}</TableCell>
                                    <TableCell align="right">{row.change}</TableCell>
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