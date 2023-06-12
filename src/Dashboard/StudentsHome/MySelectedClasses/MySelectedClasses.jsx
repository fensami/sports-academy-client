import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiousSecure from '../../../Hooks/useAxiousSecure';
import { useAuth } from '../../../Hooks/useAuth';

const MySelectedClasses = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiousSecure();


  const { data: myaddedclasses = [] } = useQuery({
    queryKey: ['/myaddedclasses', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/myaddedclasses?email=${user?.email}`)
      console.log('res from axios', res)
      return res.data;
    },
  })

  const total = myaddedclasses.reduce((sum, item) => item.price + sum, 0);



  return (
    <div >

      <p className='text-5xl font-bold uppercase text-[#38ada9] text-center my-12'>My selected classes</p>
      <div className='rounded-lg'>
        <p>total {total}</p>
        {
          myaddedclasses.map((myaddedclasse, index) => <div key={index} className="card card-side bg-base-100 shadow-xl grid grid-cols-1 mx-5 mt-24 md:grid-cols-2">
            <figure><img src={myaddedclasse.classImage} alt="Movie" /></figure>
            <div className="card-body bg-[#38ada9] text-white">
              <h2 className="card-title">{myaddedclasse.className}</h2>
              <p className='font-semibold'>Instructor Name : <span className='text-xl font-bold uppercase'>{myaddedclasse.instructorName}</span></p>
              <p className='font-bold'>$ {myaddedclasse.price}</p>
              <div className="card-actions justify-end">
                <button className="btn text-white font-bold bg-[#207572] hover:bg-[#38e480] hover:text-black">Pay</button>
                <button className="btn text-white font-bold bg-[#207572]  hover:bg-[#38e480] hover:text-black">Delete</button>
              </div>
            </div>
          </div>)
        }
      </div>


    </div>
  );
};

export default MySelectedClasses;