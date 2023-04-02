import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const PhoneBar = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        // fetch(' https://openapi.programming-hero.com/api/phones?search=iphone')
        //     .then(res => res.json())
        // .then(data=>setPhones(data))
        axios.get(' https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                console.log(data)
                const loadData = data.data.data;
                const phoneData = loadData.map(phone => 
                {
                    const parts = phone.slug.split('-');
                    const price = parseInt(parts[1]);
                    const phoneInfo = {
                        name: phone.phone_name,
                        price: price
                    }
                    return (
                        phoneInfo
                    )
                })
                setPhones(phoneData)
        })
    },[])
    return (
        <div>
            <BarChart data={phones} width={800} height={500}>
                <Bar dataKey='price' fill='yellow'></Bar>
                <XAxis dataKey='name'></XAxis>
                <YAxis />
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default PhoneBar;