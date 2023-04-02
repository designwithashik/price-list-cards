import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Dashboard = () => {
    const studentMarks = [
        {
          "id": 1,
          "name": "John",
          "english": 85,
          "maths": 76,
          "science": 92
        },
        {
          "id": 2,
          "name": "Sarah",
          "english": 92,
          "maths": 89,
          "science": 94
        },
        {
          "id": 3,
          "name": "Michael",
          "english": 78,
          "maths": 81,
          "science": 83
        },
        {
          "id": 4,
          "name": "Emily",
          "english": 91,
          "maths": 87,
          "science": 95
        },
        {
          "id": 5,
          "name": "David",
          "english": 75,
          "maths": 82,
          "science": 80
        },
        {
          "id": 6,
          "name": "Emma",
          "english": 94,
          "maths": 90,
          "science": 96
        },
        {
          "id": 7,
          "name": "Daniel",
          "english": 88,
          "maths": 85,
          "science": 89
        },
        {
          "id": 8,
          "name": "Sophia",
          "english": 95,
          "maths": 92,
          "science": 97
        },
        {
          "id": 9,
          "name": "Jacob",
          "english": 80,
          "maths": 84,
          "science": 79
        },
        {
          "id": 10,
          "name": "Olivia",
          "english": 93,
          "maths": 91,
          "science": 98
        }
      ];
      
    return (
        
        <div>
            <LineChart className='mx-auto'
                height={500} width={700} data={studentMarks}>
                <CartesianGrid strokeDasharray="2 2" />
                <Line type="monotone" dataKey='maths' stroke="#82ca9d"></Line>
                <Line dataKey='science' stroke="#42af"></Line>
                <Line dataKey='english' stroke='red' activeDot={{ r: 8 }}></Line>
                <XAxis dataKey='name' />
                <YAxis/>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Dashboard;