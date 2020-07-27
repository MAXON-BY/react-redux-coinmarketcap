import React from 'react';
import Grid from "@material-ui/core/Grid";

const Top = () => {

    const topHeaderInfo = ['Криптовалюты', 'Рынки', 'Рыночная капитализация', 'Объем за 24ч', 'Доминирование BTC']

    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <ul className="top-info">
                    {topHeaderInfo.map(info => <li key={info}>{info}: <span>0</span></li>)}
                </ul>
            </Grid>
        </Grid>
    );
};

export default Top;