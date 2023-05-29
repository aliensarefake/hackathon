import React from 'react'; 
import './HomePage.css';
import {Link} from 'react-router-dom';
import FeatureCard from './FeatureCard';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="heading-container">
        <h1 className='firstRow'>Accessible Education</h1>
        <h1>for Every Student</h1>
        <h1>from Anywhere</h1>
      </div>

      <header className="header">
        <p>We're a nonprofit organisation with the mission to provide a </p>
        <p>free, world-class education for anyone, anywhere.</p>
      </header>

      <main className="content">
        <div className='row1'>
            <FeatureCard color="linear-gradient(45deg, rgb(234, 234, 234), rgb(255, 192, 203))" title="Centralised Resources" description="Free resources available for all to peruse" path="subjects"/>
            <FeatureCard color="linear-gradient(45deg, rgb(255, 215, 0), rgb(234, 234, 234), rgb(255, 192, 203))" title="Gamified Learning" description="Points can be accumulated & Prizes can be won!" path="subjects"/>
        </div>
        <div className='row2'>
            <FeatureCard color="linear-gradient(45deg, rgb(186, 222, 252), rgb(234, 234, 234))" title="Peer Tutoring Services" description="Free resources available for all to peruse" path="subjects"/>
            <FeatureCard color="linear-gradient(45deg, rgb(234, 234, 234), rgb(186, 222, 252), rgb(255, 192, 203))" title="Chat Groups" description="Free resources available for all to peruse" path="subjects"/>
        </div>
      </main>

      <footer className="footer">
        <p>© 2023 Accessible Education. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
