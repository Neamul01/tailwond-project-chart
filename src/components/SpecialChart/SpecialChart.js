import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const SpecialChart = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(res => {
                const loadedData = res.data.data;
                const phoneData = loadedData.map(phone => {
                    const parts = phone.slug.split('-');
                    const ph = {
                        name: parts[0],
                        value: Number(parts[1])
                    }
                    return ph;
                })
                setPhones(phoneData)
            })
    }, [])
    return (
        <BarChart width={1400} height={500} data={phones}>
            <Bar dataKey="value" fill="#8884d8" />
            <XAxis dataKey={'name'}></XAxis>
            <YAxis></YAxis>
            <Tooltip />
        </BarChart>
    );
};

export default SpecialChart;