import React from 'react';
import NumberFormat from "react-number-format";
import GraphicInfo from "../graphicInfo/GraphicInfo";

const TableIdCoin = ({coin}) => {
    return (
        <div>
            <div className="current-coin">
                <img src={coin.image.thumb} alt=""/>
                <h1>{coin.name}</h1>
                <span>{coin.market_data.current_price.usd} $</span>
            </div>

            <hr/>

            <div className="current-coin-info-wrap">
                <div className="current-coin-graphic">
                    <GraphicInfo sparkline_7d={coin.sparkline_7d}/>
                </div>

                <div className="current-coin-info">
                    <h4>QUICK STATS</h4>
                    <table>
                        <tbody>
                        <tr>
                            <th><strong>Price</strong></th>
                            <td>
                                <NumberFormat
                                    thousandSeparator={true}
                                    suffix={' $'}
                                    displayType={'text'}
                                    value={coin.market_data.current_price.usd}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th><strong>Market Cap</strong></th>
                            <td>
                                <NumberFormat
                                    thousandSeparator={true}
                                    suffix={' $'}
                                    displayType={'text'}
                                    value={coin.market_data.market_cap.usd}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th><strong>Trading Volume</strong></th>
                            <td>
                                <NumberFormat
                                    thousandSeparator={true}
                                    suffix={' $'}
                                    displayType={'text'}
                                    value={coin.market_data.total_volume.usd}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th><strong>Volume / Market Cap</strong></th>
                            <td>{coin.market_data.price_change_percentage_1h_in_currency.usd}</td>
                        </tr>
                        <tr>
                            <th>
                                <p><strong>24h Low</strong></p>
                                <p><strong>24h High</strong></p>
                            </th>
                            <td>
                                <p>
                                    <NumberFormat
                                        thousandSeparator={true}
                                        suffix={' $'}
                                        displayType={'text'}
                                        value={coin.market_data.low_24h.usd}
                                    />
                                </p>
                                <p>
                                    <NumberFormat
                                        thousandSeparator={true}
                                        suffix={' $'}
                                        displayType={'text'}
                                        value={coin.market_data.high_24h.usd}
                                    />
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th><strong>All-Time High</strong></th>
                            <td>
                                <p>
                                    <NumberFormat
                                        thousandSeparator={true}
                                        suffix={' $'}
                                        displayType={'text'}
                                        value={coin.market_data.ath.usd}
                                    />
                                </p>
                                <p>
                                        <span
                                            className={coin.market_data.ath_change_percentage.usd > 0 ? "text-green" : "text-danger"}>
                                            {coin.market_data.ath_change_percentage.usd
                                                ? (coin.market_data.ath_change_percentage.usd).toFixed(1)
                                                : '?'}%
                                        </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th><strong>Rank Market Cap</strong></th>
                            <td>#{coin.market_data.market_cap_rank}</td>
                        </tr>
                        <tr>
                            <th><strong>Circulating supply</strong></th>
                            <td>
                                <NumberFormat
                                    thousandSeparator={true}
                                    suffix={' coins'}
                                    displayType={'text'}
                                    value={coin.market_data.circulating_supply}
                                />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TableIdCoin;