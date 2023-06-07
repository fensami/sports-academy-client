import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';




const SocialLogin = () => {
  const {googleSignIn} = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const handleGoogleSignIn = () => {
    googleSignIn()
    navigate(from , {replace: true})
  }
  return (
    <div onClick={handleGoogleSignIn}>
      <hr className='pb-8' />
      <FcGoogle className='w-1/2 mx-auto mb-8' style={{fontSize: '3rem'}} ></FcGoogle>
    </div>
  );
};

export default SocialLogin;