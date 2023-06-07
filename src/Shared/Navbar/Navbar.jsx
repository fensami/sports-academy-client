import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
import logo from '../../assets/image/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
    .then(() => {})
    .catch(err => console.log(err))
  }
  const nav = <>
      <li><a>Item 1</a></li>
      <li><a>Item 3</a></li>
  </>
  return (
    <div >
      <article className='bg-[#38ada9]'>
      <img className='w-32  mx-auto' src={logo} alt="" />

      </article>
      <div className="navbar bg-[#38ada9]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {nav}
          </ul>
        </div>
       
        <a className="btn btn-ghost normal-case text-3xl text-white">SportsAcademy</a>
      </div>
      <div className="navbar-center hidden lg:flex">

        <ul className="menu menu-horizontal font-bold px-1">
          {nav}
        </ul>

      </div>
      <div className="navbar-end">
        {
          user ? <>
          <Link onClick={handleLogout} className="btn">Logout</Link> </> :
          <>
          <Link to='/login' className="btn">Login</Link>
          </>

        }
        
      </div>
    </div>
    </div>
  );
};

export default Navbar;