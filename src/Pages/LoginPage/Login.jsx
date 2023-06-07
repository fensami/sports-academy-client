import React from 'react';

import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { Link } from 'react-router-dom';

const Login = () => {
  //TODO
  // const { register, handleSubmit } = useForm();
  // const onSubmit = data => console.log(data);
  
  return (
    <div className="hero min-h-screen bg-[#38ada9]">
  <div className="hero-content grid grid-cols-1 md:grid-cols-2">

    <div className="text-center w-96 text-white lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <form className="card flex-shrink-0 w-96 shadow-2xl bg-base-100">
      <div className="card-body">

        <div className="form-control">
          <label className="label">
            <span>Email</span>
          </label>
          <input type="text" placeholder="Email" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span >Password</span>
          </label>

          <input type="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="hover:bg-[#78e08f] btn 
          font-extrabold bg-[#38ada9] text-slate-800">Login</button>
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