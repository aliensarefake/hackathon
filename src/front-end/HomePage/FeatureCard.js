import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../LoginPage/LoginPage'; 
import "./FeatureCard.css"
import imageSrc from './ezgif-5-37e86791c5.png';

const FeatureCard = (props) => {
    const { isLoggedIn } = useAuth();

    return (
      <div className="feature-container">
          <div className='header-color' style={{ background: props.color }}></div>
          <div>
              <img className='image' src={imageSrc}></img>
          </div>
          {isLoggedIn ? (
              <Link to={props.path} style={{textDecoration: 'none', color: 'black'}}>
                  <div className='title'>
                      <span>
                          {props.title}
                      </span>
                  </div>
              </Link>
          ) : (
              <Link to="/login" style={{textDecoration: 'none', color: 'black'}}>
                  <div className='title'>
                      <span>
                          {props.title}
                      </span>
                  </div>
              </Link>
          )}
          <div className='description'>
              {props.description}
          </div>
      </div>
    );
};

export default FeatureCard;

