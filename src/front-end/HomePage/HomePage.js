import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="heading-container">
        <h1 className='firstRow'>Accessible Education</h1>
        <h1>for Every Student</h1>
        <h1>from Anywhere</h1>
      </div>

      <header className="header">
        <p>We're a nonprofit organisation with the mission to provide a free,</p>
        <p>world-class education for anyone, anywhere.</p>
      </header>

      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/subjects">Subjects</Link></li>
          <li><Link to="/difficulty">Difficulty</Link></li>
          <li><Link to="/messaging">Messaging</Link></li>
        </ul>
      </nav>

      <header className="hero">
        <h1 className="hero__title">Revolutionising Education, Empowering Students</h1>
        <p className="hero__subtitle">Access to quality resources, personalized tutoring, interactive study tools, and a supportive community, all in one place.</p>
        <button className="hero__cta-button">Start Exploring</button>
      </header>

      <main className="content">
        <section className="features">
          <div className="feature-card">
            <img src="resources-icon.svg" alt="Resources icon" />
            <h3>Centralized Resources</h3>
            <p>Discover a wealth of study materials, notes, and exam papers, all curated and organized for easy access.</p>
          </div>
          ...
        </section>
      </main>

      <footer className="footer">
        <p>© 2023 Accessible Education. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
