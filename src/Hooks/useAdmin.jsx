import { useQuery } from "@tanstack/react-query";
import useAxiousSecure from "./useAxiousSecure";
import { useAuth } from "./useAuth";

const useAdmin = () => {
  const {user, loading} = useAuth();
    const [axiosSecure] = useAxiousSecure();

    //use axiossecure
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
}
export default useAdmin;