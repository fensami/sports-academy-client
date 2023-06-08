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


      {/* <article className="card lg:card-side bg-base-300  md:mx-48 shadow-xl mt-16">
        <img className='md:w-1/2' src="https://media.istockphoto.com/id/1271284931/photo/portrait-of-male-footballer-coaching-mixed-age-players.jpg?s=612x612&w=0&k=20&c=ToMayM4rQgfvhCjeNHutJWbUt9yW5kEHRl5yOu7ZJog=" alt="Album" />
        <div className="card-body text-white bg-[#38ada9]">
          <h2 className="text-3xl font-semibold">Shaik Abdulla</h2>
          <h2 className="text-xl font-semibold">classes :  Football</h2>
          <p className='text-lg font-semibold'>Student: 150</p>
        </div>
      </article>
      <article className="card lg:card-side bg-base-300  md:mx-48 shadow-xl mt-16">
        <img className='md:w-1/2' src="https://www.shutterstock.com/image-photo/portrait-positive-male-tennis-player-260nw-1862288572.jpg" alt="Album" />
        <div className="card-body text-white bg-[#38ada9]">
          <h2 className="text-3xl font-semibold">Rokibul Munna</h2>
          <h2 className="text-xl font-semibold">classes :  Tennis</h2>
          <p className='text-lg font-semibold'>Student: 50</p>
        </div>
      </article>
      <article className="card lg:card-side bg-base-300  md:mx-48 shadow-xl mt-16">
        <img className='md:w-1/2' src="https://live-production.wcms.abc-cdn.net.au/0ab6c946d884f3215b3e76baa2c2ed3f?impolicy=wcms_crop_resize&cropH=1949&cropW=3464&xPos=0&yPos=181&width=862&height=485" alt="Album" />
        <div className="card-body text-white bg-[#38ada9]">
          <h2 className="text-3xl font-semibold">Monirul Islam</h2>
          <h2 className="text-xl font-semibold">classes :  Swimming</h2>
          <p className='text-lg font-semibold'>Student: 80</p>
        </div>
      </article>
      <article className="card lg:card-side bg-base-300  md:mx-48 shadow-xl mt-16">
        <img className='md:w-1/2' src="https://northvillemartialarts.com/wp-content/uploads/2021/11/renalto.jpeg" alt="Album" />
        <div className="card-body text-white bg-[#38ada9]">
          <h2 className="text-3xl font-semibold">Akhtaru_Zaman</h2>
          <h2 className="text-xl font-semibold">classes :  Martial Arts</h2>
          <p className='text-lg font-semibold'>Student: 40</p>
        </div>
      </article>
      <article className="card lg:card-side bg-base-300  md:mx-48 shadow-xl mt-16">
        <img className='md:w-1/2' src="https://www.nnsl.com/wp-content/uploads/2019/05/2207gym81-e1574384673853.jpg" alt="Album" />
        <div className="card-body text-white bg-[#38ada9]">
          <h2 className="text-3xl font-semibold">Samiul</h2>
          <h2 className="text-xl font-semibold">classes :  Gymnastics</h2>
          <p className='text-lg font-semibold'>Student: 70</p>
        </div>
      </article> */}

      
    
    </div>
  );
};

export default PopularInstructors;