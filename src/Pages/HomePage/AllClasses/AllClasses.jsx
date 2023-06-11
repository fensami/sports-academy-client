import React from 'react';
import useAxiousSecure from '../../../Hooks/useAxiousSecure';
import { useQuery } from '@tanstack/react-query';

const AllClasses = () => {

  const [axiosSecure] = useAxiousSecure();
  const { data: classes = [], refetch } = useQuery(['classes'], async () => {
    const res = await axiosSecure.get('/classes')
    console.log(res);
    return res.data;
  })


  const approvedClasses = classes.filter(classe => classe.status === 'approved');



  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>
      {
        approvedClasses.map((approvedClass, index) => <div key={index} className="card md:w-96 mt-24 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={approvedClass.classImage} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>)
      }
    </div>
  );
};

export default AllClasses;