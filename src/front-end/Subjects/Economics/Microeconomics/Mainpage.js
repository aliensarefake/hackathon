import React from 'react';
import { Link } from 'react-router-dom';
import './Mainpage.css'; // Import the CSS file

const Mainpage = () => {
  // Sample data for economics topics
  const topics = [
    {
      id: 1,
      name: 'Microeconomics',
      image: 'https://cdn.corporatefinanceinstitute.com/assets/microeconomics2-1-1024x673.png',
      resourceLink: '/topics/microeconomics', // Add the resource link for each topic
    },
    {
      id: 2,
      name: 'Macroeconomics',
      image: 'https://www.xanedu.com/hs-fs/hubfs/flexed-course-principles-of-macroeconomics-large-image.jpg?width=850&height=550&name=flexed-course-principles-of-macroeconomics-large-image.jpg',
      resourceLink: '/topics/macroeconomics',
    },
    // Add more topics as needed
  ];

  return (
    <div>
      <h2>Economics Main Page</h2>
      <div className="topics-container">
        {topics.map(topic => (
          <Link key={topic.id} to={topic.resourceLink}>
            <div className="topic-card">
              <img src={topic.image} alt={topic.name} />
              <p>{topic.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Mainpage;