import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiousSecure from '../../Hooks/useAxiousSecure';
import Swal from 'sweetalert2';
// import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";

const ALLusers = () => {
  const [axiosSecure] = useAxiousSecure();
  const { data: users = [], refetch } = useQuery(['users'], async () => {
      const res = await axiosSecure.get('/users')
      return res.data;
  })

  const handleMakeAdmin = user =>{
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
        method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount){
            refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an Admin Now!`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
}

// const handleDelete = user => {

// }

  // const {data: users = [], refetch} = useQuery(['users'], async() => {
  //   const res = await fetch(`http://localhost:5000/users/admin/${users._id}`)
  //   return res.json()

  // })
  return (
    <>
    <div>
      <h1>All Users</h1>
    </div>
    <div className="overflow-x-auto w-full border">
    <table className="table ">
      {/* head */}
      <thead className='bg-[#26a09c] text-white'>
        <tr>
          <th>#</th>
          <th className='font-bold'>Name</th>
          <th>Make Admin</th>
          <th>Make Instructor</th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        {
          users.map((user, index) =><tr
          key={index}
          >
          <th>{index + 1}</th>
          <td>{user.email}</td>
          <td>kaku</td>
          <td>{ user.role === 'admin' ? 'admin' :
                                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-orange-600  text-white"><FaUserShield></FaUserShield></button> 
                                    }</td>
                                <td><button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
        </tr> )
        }

        {/* {
          users.map((user,index) => <tr
          key={user._id}
          >
          <th>{index + 1}</th>
          <td>{user.email}</td>
          <td>kaku</td>
          <td>instructor</td>
          <td>delete</td>
        </tr> )
        } */}
       
        
        
      </tbody>
    </table>
  </div>
    </>
  );
};

export default ALLusers;