import React from 'react';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useAuth } from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const Signup = () => {
  const { register, handleSubmit, formState: { errors } , reset} = useForm();
  const {createUser, updateUserProfile} = useAuth()

  const navigate = useNavigate();
  // const onSubmit = data => {
  //   console.log(data);
   
  //   createUser(data.email, data.password)
  //   .then(result => {
  //     const loggedUser = result.user;
  //     console.log(loggedUser);

  //     updateUserProfile(data.name, data.photoURL)
  //     .then(() => {
  //       const saveUser = {name: data.name, email: data.email}
  //       fetch('http://localhost:5000/users', {
  //         method: "POST", 
  //         headers: {
  //           'content-type' : 'application/json'
  //         },
  //         body: JSON.stringify(saveUser)
  //       })
  //       .then(res => res.json())
  //       .then(data => {
  //         if(data.insertedId){
  //           Swal.fire({
  //             position: 'top-end',
  //             icon: 'success',
  //             title: 'User created successfully.',
  //             showConfirmButton: false,
  //             timer: 1500
  //         });
  //         navigate('/')
  //         }
  //         // console.log(data);
  //         // navigate(from , {replace: true})
  //       })
  //     })
     
  //   })
  //   .catch(err => console.log(err))
     
  // };


  const onSubmit = data => {

    createUser(data.email, data.password)
        .then(result => {

            const loggedUser = result.user;
            console.log(loggedUser);

            updateUserProfile(data.name, data.photoURL)
                .then(() => {
                    const saveUser = { name: data.name, email: data.email }
                    fetch('http://localhost:5000/users', {
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



                })
                .catch(error => console.log(error))
        })
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
              {errors.email?.type === 'email' && <p className="text-red-600">is less than 6 characters</p>}
            </div>


            <div className="form-control">
              <label className="label">
                <span >Password</span>
              </label>
              <input {...register("password", {
                required: true,
                minLength: 6,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
               
              })} type="password" placeholder="password" className="input input-bordered" />
              {errors.password?.type === 'minLength' && <p className="text-red-600">is less than 6 characters</p>}
              {errors.password?.type === 'pattern' && <p className="text-red-600">don't have a capital letter, </p>}
              {errors.password?.type === 'pattern' && <p className="text-red-600">don't have a special character</p>}
              
            </div>


            <div className="form-control">
              <label className="label">
                <span >Confirm Password</span>
              </label>
              <input {...register("confirmPassword", { required: true })} type="password" placeholder="Confirm Password" className="input input-bordered" />

              {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
            </div>


            
              <input type="submit" className="hover:bg-[#78e08f] btn 
          font-extrabold bg-[#38ada9] text-slate-800" value="SignUp" />
              {/* <input type='submit' >Login</input> */}
           

          </div>

          <SocialLogin></SocialLogin>

          <p className='pb-5 mx-auto'>Already have an account <Link className='text-orange-400' to='/login'>login</Link></p>


        </form>



      </div>
    </div>

  );
};

export default Signup;