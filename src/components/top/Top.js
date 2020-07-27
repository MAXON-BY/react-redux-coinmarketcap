import React from 'react';
import Grid from "@material-ui/core/Grid";
import './Top.css'

const Top = () => {
    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <ul className="top-info">
                    <li>Криптовалюты: <span>5 784</span></li>
                    <li>Рынки: <span>23 740</span></li>
                    <li>Рыночная капитализация: <span>₽21 454 600 213 143</span></li>
                    <li>Объем за 24ч: <span>₽6 197 265 316 803</span></li>
                    <li>Доминирование BTC: <span>61,3%</span></li>
                </ul>
            </Grid>
        </Grid>
    );
};

export default Top;