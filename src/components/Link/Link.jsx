import React from 'react';

const Link = ({route}) => {
    return (
        <li className='hover:bg-purple-600  p-3 rounded text-white font-bold'>
            <a href={route.route}>{route.name}</a>
        </li>
    );
};

export default Link;