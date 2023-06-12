import { Navigate, useLocation } from "react-router";
import { useAuth } from "../Hooks/useAuth";
import useInstructor from "../Hooks/useInstructor";
import { PulseLoader } from "react-spinners";



const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isInstructor, isInstructorLoading] = useInstructor()
    const location = useLocation();

    if(loading || isInstructorLoading){
        return <PulseLoader className="text-center relative top-20" color="#36d7b7" />
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;


