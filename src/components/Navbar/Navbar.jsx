import { BeakerIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react';
import Link from '../Link/Link';

const Navbar = ({ routes }) => {
    
    const [open, setOpen] = useState(false)
    return (
        <nav>
            <div onClick={() => setOpen(!open)} className='md:hidden bg-purple-400'>
                <span>{
                    open ?
                        <XMarkIcon className='h-6 w-6'></XMarkIcon>
: <Bars3Icon className='h-6 w-6'></Bars3Icon>}</span>
                
            </div>
            <ul className={`md:flex gap-7 absolute md:static duration-500 top bg-purple-400 px-8 py-4 ${open? 'top-6':'-top-80'}`}>
            {routes.map((route, index) => {
                return (
                    <Link key={index} route={route}></Link>
                )
            })}
         </ul>
        </nav>

    );
};

export default Navbar;