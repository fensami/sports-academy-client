import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/LoginPage/Login";
// import Signup from "../Pages/SignupPage/Signup";
import Error from "../Pages/ErrorPage/Error";
import Instructor from "../Pages/InstructorPage/Instructor";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import ALLusers from "../Dashboard/AdminHome/ALLusers/ALLusers";
import AddClasses from "../Dashboard/InstructorHome/AddClasses/AddClasses";
import AdminHome from "../Dashboard/AdminHome/AdminHome/AdminHome";
import AllManageClasses from "../Dashboard/AdminHome/AllManageClasses/AllManageClasses";
import Signup from "../Pages/SignupPage/Signup";
import StudentHome from "../Dashboard/StudentsHome/StrudentHome/StudentHome";
import MySelectedClasses from "../Dashboard/StudentsHome/MySelectedClasses/MySelectedClasses";
import AllClasses from "../Pages/HomePage/AllClasses/AllClasses";
import AdminRoute from "./AdminRoute";
import MyClasses from "../Dashboard/InstructorHome/MyClasses/MyClasses";
import InstructorRoute from "./InstructorRoute";


export const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children:[

      {path: '/',element: <Home></Home>},
      {path: 'instructors',element: <Instructor></Instructor>},
      {path: 'allclassses',element: <AllClasses></AllClasses>},

      
    ]
  },
  {path: 'login', element: <Login></Login>},
  {path: 'signup', element: <Signup></Signup>},
  {path: '*', element: <Error></Error>},
  {
    path: 'dashboard', element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      
      {path: 'addclasses', element: <AddClasses></AddClasses>},
      {path: 'myclasses', element: <MyClasses></MyClasses>},



      {path: 'adminhome', element: <AdminRoute><AdminHome></AdminHome></AdminRoute> },
      {path: 'allusers', element:<AdminRoute><ALLusers></ALLusers> </AdminRoute>},
      {path: 'allManageClasses', element: <AllManageClasses></AllManageClasses> },


      {path: 'mySelectedClasses', element: <MySelectedClasses></MySelectedClasses>},
      {path: 'studentHome', element: <StudentHome></StudentHome> },
    ]
  }
])