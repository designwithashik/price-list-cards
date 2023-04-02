import { list } from 'postcss';
import React from 'react';
import Feature from '../Feature/Feature';

const PlanCard = ({ plan }) => {
    const {name, price,features} =plan
    return (
        <div className='p-5 border-4 border-purple-500 rounded-lg flex flex-col'>
            <h2 className='font-bold text-4xl text-center py-3'>{name}</h2>
            <p className='text-center'><span className='text-purple-500 text-3xl font-bold'>{price}</span>/month</p>
            <p className='text-xl my-4'>Features:</p>
            <ol>
                {features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)}
            </ol>
            <button className='bg-purple-700 text-white font-bold p-3 rounded-md mt-auto hover:bg-green-500'>Buy Now</button>
        </div>
    );
};

export default PlanCard;