import React, {useState} from 'react';
import {Line} from "react-chartjs-2";

const GraphicInfo = ({sparkline_7d}) => {

    const[options] = useState({
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: '167 Hours in 7 days',
                    fontSize: 10
                },
                responsive: true
            }],
            yAxes: [
                {
                    ticks: {
                        beginAtZero: false
                    }
                }
            ]
        }
    })

    const total_in_hours = sparkline_7d ? sparkline_7d.map((item,index) => index.toString()) : 0;
    const total_last_7d = sparkline_7d ? sparkline_7d.map(item => item.toFixed(4)) : 0;

    return (

            <div className={'current-coin-graphic-info'}>
                <h3>Chart Line</h3>
                <Line
                    options={options}
                    data={{
                        labels: total_in_hours,
                        datasets: [{
                            label: '$',
                            data: total_last_7d,
                            fill: 'none',
                            backgroundColor: 'blue',
                            pointRadius: 2,
                            borderColor: '#70CAD1',
                            borderWidth: 1,
                            lineTension: 0
                        }]
                    }}
                />
            </div>
        );
    }

export default GraphicInfo;