import React from 'react';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import NumberFormat from "react-number-format";
import TableBody from "@material-ui/core/TableBody";
import {Link} from "react-router-dom";

const TableContent = ({coins}) => {
    return (
        <TableBody>

            {coins?.map((
                {
                    id,
                    name,
                    image,
                    market_cap_rank,
                    market_cap,
                    symbol,
                    current_price,
                    circulating_supply,
                    price_change_percentage_24h
                }
            ) => (
                <TableRow key={id}>
                    <TableCell align="center" component="th" scope="row">{market_cap_rank}</TableCell>
                    <TableCell align="right">
                        <Link to={`/coin/${id}`}>
                            <div className="tableCoinWrap">
                                <img className="coinLogo" src={image} alt={id}/>
                                {name}
                            </div>
                        </Link>
                    </TableCell>
                    <TableCell align="right">
                        <NumberFormat
                            value={market_cap}
                            thousandSeparator={true}
                            displayType={'text'}
                            suffix={' $'}
                        />
                    </TableCell>
                    <TableCell align="right">
                        <NumberFormat
                            value={current_price}
                            thousandSeparator={true}
                            displayType={'text'}
                            suffix={' $'}
                        />
                    </TableCell>
                    <TableCell align="right">
                        <NumberFormat
                            value={circulating_supply}
                            thousandSeparator={true}
                            displayType={'text'}
                        />
                        <span className="coinSymbol">{symbol}</span>
                    </TableCell>
                    <TableCell
                        align="right"
                        className={price_change_percentage_24h > 0 ? "textGreen" : "textDanger"}
                    >
                        {(price_change_percentage_24h).toFixed(1)}%
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};

export default TableContent;