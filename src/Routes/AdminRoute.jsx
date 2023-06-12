import { Navigate, useLocation } from "react-router";
import { useAuth } from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";
import { PulseLoader } from "react-spinners";


const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <PulseLoader className="text-center relative top-20" color="#36d7b7" />
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoute;