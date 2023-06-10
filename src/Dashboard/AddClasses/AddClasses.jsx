import React from 'react';

const AddClasses = () => {
  return (
    <div className='w-full'>
       <h1 className='my-12 text-5xl text-[#26a09c] font-bold uppercase text-center '>
        add class
      </h1>
      <form  className="bg-[#26a09c] w-1/2 px-8 py-8 mb-5 mx-auto rounded-lg">
     
    <div className="mb-4">
      <label className="block mb-2 text-white font-semibold" htmlFor="className">
        Class name:
      </label>
      <input type="text"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"/>
    </div>

    <div className="mb-4">
      <label className="block mb-2 text-white font-semibold" htmlFor="classImage">
        Class Image:
      </label>
      <input type="text"
        
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"/>
    </div>
    <div className="mb-4">
      <label className="block mb-2 text-white font-semibold" htmlFor="instructorName">
        Instructor name:
      </label>
      <input
        type="text"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
    </div>

    <div className="mb-4">
      <label className="block mb-2 text-white font-semibold" htmlFor="instructorEmail">
        Instructor email:
      </label>
      <input type="email"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"/>
    </div>


    <div className="mb-4">
      <label className="block mb-2 text-white font-semibold" htmlFor="availableSeats">
        Available seats:
      </label>
      <input
        type="number"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"/>
    </div>


    <div className="mb-4">
      <label className="block mb-2 text-white  font-semibold" htmlFor="price">
        Price:
      </label>
      <input
        type="number"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"/>
    </div>

<input type="submit"  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-blue-600 text-center mx-auto" value="Add Class" />
    {/* <input
      type=""
     
    /> */}
  </form>
    </div>
    
  );
};

export default AddClasses;