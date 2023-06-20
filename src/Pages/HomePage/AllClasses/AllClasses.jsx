import React from 'react';
import useAxiousSecure from '../../../Hooks/useAxiousSecure';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAdmin from '../../../Hooks/useAdmin';
import useInstructor from '../../../Hooks/useInstructor';

const AllClasses = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isAdmin] = useAdmin()
  const [isInstructor] = useInstructor()

  const [axiosSecure] = useAxiousSecure();
  const { data: classes = [], refetch } = useQuery(['classes'], async () => {
    const res = await axiosSecure.get('/classes');
    return res.data;
  });

  const approvedClasses = classes.filter(classe => classe.status === 'approved');

  const addMyClasses = classes => {
    if(user && user.email){
        const addClass = { 
          itemId: classes._id,
          classImage: classes.classImage,
           className: classes.className,
           instructorName: classes.instructorName,
           instructorEmail: classes.instructorEmail,
           price: classes.price ,
            email: user.email}
        fetch(`https://sports-academy-server-kappa.vercel.app/myaddedclasses`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addClass)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        })
        const updateData = {
                seats: parseInt(classes.seats)-1
            }
        fetch(`https://sports-academy-server-kappa.vercel.app/myaddedclasses/${classes._id}`, {
        method: 'PATCH',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(updateData)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          refetch()
          if (data.modifiedCount) {
            Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: `added class successfully`,
              showConfirmButton: false,
              timer: 1500
            })
          }
        })

        
    }
    else{
        Swal.fire({
            title: 'Please login and select class',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login now!'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login', {state: {from: location}})
            }
          })
    }
}



  



  return (
    <div className='grid grid-cols-1 md:grid-cols-3 mb-12'>
      {approvedClasses.map(approvedClass => (
        <div key={approvedClass._id} className="card md:w-96 mt-24 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={approvedClass.classImage} className="rounded-xl w-full h-48" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title uppercase text-2xl font-bold">{approvedClass.className}</h2>
            <h2 className="card-title font-bold">Instructor Name:{approvedClass.instructorName}</h2>

            <p className='font-bold text-lg'>Available seats : {approvedClass.seats}</p>

            <p className='text-lg font-bold'>${approvedClass.price}</p>
            
            <div className="card-actions">
              <button disabled={isAdmin || isInstructor ||(parseInt(approvedClass.seats) < 1) ? true : false} onClick={() => addMyClasses(approvedClass)} className="btn font-bold text-white bg-[#38ada9]">
                Add Classes
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllClasses;
