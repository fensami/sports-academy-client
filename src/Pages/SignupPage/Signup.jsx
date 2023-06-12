import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useAuth } from '../../Hooks/useAuth';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Signup = () => {
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState('');

  const password = watch('password');

  const onSubmit = data => {
    if (password !== data.confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);

        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const saveUser = { name: data.name, email: data.email };
            fetch('https://sports-academy-server-kappa.vercel.app/users', {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(saveUser)
            })
              .then(res => res.json())
              .then(data => {
                console.log(data);
                if (data.insertedId) {
                  reset();
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created successfully.',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/');
                }
              })
              .catch(error => console.log(error));
          })
          .catch(error => console.log(error));
      });
  };

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
              <input {...register("name", { required: true })} name='name' type="name" placeholder="Name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span>Photo Url</span>
              </label>
              <input {...register("photoURL", { required: true })} type="text" placeholder="Photo Url" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span>Email</span>
              </label>
              <input {...register("email", { required: true })} type="email" placeholder="Email" className="input input-bordered" />
              {errors.email?.type === 'required' && <p className="text-red-600">This field is required</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span>Password</span>
              </label>
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                })}
                type="password"
                placeholder="Password"
                className="input input-bordered"
              />
              {errors.password?.type === 'required' && <p className="text-red-600">This field is required</p>}
              {errors.password?.type === 'minLength' && <p className="text-red-600">Password should be at least 6 characters long</p>}
              {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have at least one capital letter and one special character</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span>Confirm Password</span>
              </label>
              <input
                {...register("confirmPassword", {
                  required: true,
                  validate: value => value === password || "Passwords do not match"
                })}
                type="password"
                placeholder="Confirm Password"
                className="input input-bordered"
              />
              {errors.confirmPassword && <p className="text-red-600">{errors.confirmPassword.message}</p>}
            </div>
            {passwordError && <p className="text-red-600">{passwordError}</p>}
            <input type="submit" className="hover:bg-[#78e08f] btn font-extrabold bg-[#38ada9] text-slate-800" value="SignUp" />
          </div>
          <SocialLogin />
          <p className='pb-5 mx-auto'>Already have an account <Link className='text-orange-400' to='/login'>login</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
