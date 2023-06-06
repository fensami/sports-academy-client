import React from 'react';

import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  
  return (
    <div className="hero min-h-screen bg-[#38ada9]">
  <div className="hero-content grid grid-cols-1 md:grid-cols-2">

    <div className="text-center w-96 text-white lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-96 shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span>Name</span>
          </label>
          <input {...register("name"), { required: true }} type="name" placeholder="Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span>Photo Url</span>
          </label>
          <input {...register("text")} type="text" placeholder="Photo Url" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span>Email</span>
          </label>
          <input {...register("email")} type="email" placeholder="Email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span >Password</span>
          </label>
          <input {...register("password")} type="password" placeholder="password" className="input input-bordered" />
          {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
        </div>
        <div className="form-control">
          <label className="label">
            <span >Confirm Password</span>
          </label>
          <input {...register("password")} type="password" placeholder="Confirm Password" className="input input-bordered" />
          {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
        </div>
        <div className="form-control mt-6">
          <input type="submit" className="hover:bg-[#78e08f] btn 
          font-extrabold bg-[#38ada9] text-slate-800" value="SignUp" />
          {/* <input type='submit' >Login</input> */}
        </div>
      </div>
      <hr className='pb-8' />
      <SocialLogin></SocialLogin>

      <p className='pb-5 mx-auto'>Already have an account <Link className='text-orange-400' to='/login'>login</Link></p>
      
    
    </form>



  </div>
</div>

  );
};

export default Signup;