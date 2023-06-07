import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Providers/AuthProvider';
// import { FcGoogle } from 'react-icons/fc';




const SocialLogin = () => {
  const {googleSignIn} = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
  }
  return (
    <div onClick={handleGoogleSignIn}>
      <hr className='pb-8' />
      <FcGoogle className='w-1/2 mx-auto mb-8' style={{fontSize: '3rem'}} ></FcGoogle>
    </div>
  );
};

export default SocialLogin;