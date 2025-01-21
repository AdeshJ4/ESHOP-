import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Category from './components/Category';
import Services from './components/Services/Services';


function App () {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-500 overflow-hidden'>
      <Navbar />
      <Hero />
      <Category />
      <Services />
    </div>
  )

}


export default App;