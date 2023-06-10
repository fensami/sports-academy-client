import React from 'react';
import { useForm } from 'react-hook-form';

const AddClasses = () => {
  const { register, handleSubmit, formState: { errors } , reset} = useForm();
  const onSubmit = (data) => {
    fetch('http://localhost:5000/classes', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      reset()
    })
    .catch(err => {console.log(err);})
  
    // console.log(data);
  };

  return (
    <div className="w-full">
      <h1 className="my-12 text-5xl text-[#26a09c] font-bold uppercase text-center">
        Add Class
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#26a09c] w-1/2 px-8 py-8 mb-5 mx-auto rounded-lg"
      >
        <div className="mb-4">
          <label className="block mb-2 text-white font-semibold">Class name:</label>
          <input
            type="text"
            {...register('className', { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {errors.className && (
            <p className="text-red-500">This field is required</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-white font-semibold">Class Image:</label>
          <input
            type="text"
            {...register('classImage', { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {errors.classImage && (
            <p className="text-red-500">This field is required</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-white font-semibold">Instructor name:</label>
          <input
            type="text"
            {...register('instructorName', { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {errors.instructorName && (
            <p className="text-red-500">This field is required</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-white font-semibold">Instructor email:</label>
          <input
            type="email"
            {...register('instructorEmail', { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {errors.instructorEmail && (
            <p className="text-red-500">This field is required</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-white font-semibold">Available seats:</label>
          <input
            type="number"
            {...register('seats', { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {errors.seats && (
            <p className="text-red-500">This field is required</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-white font-semibold">Price:</label>
          <input
            type="number"
            {...register('price', { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {errors.price && (
            <p className="text-red-500">This field is required</p>
          )}
        </div>

        <input
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-blue-600 text-center mx-auto"
          value="Add Class"
        />
      </form>
    </div>
  );
};

export default AddClasses;
