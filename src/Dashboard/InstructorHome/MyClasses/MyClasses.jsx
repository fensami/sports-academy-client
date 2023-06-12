import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiousSecure from "../../../Hooks/useAxiousSecure";
import { useAuth } from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";


const MyClass = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiousSecure();
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    })

    const classesStatus = classes.filter(classe => classe.instructorEmail === user.email);


    

    return (
        <div className="w-full">
          
                <div className="overflow-x-auto border-2">
                <table className="table rounded">
                  <thead className='bg-[#26a09c] text-black'>
                    <tr className="text-white">
                      <th>Class Name </th>
                      <th>Class Image</th>
                      <th>Available Seats</th>
                      <th>Status</th>
                      <th>Update</th>
                      <th>delete</th>

                    </tr>
                  </thead>
                  <tbody>
                    {
                      classesStatus.map((classes,index) =><tr key={index}>
                      <th className="uppercase">
                        {classes.className}
                      </th>
                      <td> 
                        <img className="w-[50px] h-[50px] rounded" src={classes.classImage} alt="" />
                      </td>
                      <td>
                        {classes.seats}
                      </td>
                      <td className="uppercase">{classes.status}</td>
                      <td className="uppercase"><Link className="hover:underline">Update</Link></td>

                      <td className="uppercase hover:underline">delete</td>
                    </tr>)
                    }
                    
                  </tbody>
                  
                </table>
              </div>
                
                
                
            
        </div>
    );
};

export default MyClass;