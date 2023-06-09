import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../../Hooks/useAuth';
// import { useQuery } from '@tanstack/react-query';
// import { useAuth } from '../../Hooks/useAuth';
// import { useAuth } from '../../Hooks/useAuth';

// const ManageClasses = () => {
  // const { user } = useAuth();

  // const { data: classes = [], isLoading } = useQuery(['classes', user?.email], async () => {
  //   const res = await fetch(`http://localhost:5000/classes?instructorEmail=${user?.email}`);
  //   return res.json();
  // });}

  // const handleApprove = (classId) => {
  //   // Implement the logic to approve the class with the given ID
  // };

  // const handleDeny = (classId) => {
  //   // Implement the logic to deny the class with the given ID
  // };

  // const handleSendFeedback = (classId) => {
  //   // Implement the logic to send feedback for the class with the given ID
  // };}


const AddClasses = () => {
  const { user } = useAuth();

  const { data: classes = [], isLoading } = useQuery(['classes', user?.email], async () => {
    const res = await fetch(`http://localhost:5000/classes?instructorEmail=${user?.email}`);
    return res.json();
  });

  const handleApprove = (classId) => {
    // Implement the logic to approve the class with the given ID
  };

  const handleDeny = (classId) => {
    // Implement the logic to deny the class with the given ID
  };

  const handleSendFeedback = (classId) => {
    // Implement the logic to send feedback for the class with the given ID
  };
  return (
    <div>
      <h1>Manage Classes</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classItem) => (
              <tr key={classItem.id}>
                <td>
                  <img src={classItem.image} alt="Class" />
                </td>
                <td>{classItem.name}</td>
                <td>{classItem.instructorName}</td>
                <td>{classItem.instructorEmail}</td>
                <td>{classItem.availableSeats}</td>
                <td>{classItem.price}</td>
                <td>{classItem.status}</td>
                <td>
                  <button
                    onClick={() => handleApprove(classItem.id)}
                    disabled={classItem.status !== 'pending'}
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleDeny(classItem.id)}
                    disabled={classItem.status !== 'pending'}
                  >
                    Deny
                  </button>
                  <button
                    onClick={() => handleSendFeedback(classItem.id)}
                    disabled={classItem.status !== 'approved'}
                  >
                    Send Feedback
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AddClasses;