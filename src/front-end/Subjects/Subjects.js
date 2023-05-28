import React from 'react';
import { Link } from 'react-router-dom';
import './subjects.css'; // Import the CSS file

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
        {subjects.map(subject => (
          <Link key={subject.id} to={`/subjects/${subject.id}`}>
            <div className="subject-box">
              <p>
                {subject.name}
                <span className="underline"></span> {/* Added */}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Subjects;

