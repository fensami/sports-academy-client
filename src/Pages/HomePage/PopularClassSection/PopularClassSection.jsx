import React, { useEffect, useState } from 'react';

const PopularClassSection = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch('classes.json')
      .then(res => res.json())
      .then(data => setClasses(data))
  }, [])
  return (
    <div className='my-8'>
      <p className='text-5xl text-center font-bold  text-[#38ada9]  uppercase '>Popular Classes</p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-12'>
      {
          classes.map((classe, index) => <article key={index} className='flex flex-col shadow-xl border-2 rounded p-5'>
            <img className='rounded-md h-full' src={classe.image} alt="" />
            <p className='text-2xl my-3 font-semibold'>{classe.name}</p>
            <p className='text-lg font-semibold'>Students: {classe.students}</p>
          </article>)
        }
      </div>
    </div>
  );
};

export default PopularClassSection;