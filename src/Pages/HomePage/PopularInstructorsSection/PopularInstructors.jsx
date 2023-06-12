import React, { useEffect, useState } from 'react';

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch('instructors.json')
      .then(res => res.json())
      .then(data => setInstructors(data))
  }, [])
  return (
    <div className='my-8'>
      <p className='text-5xl text-center font-bold  text-[#38ada9]  uppercase'>Popular Instructors</p>

    {
      instructors.map((instructor, index) =>   <article
      key={index}
      className="card lg:card-side bg-base-300  md:mx-48 shadow-xl mt-16">
      <img className='md:w-1/2' src={instructor.image} alt="Album" />
      <div className="card-body text-white bg-[#38ada9]">
        <h2 className="text-3xl font-semibold">{instructor.name}</h2>
        <h2 className="text-xl font-semibold">classes :{instructor.class}</h2>
        <p className='text-lg font-semibold'>Student: {instructor.students}</p>
      </div>
    </article>)
    }
    </div>
  );
};

export default PopularInstructors;