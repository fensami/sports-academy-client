import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiousSecure from '../../../Hooks/useAxiousSecure';
import Swal from 'sweetalert2';
// import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { GiTeacher } from "react-icons/gi";

const ALLusers = () => {
  const [axiosSecure] = useAxiousSecure();
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await axiosSecure.get('/users')
    return res.data;
  })

  const handleMakeAdmin = user => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            // title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  }
  const handleMakeInstructor = user => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${user.name} is an instructor Now!`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  }

  // const handleDelete = user => {

  // }

  return (
    <>
      <div>
        <h1 className='text-5xl font-bold text-[#26a09c] uppercase mb-8'>manage All Users</h1>
      </div>
      <div className="overflow-x-auto w-full border">
        <table className="table ">
          {/* head */}
          <thead className='bg-[#26a09c] text-white text-lg font-bold'>
            <tr>
              <th>#</th>
              <th className='font-bold'>Name</th>
              <th>Make Admin</th>
              <th>Make Instructor</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              users.map((user, index) => <tr
                key={index}
              >
                <th>{index + 1}</th>
                <td>{user.email}</td>
                <td>
                  {/* {user.role === 'admin' ? <RiAdminFill className='ml-8' style={{fontSize: '1.5rem'}}/>  :
                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost ml-8 bg-[#26a09c]  text-white"  ><RiAdminFill style={{fontSize: '1.5rem'}}></RiAdminFill></button>

                  } */}
                  {user.role === 'admin' ? 'admin' :
                    <button onClick={() => handleMakeAdmin(user)}> insta </button>

                  }

                </td>
                <td>
                  {user.role === 'instructor' ? <GiTeacher className='ml-8' style={{fontSize: '1.5rem'}}></GiTeacher> :
                    <button onClick={() => handleMakeInstructor(user)} className="btn btn-ghost bg-[#26a09c]  ml-8 text-white"
                    ><GiTeacher style={{fontSize: '1.5rem'}}></GiTeacher></button>
                  }

                </td>
                

                <td><button onClick={() => handleDelete(user)} className="btn btn-ghost bg-[#ee3831] text-white"><FaTrashAlt></FaTrashAlt></button></td>
              </tr>)
            }



          </tbody>
        </table>
      </div>
    </>
  );
};

export default ALLusers;