import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/LoginPage/Login";
import Signup from "../Pages/SignupPage/Signup";
import Error from "../Pages/ErrorPage/Error";
import Instructor from "../Pages/InstructorPage/Instructor";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import ALLusers from "../Dashboard/AdminHome/ALLusers/ALLusers";
import AddClasses from "../Dashboard/InstructorHome/AddClasses/AddClasses";
import AdminHome from "../Dashboard/AdminHome/AdminHome/AdminHome";
import AllClasses from "../Pages/HomePage/PopularClassSection/AllClasses/AllClasses";
import AllManageClasses from "../Dashboard/AdminHome/AllManageClasses/AllManageClasses";
// import Dashboard from "../Dashboard/Dashboard";


export const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children:[

      {path: '/',element: <Home></Home>},
      {path: 'instructors',element: <Instructor></Instructor>},
      {path: 'allclasses',element: <AllClasses></AllClasses>},

      
    ]
  },
  {path: 'login', element: <Login></Login>},
  {path: 'signup', element: <Signup></Signup>},
  {path: '*', element: <Error></Error>},
  {
    path: 'dashboard', element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      
      {path: 'addclasses', element: <AddClasses></AddClasses> },
      {path: 'adminhome', element: <AdminHome></AdminHome> },
      {path: 'allusers', element: <ALLusers></ALLusers> },
      {path: 'allManageClasses', element: <AllManageClasses></AllManageClasses> },
    ]
  }
])