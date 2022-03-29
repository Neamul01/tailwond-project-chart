import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const data = [
        {
            name: 'Page A',
            price: 4000,
            pv: 2400,
            sales: 2400,
        },
        {
            name: 'Supplier B',
            price: 3000,
            pv: 1398,
            sales: 2210,
        },
        {
            name: 'Page C',
            price: 2000,
            pv: 9800,
            sales: 2290,
        },
        {
            name: 'Page D',
            price: 2780,
            pv: 3908,
            sales: 2000,
        },
        {
            name: 'Page E',
            price: 1890,
            pv: 4800,
            sales: 2181,
        },
        {
            name: 'Page F',
            price: 2390,
            pv: 3800,
            sales: 2500,
        },
        {
            name: 'Page G',
            price: 3490,
            pv: 4300,
            sales: 2100,
        },
    ];
    return (
        <div className='bg-gray-300 pl-16'>
            <LineChart width={1000} height={500} data={data}>
                <Line dataKey={'price'} stroke='green'></Line>
                <Line dataKey={'sales'} stroke='blue'></Line>
                <Tooltip />
                <Line dataKey={'pv'}></Line>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
            </LineChart>
        </div>
    );
};

export default MyLineChart;