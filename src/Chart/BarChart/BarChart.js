import React from 'react';
import { Bar } from 'react-chartjs-2';
import "./BarChart.css";

const BarChart = ({ labels, dataInput, lableName }) => {
    const dataset = {
        labels: labels,
        datasets: [{
            axis: 'y',
            label: lableName,
            data: dataInput,
            fill: false,
            backgroundColor: [
                'rgba(222, 70, 135, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 144, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 88, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 144)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
    };

    return (
        <Bar
            data={dataset}
            options={
                {
                    indexAxis: 'y',
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }
            }
        />
    );
};

export default BarChart;