import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaUsers, FaWallet } from 'react-icons/fa';
import { ImBooks } from 'react-icons/im';
import useAdmin from '../Hooks/useAdmin';
import useInstructor from '../Hooks/useInstructor';
import img from '../assets/image/logo.png'


const Dashboard = () => {

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden">Open drawer</label>


      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-[#26a09c] text-white text-xl font-semibold">
          {/* Sidebar content here */}
          <img className='w-48 mx-auto' src={img} alt="" />

          {isAdmin ? <>
            <li><NavLink to='/dashboard/adminhome'><FaHome></FaHome> Admin Home</NavLink></li>
            <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers>Manage Users</NavLink></li>
            <li><NavLink to="/dashboard/allManageClasses"><ImBooks></ImBooks>All Manage Classes</NavLink></li>

          </> :
            isInstructor ? <>
              <li><NavLink><FaHome></FaHome>Instructor Home</NavLink></li>
              <li><NavLink to="/dashboard/addclasses"><FaUsers></FaUsers> Add a class</NavLink></li>
              <li><NavLink to="/dashboard/myclasses"><FaUsers></FaUsers>My Classes</NavLink></li>
            </> :
              <>
                <li><NavLink to="/dashboard/studentHome"><FaHome></FaHome>Students Home</NavLink></li>
                <li><NavLink to="/dashboard/mySelectedClasses"><FaHome></FaHome>My Selected Classes</NavLink></li>
                <li><NavLink to="/"><FaWallet></FaWallet> My Enrolled Classes</NavLink></li>
              </>
          }

          <div className="divider"></div>
          <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
          <li><NavLink to="/instructors">Instructors</NavLink></li>
          <li><NavLink to="/allclassses">Classes</NavLink></li>
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;