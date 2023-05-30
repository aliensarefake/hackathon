import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../LoginPage/LoginPage'; 
import { useParams } from 'react-router-dom';
import "./TopicCard.css"

const TopicCard = ({ topic }) => {
    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit',
      };

    return (
      <div className="topic-container">
          <div className='topic-header-color'></div>
        <div className='title'>
        <Link style={linkStyle} to="/juniorCollege/subjects/Mathematics/algebra">
            <span>
                {topic.name}
            </span>
        </Link>

        </div>
          <div className='description'>
              {topic.description}
          </div>
      </div>
    );
};

export default TopicCard;

