import React from 'react';

const Instructor = () => {
  // Sample instructor data
  const instructors = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
      image: 'instructor1.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      image: 'instructor2.jpg',
    },
    // Add more instructors here...
  ];

  return (
    <div>
      <h1>Instructors</h1>
      <h1>Instructors</h1>
      <h1>Instructors</h1>
      <h1>Instructors</h1>
      <h1>Instructors</h1>
      <h1>Instructors</h1>
      <h1>Instructors</h1>
      <h1>Instructors</h1>
      <h1>Instructors</h1>
      <h1>Instructors</h1>
      <h1>Instructors</h1>
      <h1>Instructors</h1>
      <h1>Instructors</h1>
      <h1>Instructors</h1>
      <h1>Instructors</h1>
      <h1>Instructors</h1>
      <h1>Instructors</h1>
      <h1>Instructors</h1>
      <h1>Instructors</h1>
      <h1>Instructors</h1>
      <h1>Instructors</h1>
      <h1>Instructors</h1>
      <h1>Instructors</h1>
      <h1>Instructors</h1>
      <h1>Instructors</h1>
      <h1>Instructors</h1>
      <h1>Instructors</h1>
      <h1>Instructors</h1>
      <h1>Instructors</h1>
      <h1>Instructors</h1>
      <h1>Instructors</h1>
      <h1>Instructors</h1>
      <h1>Instructors</h1>
      <h1>Instructors</h1>
      <h1>Instructors</h1>
      <div className="instructor-list">
        {instructors.map((instructor) => (
          <div key={instructor.id} className="instructor-item">
            <img src={instructor.image} alt={instructor.name} />
            <h2>{instructor.name}</h2>
            <p>{instructor.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructor;
