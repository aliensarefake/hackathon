import React from 'react';
import TopicCard from './TopicCard';
import "./SubjectPage.css"

const SubjectPage = () => {
    const topics = [
        { id: 1, name: 'Geometry', description: 'Journey into the world of Geometry, where you can explore the mysteries of shapes, sizes, and properties of space. From simple shapes to complex 3D structures, Geometry has it all!' },
        { id: 2, name: 'Calculus', description: 'Unleash your analytical powers with Calculus! Dive deep into the study of change and motion, explore the essence of curves, rates of change, and areas under the curve. Perfect your understanding of the fundamental theorem of calculus.' },
        { id: 3, name: 'Algebra', description: 'Algebra is the gateway to advanced mathematics. Learn about the rules of operations, the relation between numbers, and the use of symbols to represent unknown quantities. Unlock the language of mathematics with Algebra!' },
      ];

  return (
    <div className="topics-container">
      {topics.map((topic) => (
        <TopicCard key={topic.id} topic={topic} />
      ))}
    </div>
  );
}

export default SubjectPage;
