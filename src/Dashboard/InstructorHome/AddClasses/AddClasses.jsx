import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';

const AddClasses = () => {
  const { user } = useAuth();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    const classData = { ...data, status: 'pending' };
    fetch('https://sports-academy-server-kappa.vercel.app/classes', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(classData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        reset();
        if(data.insertedId){
          
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Class added Successfully',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
      .catch(err => {
        console.log(err);
      });
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
            <p className="text-red-500">Class Name is required</p>
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
            <p className="text-red-500">image is required</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-white font-semibold">Instructor name:</label>
          <input
          {...register('instructorName', { required: true })}
            type="text"
            value={user.displayName}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-white font-semibold">Instructor email:</label>
          <input
          {...register('instructorEmail', { required: true })}
            type="email"
            value={user.email}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-white font-semibold">Available seats:</label>
          <input
            type="number"
            {...register('seats', { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {errors.seats && (
            <p className="text-red-500">Seats required</p>
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
            <p className="text-red-500">Price is required</p>
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
