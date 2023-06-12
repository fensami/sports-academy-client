import React from 'react';
import { useAuth } from '../../../Hooks/useAuth';

const StudentHome = () => {
  const {user} = useAuth()
  return (
    <div>
       <p className='text-5xl font-bold text-[#26a09c] uppercase'>Welcome {user.displayName}</p>
    </div>
  );
};

export default StudentHome;