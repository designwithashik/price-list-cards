import React from 'react';
import Navbar from './components/Navbar/Navbar';
import PriceList from './components/PriceList/PriceList';
import Dashboard from './components/Dashboard/Dashboard';
import PhoneBar from './components/PhoneBar/PhoneBar';

const App = () => {

  const routes = [
    {id: 1, name: 'Home', path: '/'},
    {id: 2, name: 'About', path: '/about'},
    {id: 3, name: 'Contact', path: '/contact'},
    {id: 4, name: 'Products', path: '/products'},
    {id: 5, name: 'Blog', path: '/blog'}
  ];
  
  return (
    <div >
      <Navbar routes={routes} />

      <h1 className='text-5xl text-center'>Hello <span className='font-bold text-purple-600'>Tail</span>. Give Some <span className='text-red-300 '>Wind</span></h1>
      <PriceList></PriceList>
      <Dashboard />
      <PhoneBar/>
    </div>
  );
};

export default App;