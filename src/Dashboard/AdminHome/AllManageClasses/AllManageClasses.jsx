import React from 'react';
// import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAxiousSecure from '../../../Hooks/useAxiousSecure';
// import axiosSecure from 'axios';

const AllManageClasses = () => {
  const [axiosSecure] = useAxiousSecure();
  const { data: classes = [], refetch } = useQuery(['classes'], async () => {
    const res = await axiosSecure.get('/classes');
    console.log(res);
    return res.data;
  });


  const handleUpdateStatus = (e, classe) => {
    // e.preventDefault()
    console.log(e.target.value);
    const updateData = {
      status: e.target.value
  }
  console.log(classe._id);
    fetch(`https://sports-academy-server-kappa.vercel.app/classes/${classe._id}`, {
      method: 'PATCH',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(updateData)
    })
      .then(res => res.json())
      .then(data => {
        refetch()
        console.log(data)
      })
  }


  


  return (
    <div>
      <h1 className='text-5xl font-bold uppercase text-[#329b97] my-12 text-center'>All Manage Classes</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>

        {classes.map((classe, index) => (
          <div key={index} className="card md:w-96 bg-base-100 shadow-xl">
            <figure><img className='w-full h-60' src={classe.classImage} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">
                {classe.className}
                {/* <div className="badge badge-secondary">NEW</div> */}
              </h2>
              <p className='font-semibold'>seats: {classe.seats}</p>
              <p className='font-semibold'>Instructor Name: {classe.instructorName}</p>
              <p className='font-semibold'>Instructor Email: {classe.instructorEmail}</p>
              <p className='font-semibold'>Price:$ {classe.price}</p>
              <div className="card-actions justify-end">
                <select
                  className="select select-info w-full max-w-xs" onChange={(e)=>handleUpdateStatus(e,classe)}>
                  <option value="pending" className='text-black'>{classe.status}</option>
                  <option value="approved">Approved</option>
                  <option value="denied">Denied</option>
                </select>

                {/* {
                  classes.status === 'status' ? 'approved' : <button onChange={()=>handleUpdateStatus(classes)}> pending</button>
                } */}
                {/* <form onSubmit={()=>handleUpdateStatus(classes)}>
                  <input type="text" name='status' placeholder='status' /> 
                  <input type="submit" value="update" />
                </form> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllManageClasses;
