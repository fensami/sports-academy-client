import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/LoginPage/Login";
import Signup from "../Pages/SignupPage/Signup";
import Error from "../Pages/ErrorPage/Error";

export const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children:[

      {path: '/',element: <Home></Home>},
      
    ]
  },
  {path: 'login', element: <Login></Login>},
  {path: 'signup', element: <Signup></Signup>},
  {path: '*', element: <Error></Error>}
])