import React from 'react';

const AddClasses = () => {
  return (
    <div className='w-full'>
       <h1 className='my-12 text-5xl font-semibold uppercase text-center '>
        add class
      </h1>
      <form  className="bg-[#26a09c] w-1/2 px-8 py-8 mb-5 mx-auto">
     
    <div className="mb-4">
      <label className="block mb-2 text-gray-700" htmlFor="className">
        Class name:
      </label>
      <input
        type="text"
        id="className"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        // value={className}
        // onChange={handleClassNameChange}
        required
      />
    </div>
    <div className="mb-4">
      <label className="block mb-2 text-gray-700" htmlFor="classImage">
        Class Image:
      </label>
      <input
        type="text"
        id="classImage"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        // value={classImage}
        // onChange={handleClassImageChange}
        required
      />
    </div>
    <div className="mb-4">
      <label className="block mb-2 text-gray-700" htmlFor="instructorName">
        Instructor name:
      </label>
      <input
        type="text"
        id="instructorName"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        // value={instructor.displayName}
        readOnly
      />
    </div>
    <div className="mb-4">
      <label className="block mb-2 text-gray-700" htmlFor="instructorEmail">
        Instructor email:
      </label>
      <input
        type="email"
        id="instructorEmail"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        // value={instructor.email}
        readOnly
      />
    </div>
    <div className="mb-4">
      <label className="block mb-2 text-gray-700" htmlFor="availableSeats">
        Available seats:
      </label>
      <input
        type="number"
        id="availableSeats"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        // value={availableSeats}
        // onChange={handleAvailableSeatsChange}
        required
      />
    </div>
    <div className="mb-4">
      <label className="block mb-2 text-gray-700" htmlFor="price">
        Price:
      </label>
      <input
        type="number"
        id="price"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        // value={price}
        // onChange={handlePriceChange}
        required
      />
    </div>
    <button
      type="submit"
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    >
      Add
    </button>
  </form>
    </div>
    
  );
};

export default AddClasses;