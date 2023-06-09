import React from 'react';
import { useAuth } from '../../Hooks/useAuth';
import { CgProfile } from 'react-icons/cg';
// import img from '../../assets/image/avatar.png'

const UserImage = () => {
  const {user} = useAuth()
  return <img className='rounded-full w-16 h-16 ml-4' style={{fontSize: '2rem'}} src={ user && user.photoURL ? user.photoURL : <CgProfile></CgProfile> } />
};
    
export default UserImage;