import React from 'react';
import useAxiousSecure from '../../../../Hooks/useAxiousSecure';
import { useQuery } from '@tanstack/react-query';

const AllClasses = () => {

  // const [axiosSecure] = useAxiousSecure();
  // const { data: classes = [], refetch } = useQuery(['classes'], async () => {
  //   const res = await axiosSecure.get('/classes')
  //   console.log(res);
  //   return res.data;
  // })

  // const handleSelect = () => {
  //   if (!isLoggedIn) {
  //     alert('Please log in before selecting the course.');
  //     return;
  //   }
  //   // Handle the selection logic here
  // };


  return (
    <div className='pt-24 text-5xl font-bold uppercase text-center text-[#329b97]'>
      <p>All Classes</p>

      <div>
        {
          classes.map((classe, index) => <p key={index}>hellow</p>)
        }
      </div>

      <div className="max-w-xs rounded overflow-hidden shadow-lg bg-gradient-to-r from-purple-500 to-indigo-500">
      <img className="w-full" src="image-url.jpg" alt="Card" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">Card Title</div>
        <p className="text-white text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Tag 1</span>
        <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Tag 2</span>
        <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Tag 3</span>
      </div>
    </div>

    {/* <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src="image-url.jpg" alt="Card" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Card Title</div>
        <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Tag 1</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Tag 2</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Tag 3</span>
      </div>
    </div> */}

<div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src="image-url.jpg" alt="Card" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Card Title</div>
        <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Tag 1</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Tag 2</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Tag 3</span>
      </div>
    </div>

    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src='' alt="Card" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">name</div>
        <p className="text-gray-700 text-base">Instructor: instructorName</p>
        <p className="text-gray-700 text-base">Available Seats: availableSeats</p>
        <p className="text-gray-700 text-base">Price: rice</p>
      </div>
    </div>


    </div>
  );
};

export default AllClasses;