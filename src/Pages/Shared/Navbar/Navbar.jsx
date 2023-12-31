import React from 'react';
import logo from '../../../assets/image/logo.png'
import { Link } from 'react-router-dom';
import UserImage from './UserImage';
import { useAuth } from '../../../Hooks/useAuth';
import useAdmin from '../../../Hooks/useAdmin';
import useInstructor from '../../../Hooks/useInstructor';

const Navbar = () => {
  const {user, logOut} = useAuth()
  const [isAdmin] = useAdmin()
  const [isInstructor] = useInstructor()
  const handleLogout = () => {
    logOut()
    .then(() => {})
    .catch(err => console.log(err))
  }
  const nav = <>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/instructors'>Instructors</Link></li>
      <li><Link to='/allclassses'>Classes</Link></li>
      {
        user && <li><Link to='dashboard/studentHome'>DashBoard</Link></li> ||
        isAdmin && <li><Link to='dashboard/adminHome'>DashBoard</Link></li> ||
        isInstructor && <li><Link to='dashboard/instructorHome'>DashBoard</Link></li> 
      }
      
  </>
  return (
      <div className="navbar rounded-t-xl bg-opacity-70 fixed z-10 max-w-screen-xl bg-[#38ada9]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <img className='w-16 max-sm:hidden  mx-auto' src={logo} alt="" />
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {nav}
          </ul>
        </div>
       
        <a className="btn btn-ghost normal-case text-lg md:text-3xl text-white">SportsAcademy</a>
      </div>
      <div className="navbar-center hidden lg:flex">

        <ul className="menu menu-horizontal font-bold text-xl px-1 text-white">
          {nav}
        </ul>

      </div>
      <div className="navbar-end">
        {
          user ? <>
          <Link onClick={handleLogout} className="btn btn-outline text-white">Logout</Link> </> :
          <>
          <Link to='/login' className="btn btn-outline text-white hover:bg-green-500">Login</Link>
                   </>

        }
        {/* profile image */}
<UserImage></UserImage>
         
        
      </div>
    </div>
  
  );
};

export default Navbar;