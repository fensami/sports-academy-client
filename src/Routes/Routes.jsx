import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/LoginPage/Login";
import Signup from "../Pages/SignupPage/Signup";
import Error from "../Pages/ErrorPage/Error";
import Instructor from "../Pages/InstructorPage/Instructor";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children:[

      {path: '/',element: <Home></Home>},
      // {path: 'instructors',element: <Instructor></Instructor>},
      {path: 'instructors',element: <PrivateRoute><Instructor></Instructor></PrivateRoute>},
      
    ]
  },
  {path: 'login', element: <Login></Login>},
  {path: 'signup', element: <Signup></Signup>},
  {path: '*', element: <Error></Error>}
])