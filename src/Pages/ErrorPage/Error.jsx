import React from 'react';
import img from '../../assets/image/404page.jpg'
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='w-1/2 mx-auto mt-24'>
      <img src={img} alt="" />
      < Link to='/' className='absolute   bottom-20 text-3xl font-bold left-96'>GO BACK TO HOME</Link>
    </div>
  );
};

export default Error;