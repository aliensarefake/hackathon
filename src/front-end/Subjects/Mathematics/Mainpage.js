import React from 'react';
import { Link } from 'react-router-dom';
import './Mainpage.css'; // Import the CSS file

const Mainpage = () => {
  // Sample data for mathematics topics
  const topics = [
    {
      id: 1,
      name: 'Algebra',
      image: 'https://www.the74million.org/wp-content/uploads/2023/02/iStock-470493341-copy.jpg',
      resourceLink: '/topics/algebra', // Add the resource link for each topic
    },
    {
      id: 2,
      name: 'Geometry',
      image: 'https://www.onlinemath4all.com/images/9thnewsylabusex4.3q8p2.png',
      resourceLink: '/topics/geometry',
    },
    {
      id: 3,
      name: 'Calculus',
      image: 'https://miro.medium.com/v2/resize:fit:673/1*wZaclw9iy7QMmZ0CGrOKPw.png',
      resourceLink: '/topics/calculus',
    },
    // Add more topics as needed
  ];

  return (
    <div>
      <h2>Mathematics Main Page</h2>
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
