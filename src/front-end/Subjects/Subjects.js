import React from 'react';
import './Subjects.css'; // Import the CSS file

const Subjects = () => {
  // Sample data for subjects
  const subjects = [
    { id: 1, name: 'Mathematics' },
    { id: 2, name: 'Science' },
    { id: 3, name: 'English' },
    { id: 4, name: 'Humanities'},
    // Add more subjects as needed
  ];

  return (
      <div>
        <h2>Subjects</h2>
        <div className="subjects-container">
          HELLLOOOO Here need to have clickable boxes to route to respective subjects
        </div>
      </div>

      //{/**For every subject, there will be: Mainpage encompassing all topics available, and for each topic, a Notepage and Quizpage*/}
  
  );
}

export default Subjects;

