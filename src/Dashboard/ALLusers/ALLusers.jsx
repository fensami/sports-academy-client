import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ALLusers = () => {
  const {data: users = [], refetch} = useQuery(['users'], async() => {
    const res = await fetch('http://localhost:5000/users')
    return res.json()

  })
  return (
    <div className="overflow-x-auto border">
    <table className="table ">
      {/* head */}
      <thead className='bg-[#26a09c] text-white'>
        <tr>
          <th></th>
          <th className='font-bold'>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        <tr>
          <th>1</th>
          <td>Cy Ganderton</td>
          <td>Quality Control Specialist</td>
          <td>Blue</td>
        </tr>
        {/* row 2 */}
        <tr>
          <th>2</th>
          <td>Hart Hagerty</td>
          <td>Desktop Support Technician</td>
          <td>Purple</td>
        </tr>
        {/* row 3 */}
        <tr>
          <th>3</th>
          <td>Brice Swyre</td>
          <td>Tax Accountant</td>
          <td>Red</td>
        </tr>
      </tbody>
    </table>
  </div>
  );
};

export default ALLusers;