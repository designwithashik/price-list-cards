import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'
const Feature = ({feature}) => {
    return (
        <li className='flex items-center gap-3'>
            <CheckCircleIcon className='w-6 h-6 text-purple-500'/>{feature}
        </li>
    );
};

export default Feature;