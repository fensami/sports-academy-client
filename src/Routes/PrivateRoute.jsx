import { Navigate, useLocation } from "react-router";
import { useAuth } from "../Hooks/useAuth";
import PulseLoader from "react-spinners/PulseLoader";



const PrivateRoute = ({ children }) => {
  const {user, loading} = useAuth()
    const location = useLocation();
    

    if(loading){
        return <PulseLoader className="text-center relative top-20" color="#36d7b7" />
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;