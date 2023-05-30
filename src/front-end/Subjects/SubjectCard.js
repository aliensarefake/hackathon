import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../LoginPage/LoginPage'; 
import { useParams } from 'react-router-dom';
import "./SubjectCard.css"

const SubjectCard = ({ subject }) => {
    const { isLoggedIn } = useAuth();
    let { subject: subjectName } = useParams(); 

    return (
      <div className="subject-container">
          <div className='subject-header-color'></div>
        <div className='title'>
            <span>
                {subject.name}
            </span>
        </div>
          <div className='description'>
              {subject.description}
          </div>
      </div>
    );
};

export default SubjectCard;

