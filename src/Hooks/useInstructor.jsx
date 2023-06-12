import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth"
import useAxiousSecure from "./useAxiousSecure";

const useInstructor = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiousSecure();
  //use axiosSecure
  const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
    queryKey: ['isInstructor', user?.email],
    enabled: !loading,
    queryFn: async()=> {
      const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
      return res.data.instructor;
    }
  })
  return [isInstructor, isInstructorLoading]
}
export default useInstructor;
