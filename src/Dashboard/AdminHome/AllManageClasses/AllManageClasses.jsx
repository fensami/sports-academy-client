import React from 'react';
import useAxiousSecure from '../../../Hooks/useAxiousSecure';
import { useQuery } from '@tanstack/react-query';

const AllManageClasses = () => {

  const [axiosSecure] = useAxiousSecure();
  const { data: classes = [], refetch } = useQuery(['classes'], async () => {
    const res = await axiosSecure.get('/classes')
    console.log(res);
    return res.data;
  })


  // const handleMakeApproved = user => {
  //   fetch(`http://localhost:5000/classes/${classes._id}`, {
  //     method: 'put'
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data)
  //       if (data.modifiedCount) {
  //         refetch();
  //         Swal.fire({
  //           position: 'top-end',
  //           icon: 'success',
  //           title: `${user.name} is an approved Now!`,
  //           showConfirmButton: false,
  //           timer: 1500
  //         })
  //       }
  //     })
  // }



  return (
    <div>
      <h1 className='text-5xl font-bold uppercase text-[#329b97] my-12 text-center'>ALl Manage Classes</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
        {
          classes.map((classe, index) => <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='w-full' src={classe.classImage} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <select className="select select-info w-full max-w-xs">
                  <option disabled selected>Panding</option>
                  <option>Aproved</option>
                  <option>denie</option>

                </select>
              </div>
            </div>
          </div>)
        }
      </div>

    </div>
  );
};

export default AllManageClasses;