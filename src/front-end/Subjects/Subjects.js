import React from 'react';
import { Link } from 'react-router-dom';
import './Subjects.css'; // Import the CSS file
import SubjectCard from './SubjectCard';

const Subjects = () => {
 const subjects = {
  juniorCollege: [
    { id: 1, name: 'Mathematics', description: 'Embark on an exciting journey into the world of Mathematics! Learn about numbers, equations, and functions. Deepen your understanding of mathematical concepts and applications.' },
    { id: 2, name: 'Physics', description: 'Get ready to unravel the mysteries of the universe in Physics! Dive into everything from the smallest particles to the vastness of space. Understand the forces and principles that shape our world.' },
    { id: 3, name: 'General Paper', description: 'Sharpen your language skills with General Paper. Master reading, writing, and comprehension in English. Enhance your critical thinking abilities and learn to articulate your thoughts persuasively.' },
    { id: 4, name: 'Economics', description: 'Uncover the fascinating world of Economics. Delve into the production, distribution, and consumption of goods and services. Understand how societies, governments, businesses, households, and individuals allocate their resources.'},
  ],
  secondarySchool: [
    { id: 1, name: 'Math', description: 'Discover a world beyond numbers with Secondary School Math! Explore advanced topics including algebra, geometry, and statistics. Lay a solid foundation for higher level math and scientific understanding.' },
    { id: 2, name: 'Physics', description: 'Get fascinated by the laws of motion, electricity, and thermodynamics in Physics. Start understanding the world around you better. Physics is where science meets daily life.' },
    { id: 3, name: 'Biology', description: 'Step into the enthralling world of Biology. Learn about the microscopic cells to the large ecosystems. Explore the mysteries of the human body, and the intricacies of the plant and animal kingdoms.' },
    { id: 4, name: 'History', description: 'Travel back in time with History. Discover the story of humanity and its civilizations. Explore different periods, events, and personalities that have shaped the world as we know it.' },
  ],
  primarySchool: [
    { id: 1, name: 'Math', description: 'Lay the foundation of your mathematical journey with Primary School Math! Learn about basic arithmetic, geometry, and more. Experience the fun side of math through interesting problems and puzzles.' },
    { id: 2, name: 'Science', description: 'Start your journey of discovery with Primary School Science! Explore the fascinating world of natural sciences, from the biology of plants and animals to the physics of forces and the chemistry of everyday materials.' },
    { id: 3, name: 'English', description: 'Begin your adventure in language learning with English! Develop fundamental skills in reading and writing English. Build a strong base for effective communication and comprehension.' },
    { id: 4, name: 'Social Studies', description: 'Set off on an exciting exploration of society with Social Studies! Learn about different cultures, governments, and societies. Understand our place in the world and the role we can play in shaping it.' },
  ]
}

  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
  };

  return (
    <div>
      {Object.keys(subjects).map((level) => (
        <div key={level} className={`level-container ${level}`}>
          <h1 className="page-title">{level.charAt(0).toUpperCase() + level.slice(1).replace(/([a-z])([A-Z])/g, '$1 $2')}</h1>
          <div className="subjects-container">
            {subjects[level].map((subject) => (
              <Link key={subject.id} to={`/${level}/subjects/${subject.name}`} style={linkStyle}>
                <SubjectCard subject={subject} />
              </Link>
            ))}
          </div>  
          <hr className="section-divider" /> 
        </div>
      ))}
    </div>
  );
}

export default Subjects;


