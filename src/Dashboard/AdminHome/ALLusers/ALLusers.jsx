import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiousSecure from '../../../Hooks/useAxiousSecure';
import Swal from 'sweetalert2';
import { FaTrashAlt } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { GiTeacher } from "react-icons/gi";

const ALLusers = () => {
  const [axiosSecure] = useAxiousSecure();


  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await axiosSecure.get('/users');
    return res.data;
  });

  //make a user an admin
  const handleMakeAdmin = user => {
    fetch(`https://sports-academy-server-kappa.vercel.app/users/admin/${user._id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'wow your are now admin',
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
  };

  //make a user an instructor
  const handleMakeInstructor = user => {
    fetch(`https://sports-academy-server-kappa.vercel.app/users/instructor/${user._id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: `your are now instructor`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
  };



  //TODO:
  // const handleDelete = () => {
  //
  // }


  return (
    <>
      <div>
        <h1 className='text-5xl font-bold text-[#26a09c] uppercase mb-8'>manage All Users</h1>
      </div>
      <div className="overflow-x-auto w-full border">
        <table className="table ">
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
            {
              users.map((user, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{user.email}</td>
                  <td>
                    {
                      user.role === 'admin' ? (
                        <RiAdminFill className='ml-8' style={{ fontSize: '1.5rem' }} />
                      ) : (
                        <button
                          onClick={() => handleMakeAdmin(user)}
                          className="btn btn-ghost ml-8 bg-[#26a09c]  text-white"
                        >
                          <RiAdminFill style={{ fontSize: '1.5rem' }} />
                        </button>
                      )
                    }
                  </td>
                  <td>
                    {
                      user.role === 'instructor' ? (
                        <GiTeacher className='ml-8' style={{ fontSize: '1.5rem' }} />
                      ) : (
                        <button
                          onClick={() => handleMakeInstructor(user)}
                          className="btn btn-ghost bg-[#26a09c]  ml-8 text-white"
                        >
                          <GiTeacher style={{ fontSize: '1.5rem' }} />
                        </button>
                      )
                    }
                  </td>
                  <td>
                    <button className="btn btn-ghost bg-[#ee3831] text-white">
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ALLusers;
