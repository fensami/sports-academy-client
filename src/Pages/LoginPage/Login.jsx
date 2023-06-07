import React, { useContext } from 'react';

import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';
import image from '../../assets/image/loginImage.png'

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  
  //TODO
  const { register, handleSubmit } = useForm();
  const {login} = useContext(AuthContext)
  const onSubmit = data => {
    // console.log(data);
    login(data.email, data.password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      navigate(from , {replace: true})

    })
    .catch(err => console.log(err))
  }
  
  return (
    <div className="hero min-h-screen bg-[#38ada9]">
  <div className="hero-content grid grid-cols-1 md:grid-cols-2">

    <div className="text-center  md:mr-12 text-white lg:text-left">
      <img src={image} alt="" />
     
    </div>
    <form onSubmit={handleSubmit(onSubmit)}  className="card flex-shrink-0 md:w-96 shadow-2xl bg-base-100">
      <div className="card-body">

        <div className="form-control">
          <label className="label">
            <span>Email</span>
          </label>
          <input {...register("email", { required: true })} type="email" placeholder="Email" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span >Password</span>
          </label>

          <input {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        <input type="submit" className="hover:bg-[#78e08f] btn 
          font-extrabold bg-[#38ada9] text-slate-800" value="Login" />
        </div>
      </div>
      
      <SocialLogin></SocialLogin>
      <p className='pb-5 mx-auto'>Have no account <Link className='text-orange-400' to='/signup'>signup</Link></p>
      
    
    </form>



  </div>
</div>

  );
};

export default Login;