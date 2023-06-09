import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBook, FaCalendarAlt, FaHome, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import useAdmin from '../Hooks/useAdmin';
import useInstructor from '../Hooks/useInstructor';
// import useAdmin from '../Hooks/useAdmin';


const Dashboard = () => {
  // const [cart] = useCart();

  // TODO: load data from the server to have dynamic isAdmin based on Data
  // const isAdmin = true;
  // const isInstructor = true;
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor()
  // const isInstructor = true;

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
      <ul className="menu p-4 w-80 h-full bg-[#26a09c] text-white">
        {/* Sidebar content here */}
        {isAdmin ? <>
                            <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
                            <li><NavLink to="/dashboard/addclasses"> Add Classes</NavLink></li>
                            
                        </> :
                        isInstructor ? <>
                         <li><NavLink to="/dashboard"><FaUsers></FaUsers> Instructors items add</NavLink></li>
                        </> :
                        <>
                            <li><NavLink to="/dashboard/userhome"><FaHome></FaHome> User Home</NavLink></li>
                            <li><NavLink to="/"><FaWallet></FaWallet> Payment History</NavLink></li>
                            {/* <li>
                                <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                                    <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                                </NavLink>

                            </li> */}
                        </>
                    }

<div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/instructors">Instructors</NavLink></li>
                    <li><NavLink to="/classe">Classes</NavLink></li>
      </ul>
    
    </div>
  </div>
  );
};

export default Dashboard;