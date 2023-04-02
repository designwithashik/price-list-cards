import React, { useEffect, useState } from 'react';
import PlanCard from '../PlanCard/PlanCard';

const PriceList = () => {

    const [plans, setPlans] = useState([]);
    useEffect(() => {
        fetch('prices.json')
            .then(res => res.json())
        .then(data=>setPlans(data))
    },[])
    return (
        <div>
            <h2 className='text-5xl text-purple-800 text-center py-5'>Awesome Affordable Prices</h2>
            <div className='grid md:grid-cols-3 gap-3 m-14'>
                {plans.map((plan) => {
                    return (
                        <PlanCard key={plan.id} plan={plan}></PlanCard>
                    )
            })}
            </div>
        </div>
    );
};

export default PriceList;